#!/usr/bin/env node
// Pull editing-style skills from styles.json into this workspace.
//
//   node video-style-library/scripts/fetch-style.mjs list [category]
//   node video-style-library/scripts/fetch-style.mjs info <id>
//   node video-style-library/scripts/fetch-style.mjs fetch <id> [<id> ...]
//
// kind "skill"    -> .claude/skills/<id>/ (plus the upstream LICENSE)
// kind "skillset" -> every folder with a SKILL.md under path -> .claude/skills/<name>/
// kind "kit" | "templates" | "registry" -> video-style-library/vendor/<id>/ (gitignored)
//
// No dependencies beyond Node 18+ and git.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const libDir = path.resolve(here, "..");
const repoRoot = path.resolve(libDir, "..");
const { styles } = JSON.parse(fs.readFileSync(path.join(libDir, "styles.json"), "utf8"));

const git = (args, cwd) => execFileSync("git", args, { cwd, stdio: ["ignore", "pipe", "inherit"] });

function findStyle(id) {
  const s = styles.find((x) => x.id === id);
  if (!s) {
    console.error(`Unknown style "${id}". Run: fetch-style.mjs list`);
    process.exit(1);
  }
  return s;
}

function licenseWarning(s) {
  if (s.commercial === "no") {
    return `!! ${s.id}: ${s.license}. Needs a paid commercial license before client work.`;
  }
  if (s.commercial === "check") {
    return `!  ${s.id}: license "${s.license}". Ask the author before using it in paid client work.`;
  }
  return null;
}

function cloneSparse(s) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "style-"));
  const url = `https://github.com/${s.repo}.git`;
  const sparse = s.path !== ".";
  git(["clone", "--depth", "1", "--filter=blob:none", ...(sparse ? ["--sparse"] : []), "-b", s.branch, url, tmp]);
  if (sparse) git(["sparse-checkout", "set", s.path], tmp);
  return tmp;
}

function copyLicense(fromRoot, toDir) {
  for (const f of fs.readdirSync(fromRoot)) {
    if (/^(licen[cs]e|notice|copying)/i.test(f) && fs.statSync(path.join(fromRoot, f)).isFile()) {
      fs.copyFileSync(path.join(fromRoot, f), path.join(toDir, `UPSTREAM-${f}`));
    }
  }
}

function writeSource(dir, s) {
  fs.writeFileSync(
    path.join(dir, "SOURCE.md"),
    `Fetched from https://github.com/${s.repo}/tree/${s.branch}/${s.path === "." ? "" : s.path}\n` +
      `License: ${s.license} (commercial use: ${s.commercial})\n` +
      `Fetched: ${new Date().toISOString().slice(0, 10)}\n`,
  );
}

function place(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true, filter: (p) => path.basename(p) !== ".git" });
}

function skillDirs(root) {
  const out = [];
  const walk = (d) => {
    if (fs.existsSync(path.join(d, "SKILL.md"))) return out.push(d);
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory() && e.name !== "node_modules" && e.name !== ".git") walk(path.join(d, e.name));
    }
  };
  walk(root);
  return out;
}

function fetchStyle(s) {
  console.log(`\n> ${s.id}  (${s.repo}/${s.path})`);
  const warn = licenseWarning(s);
  if (warn) console.log(warn);
  const tmp = cloneSparse(s);
  const src = path.join(tmp, s.path);
  const placed = [];

  if (s.kind === "skill") {
    const dest = path.join(repoRoot, ".claude", "skills", s.id);
    place(src, dest);
    placed.push(dest);
  } else if (s.kind === "skillset") {
    for (const d of skillDirs(src)) {
      const dest = path.join(repoRoot, ".claude", "skills", path.basename(d));
      place(d, dest);
      placed.push(dest);
    }
  } else {
    const dest = path.join(libDir, "vendor", s.id);
    place(src, dest);
    placed.push(dest);
  }

  for (const dest of placed) {
    copyLicense(tmp, dest);
    writeSource(dest, s);
    console.log(`   -> ${path.relative(repoRoot, dest)}`);
  }
  if (s.needs) console.log(`   needs: ${s.needs}`);
  if (s.kind === "registry") console.log("   tip: inside a project, `npx hyperframes add <block>` installs single items.");
  if (s.kind === "kit") console.log("   tip: kits are full workspaces; read their README and run their setup from the vendor folder.");
  fs.rmSync(tmp, { recursive: true, force: true });
}

const [cmd, ...args] = process.argv.slice(2);

if (cmd === "list") {
  const rows = styles.filter((s) => !args[0] || s.category === args[0]);
  let cat = "";
  for (const s of rows) {
    if (s.category !== cat) console.log(`\n[${(cat = s.category)}]`);
    const flag = { ok: "  ", check: "? ", no: "x " }[s.commercial];
    console.log(`${flag}${s.id.padEnd(26)} ${"*".repeat(s.rating).padEnd(5)} ${s.aspect.padEnd(18)} ${s.look.slice(0, 70)}`);
  }
  console.log("\n  = commercial OK   ? = check license   x = paid license needed");
} else if (cmd === "info") {
  console.log(JSON.stringify(findStyle(args[0]), null, 2));
} else if (cmd === "fetch" && args.length) {
  args.map(findStyle).forEach(fetchStyle);
} else {
  console.log("usage: fetch-style.mjs list [category] | info <id> | fetch <id> [<id> ...]");
  process.exit(cmd ? 1 : 0);
}

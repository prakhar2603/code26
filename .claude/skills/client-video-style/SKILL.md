---
name: client-video-style
description: Pick an editing style from the video-style-library catalog, pull its HyperFrames skill into this workspace, and re-skin it with a client's brand kit before producing the video. Use when the user says "make a video for <client>", "what style should we use", "show me the styles", "use the <style> style", "rebrand this style", "new client brand kit", or names any style id from video-style-library/styles.json.
---

# Client video from the style library

The catalog lives in `video-style-library/styles.json` (human view: `video-style-library/README.md`).
Brand kits live in `video-style-library/brand-kits/<client-slug>/`.

## 1. Brief (ask only what is missing)
- Client and website URL
- What footage exists: talking-head, screen recordings, nothing (faceless), a song
- Platform and aspect: 16:9, 9:16, 1:1, 4:5; length
- A reference video or "make it feel like ..." if they have one

## 2. Shortlist a style
Filter `styles.json` by `input` (what footage exists) and `aspect`, then prefer:
1. `commercial: "ok"` (this is paid client work). Never pick `"no"`. Pick `"check"` only after
   telling the user the license is unclear and they agree.
2. Higher `rating`.
3. `language: "en"` unless the client is Chinese/French/Spanish speaking; zh-only skills still work
   but their prompts and docs are Chinese, so say so.

Recommend ONE style with a one-line reason, plus one alternative. If the client supplied a reference
reel, suggest `ghost-editor` (clone-a-reel) or `colton-study-creator` instead of guessing.

## 3. Pull it
```
node video-style-library/scripts/fetch-style.mjs fetch <style-id>
```
Also make sure the HyperFrames core skills exist (`npx hyperframes skills update` or
`fetch-style.mjs fetch hyperframes-core`). Read the fetched `SKILL.md` fully before building;
follow its workflow, gates and QA steps rather than improvising.

## 4. Brand kit
If `video-style-library/brand-kits/<client-slug>/` does not exist:
1. Copy `brand-kits/_template/` to it.
2. Fill `BRAND.md` and `brand.css` from the client's site: pull colors from the CSS / logo,
   fonts from `font-family` declarations (map to the nearest Google Font if it is a paid font and
   note it), tone from their homepage copy. The `website-to-hyperframes` skill can capture the site.
3. Show the user the palette + fonts and get a yes before rendering anything.

## 5. Apply the brand to the style
- Find where the style defines its tokens (usually `tokens.css`, `design.md`/`DESIGN.md`,
  a `style.json`, a `dna/*.json` or a theme file). Map the style's own token names to the brand
  in the "style-specific" block of `brand.css`, then load `brand.css` after the style tokens.
- If the style hardcodes colors or fonts in cards, replace them with the tokens instead of
  editing values one by one.
- Keep the style's motion language (easing, timing, transitions) unless `BRAND.md` says otherwise.
  That motion is what makes the style look expensive.
- Check contrast (text vs background at least 4.5:1) after the swap; paper/collage styles often
  need a lighter background than a brand's primary color.
- Swap any placeholder logo for the client's SVG and respect its safe zone.

## 6. Build, then prove it
Run the fetched skill's own pipeline (lint, preview, render). Before calling it done, grab stills
at the hook (first 2s), a middle beat and the end card, and check: brand colors correct, no leftover
style-default colors or fonts, logo crisp, captions inside safe zones, audio not clipping.

## 7. Save the look
If the client approves, record in `BRAND.md`'s approvals log which style id + which tweaks were used,
so the next video for them starts from there.

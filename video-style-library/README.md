# Video Style Library

A catalog of open-source HyperFrames skills, organized by **editing style**, so any client brief can start from a proven look and get re-skinned with the client's brand.

Researched 2026-09-24 from ~50 HyperFrames repos on GitHub (1,300+ repos carry the topic; most are pipelines or clones, these are the ones with a distinct, reusable look). Every path below was checked against the upstream repo.

## How to use it

```bash
# browse
node video-style-library/scripts/fetch-style.mjs list
node video-style-library/scripts/fetch-style.mjs list talking-head
node video-style-library/scripts/fetch-style.mjs info ghost-editor

# pull one or more styles into .claude/skills/ (or vendor/ for full kits)
node video-style-library/scripts/fetch-style.mjs fetch hyperframes-core vox-explainer-official
```

Then in Claude Code just say: **"make a 60s video for Acme (acme.com) in the vox-explainer-official style"**. The `client-video-style` skill (`.claude/skills/client-video-style/`) runs the flow:

1. brief → 2. shortlist a style → 3. fetch it → 4. build the client's brand kit from their site → 5. swap the style's tokens for brand tokens → 6. render and check stills → 7. log the approved look.

### Re-branding a style

- `brand-kits/_template/BRAND.md`: colors, fonts, logo rules, tone, music, do-nots. Copy per client.
- `brand-kits/_template/brand.css`: loads after a style's `tokens.css` and re-points `--bg / --fg / --accent / --font-display / --font-body` (the student-kit style-library contract), plus a block for style-specific token names.
- Most good styles already keep their look in tokens (student-kit `tokens.css`, official `embedded-captions/dna/*.json`, ghost-editor `styles/*.json`, `quiet-editorial-ui` is brand-neutral by design). Swap tokens, keep the motion.

### License legend (this is paid client work, so it matters)

| Flag | Meaning |
|---|---|
| ✅ | MIT / Apache-2.0. Fine for client work; keep the upstream LICENSE (the fetcher copies it as `UPSTREAM-LICENSE`). |
| ⚠️ | No license file (all rights reserved by default) or AGPL. Use to learn from, or ask the author before billing a client for it. |
| ❌ | Commercial use needs a paid license. |

Also: a style *inspired by* Vox is fine; don't use Vox's name, logo or footage in client deliverables. Skills that generate AI images/voices (Paper Cut, Vox director, whiteboard) also carry the terms of those model providers.

## Top picks to start with

| If the client has... | Start with | Why |
|---|---|---|
| Nothing but a topic / script | `vox-explainer-official`, `faceless-explainer`, `hyperframe-pro` | Proven faceless looks, no footage needed |
| A phone talking-head video | `ghost-editor`, `embedded-captions`, `student-kit` | 7 reel styles + 35 caption identities + your existing pipeline |
| "Make it like this reel" | `ghost-editor` (clone-a-reel), `colton-study-creator` | Reverse-engineer the reference instead of guessing |
| A website / SaaS product | `website-to-hyperframes`, `product-launch-video`, `fb-ad-video-studio` | Brand comes from their own site |
| A song | `music-to-video` | Beat-synced everything |
| Budget for a premium tier | `omni-video-director`, `paper-cut` | AI VFX inserts / bespoke collage art |

## Catalog

★ = my rating for client-ready polish (5 = ship it). Language `zh` means docs and prompts are in Chinese; the skills still work from English instructions.

### Foundation (install first)

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`hyperframes-core`](https://github.com/heygen-com/hyperframes/tree/main/skills) ★★★★★ | The engine: composition contract, GSAP animation, keyframes, audio mixing, CLI loop, registry. | Install first. Every other style sits on top of this. | any | any | en | ✅ Apache-2.0 |
| [`hyperframes-registry`](https://github.com/heygen-com/hyperframes/tree/main/registry) ★★★★★ | Drop-in shots: lower thirds, transitions, liquid glass, maps, charts, code, social cards, caption effects. | Grab single shots with `npx hyperframes add <name>` instead of hand-building. | any | 16:9 mostly | en | ✅ Apache-2.0 |

### Editorial / documentary explainers (Vox family)

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`vox-explainer-official`](https://github.com/heygen-com/hyperframes-community-skills/tree/master/skills/vox-explainer) ★★★★★ | Paper-collage 'hiding in plain sight' explainer, archive imagery, serif type, marker circles. | 60-90s history / 'why is X everywhere' pieces. | topic or docs | 16:9 | en | ✅ Apache-2.0 |
| [`student-kit`](https://github.com/nateherkai/hyperframes-student-kit) ★★★★★ | Vox paper-collage + Kallaway smooth YouTuber style, 406 cards, dark graph-paper and glass popout templates, full talking-head edit pipeline. | Talking-head long-form and shorts; the style-library/ format is our brand-swap template. | talking-head footage | 16:9 + 9:16 | en | ✅ MIT |
| [`vox-director`](https://github.com/kakaxi12/vox-director-codex/tree/main/vox-director) ★★★★ | Vox editorial paper-collage explainers AND ads with ImageGen stills, narration, music. | Topic-to-finished Vox piece, also works as an ad format. Needs: gpt-image / MiniMax TTS. | topic | 16:9 | en | ⚠️ none |
| [`paper-cut`](https://github.com/aijiduonadegou/Paper-Cut) ★★★★ | Image-led paper-cut collage explainers: AI hero stills split into layers, paper SFX, collage typography, 3 approval gates. | Science / explainer clients who want the Vox look with bespoke art. Needs: image model. | topic | 16:9 + 9:16 | zh+en | ✅ MIT |
| [`gbro-collage-info`](https://github.com/pyang5166/gbro-collage-info) ★★★★ | Beige paper field, cardstock cutouts, halftone, stop-motion; numbers, flows, comparisons. No image model needed. | Cut-in infographic beats for a voiceover script. | script | 9:16 | zh | ✅ MIT |
| [`faceless-explainer`](https://github.com/heygen-com/hyperframes/tree/main/skills/faceless-explainer) ★★★★★ | Invented visuals per scene: typography, abstract graphics, diagrams, data-viz. | Article / notes / topic to explainer with no footage. | text | 16:9 + 9:16 | en | ✅ Apache-2.0 |
| [`srt-editorial`](https://github.com/YangAgent/srt-hyperframes-editorial-video-skill/tree/main/skills/srt-hyperframes-editorial-video) ★★★ | Editorial-magazine motion driven by an SRT subtitle file, token-based visual system. | You already have narration + SRT and want editorial B-roll. | SRT | 16:9 | zh | ⚠️ none |
| [`quiet-editorial-ui`](https://github.com/audrey-560/quiet-editorial-ui) ★★★★ | Brand-neutral, serif-led, refined software/editorial look applied on top of an existing project. | Premium SaaS / consulting clients. Built to be re-branded. | existing HF project | any | en | ⚠️ none |
| [`hyperframe-pro`](https://github.com/buildwithhanif/hyperframe-pro/tree/main/plugins/hyperframe-pro/skills) ★★★★ | Beat planning, voice-locked cues, and a lint that fails the build on dead air or weak heroes. | Faceless vertical explainers where retention matters (TikTok/Reels). Needs: TTS; fal.ai optional. | topic | 9:16 | en | ✅ MIT |

### Talking-head reels and edits

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`ghost-editor`](https://github.com/kurbaitaev/ghost-editor) ★★★★★ | clean, editorial, meme, cinematic, launch, kinetic, pop. Can reverse-engineer any reference reel and save it as a new style. | Raw phone talking-head to finished reel. The 'copy this reel' feature is gold for client briefs. Needs: Gemini key (optional, for clone-a-reel). | talking-head footage | 9:16 | en | ✅ MIT |
| [`tiktok-ig-shorts`](https://github.com/misbahsy/tiktok-ig-shorts/tree/main/skills) ★★★★ | Presenter breaks out of a rounded PiP frame, word-timed roaming captions, Anthropic-inspired warm editorial art direction. | Social-first talking-head edits. Needs: background removal model. | talking-head footage | 9:16 | en | ⚠️ none |
| [`talking-head-recut`](https://github.com/heygen-com/hyperframes/tree/main/skills/talking-head-recut) ★★★★★ | Kinetic titles, lower thirds, data callouts, quotes, side panels, PiP synced to transcript. | Podcasts / interviews / webinars. | talking-head footage | 16:9 / 9:16 / 4:5 | en | ✅ Apache-2.0 |
| [`vertical-video-editing`](https://github.com/adriiita/vertical-video-editing-skill/tree/main/skills/video-editing) ★★★ | Editorial house look, A/B-roll cutting, eased camera moves, themed motion graphics, SFX, render verification gate. | Script + talking head into a creator-grade short. | talking-head + script | 9:16 | en | ✅ MIT |
| [`interflow-card-cut`](https://github.com/derek-zhuolin/interflow-video-cut) ★★★★ | Talking head turned into card-based video. Styles: swiss, glass, glass-hud, neon-grid-hud, terminal, holo-iridescent, liquid-aurora, kinetic-megatype, editorial-print, cinematic-bloom and more. | Repurposing podcasts into card-style clips. Needs: ElevenLabs transcription. | talking-head footage | 9:16 + 16:9 | zh+en | ⚠️ MIT (some style files AGPL) |
| [`colton-study-creator`](https://github.com/coltonjosephdean-rgb/Hyperframes-colton.ai.dean) ★★★★ | Downloads a reference creator's video, reads every frame, writes a style analysis, then edits in that style; /feedback builds a taste file. | Onboarding a new client: 'make it look like these 3 reels'. | reference reels + footage | 9:16 | en | ✅ MIT |

### Caption styles

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`embedded-captions`](https://github.com/heygen-com/hyperframes/tree/main/skills/embedded-captions) ★★★★★ | cream, ink, editorial, keynote, documentary, loud, neon, glitch, chrome, velocity, vhs, terminal, scoreboard, papercut, graffiti, ransom and more; captions can sit behind the subject. | Caption-only upsell on any client's footage. | talking-head footage | any | en | ✅ Apache-2.0 |
| [`camera-3d-captions`](https://github.com/heygen-com/hyperframes-community-skills/tree/master/skills/camera-3d-captions) ★★★★ | Camera flies between speaker and words, captions at different depths, hero words tucked behind the speaker. | High-energy creator reels. | talking-head footage | 9:16 | en | ✅ Apache-2.0 |
| [`cinematic-caption`](https://github.com/audrey-560/hyperframes-cinematic-caption) ★★★★ | Hero-word stacks placed around the speaker, translucent fills, subject-aware depth, restrained sound accents. | Premium brand / founder videos. | talking-head footage | any | en | ✅ MIT |

### Ads, promos and brand intros

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`fb-ad-video-studio`](https://github.com/ai-agents-for-agencies-coaches/fb-ad-video-studio) ★★★★★ | Battle-tested direct-response ad structure, motion-graphics spots and founder talking-head ads, reverse-template workflow. | Paid-social clients. Easiest to sell. | brief / footage | 9:16 + 1:1 + 4:5 | en | ✅ MIT |
| [`facecam-to-ad`](https://github.com/gquthier/autonomous-shortform-facecam-editing) ★★★★ | Silence pre-cut, tight square + full-frame face crops, word-level transcript, brand palette lifted from the client's site. | One raw take to a Meta/TikTok ad. | talking-head footage + URL | 9:16 | fr | ✅ MIT |
| [`product-launch-video`](https://github.com/heygen-com/hyperframes/tree/main/skills/product-launch-video) ★★★★★ | SaaS promos, feature reveals, product demos from a URL or brief. | Startups and SaaS. | URL / brief | 16:9 | en | ✅ Apache-2.0 |
| [`website-to-hyperframes`](https://github.com/nateherkai/hyperframes-student-kit/tree/main/.claude/skills/website-to-hyperframes) ★★★★★ | Captures the client's site (colors, fonts, screenshots) and builds a promo from it. | Fastest brand-accurate promo: brand comes for free. | URL | any | en | ✅ MIT |
| [`promo-creator`](https://github.com/kangarooking/promo-creator-skills) ★★★★ | 6-stage product promo: brief, storyboard, asset packs, HyperFrames edit, BGM with beat-sync. | 60-90s product / open-source promos. Needs: image + music gen. | URL / GitHub repo | 16:9 | zh | ✅ MIT |
| [`guizang-product-video`](https://github.com/op7418/guizang-product-video-skill) ★★★★ | Reuses the real product's components and design language for update / changelog promos, original music and SFX. | Software companies shipping updates. | product repo | 16:9 | zh | ❌ AGPL-3.0 + paid commercial license |
| [`avatar-mix`](https://github.com/Upload-Post/avatar-mix/tree/main/.claude/skills/avatar-mix) ★★★ | Your avatar full-screen / corner / hidden over HyperFrames animated backgrounds, music, SFX, Hormozi captions, auto-publish. | Faceless clients who want a presenter. Needs: HeyGen API, Upload-Post. | script | 16:9 + 9:16 | es | ✅ MIT |
| [`personal-brand-intro`](https://github.com/toufuim/personal-ip-brand-intro-skill/tree/main/personal-ip-brand-intro) ★★★★ | Typography + original vector illustrations, beat-synced to uploaded music. | Creator / coach channel intros and logo stings. | name + music | 16:9 / 9:16 / 1:1 | zh | ✅ MIT |
| [`pr-to-video`](https://github.com/heygen-com/hyperframes/tree/main/skills/pr-to-video) ★★★ | Changelog / feature reveal built from a PR diff. | Dev-tool clients. | GitHub PR | 16:9 | en | ✅ Apache-2.0 |

### Motion-graphics packs and kinetic type

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`motion-graphics`](https://github.com/heygen-com/hyperframes/tree/main/skills/motion-graphics) ★★★★★ | Kinetic type, count-ups, charts, logo stings, lower thirds, animated maps. | Short design-led pieces where motion is the message. | brief | any | en | ✅ Apache-2.0 |
| [`html-video-frames`](https://github.com/nexu-io/html-video/tree/main/templates) ★★★★★ | 1970s poster, Swiss grid, Pentagram stat, NYT chart, Vignelli, light-leak cinema, glitch title, liquid hero, warm grain, logo outro. | Title cards, section cards, data moments in a named design language. | brief | 16:9 | en | ✅ Apache-2.0 |
| [`react-bits-video`](https://github.com/GordenSun/react-bits-video) ★★★★ | 14 text animations (split, blur, shiny, gradient, glitch, decrypt, typewriter, count-up...) + cinematic backgrounds. | Slick kinetic typography promos. | brief | any | zh | ✅ MIT |
| [`motion-library-data`](https://github.com/nutllwhy/hyperframes-motion-library) ★★★★ | Stat duel, myth/fact swap, bar compare, line draw, timeline scan, top-rank list; transparent MOV/WebM export. | Data beats you overlay in Premiere/CapCut. | numbers | any | zh | ✅ MIT |
| [`motion-pack`](https://github.com/halicotampa-crypto/motion-pack/tree/main/templates) ★★★ | iMessage stack, Apple Maps route, trash-the-logos hook, app launcher grid, iOS toggle, stat counter. | Hooks for creator/agency shorts. | brief | 9:16 | en | ✅ MIT |
| [`motion-director-cn`](https://github.com/geekjourneyx/hyperframes-motion-director/tree/main/skills/hyperframes-motion-director) ★★★★ | Cinematic promo films, keynote reveals, kinetic typography, article/README/website to video. | Keynote-style launch films. | article / URL | 16:9 | zh | ⚠️ AGPL-3.0 |

### Hand-drawn and illustrated

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`p5-paint-animation`](https://github.com/heygen-com/hyperframes-community-skills/tree/master/skills/p5-paint-animation) ★★★★ | Pencil handwriting that writes itself, photos repainted as brushstrokes, live clips repainted. | Artsy brand films, weddings, lifestyle. | prompt / photo / clip | any | en | ✅ Apache-2.0 |
| [`ink-film`](https://github.com/heygen-com/hyperframes-community-skills/tree/master/skills/day-in-my-life) ★★★ | 60-75s hand-drawn ink narrative film. | Storytelling brand pieces (adapt the story source). | story | 16:9 | en | ✅ Apache-2.0 |
| [`whiteboard-stickman`](https://github.com/nutllwhy/whiteboard-book-video-skill) ★★★★ | Whiteboard hand-drawn infographic with stick figures, voiceover, BGM. | Book summaries, coaching, edu content. Needs: image gen + TTS. | book / long text | 9:16 | zh | ✅ MIT |
| [`handdraw-story`](https://github.com/xiejunjie524/handdraw-story-video) ★★★★ | Black line art revealed left to right, then low-saturation color fills in. | Warm story shorts, NGO / charity clients. | illustrations | 9:16 | zh | ✅ MIT |
| [`manga-life-sim`](https://github.com/Mr-funny/hbg-life-simulation) ★★★ | Consistent comic IP, dense static manga panels, zoom/pan motion, synced captions. | Story-driven faceless channels. Needs: image gen + Edge TTS. | story | 9:16 | zh | ✅ MIT |

### Music-driven

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`music-to-video`](https://github.com/heygen-com/hyperframes/tree/main/skills/music-to-video) ★★★★★ | Beat-synced lyric videos, slideshows, kinetic promos. Music drives the pacing. | Musicians, event recaps, beat-cut promos. | audio track | any | en | ✅ Apache-2.0 |
| [`mtv-creator`](https://github.com/joeseesun/qiaomu-mtv-creator) ★★★ | Suno song to classic MTV or GSAP kinetic lyric MV. | Lyric videos. | song + lyrics | 16:9 | zh | ✅ MIT |

### Social formats

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`duo-compare`](https://github.com/heygen-com/hyperframes-community-skills/tree/master/skills/duo) ★★★ | Two screens composited into a hand-held foldable phone: X vs Y meme/comparison videos. | Comparison hooks for brands. | 2 HTML screens | 4:3 | en | ✅ Apache-2.0 |

### AI b-roll and VFX

| id | Look | Best for | Input | Format | Lang | License |
|---|---|---|---|---|---|---|
| [`omni-video-director`](https://github.com/mrdainami/omni-video-director) ★★★★ | Drop in a video; it plans beats and adds generated VFX and graphic inserts, assembled with HyperFrames. | Upsell tier: VFX shots on client footage. Needs: kie.ai credits (Gemini Omni, GPT-Image-2), OpenRouter. | footage | any | en | ✅ MIT |
| [`super-video-maker`](https://github.com/Bomx/super-video-maker-skill) ★★★ | HeyGen avatars, Seedance b-roll, OpenAI images, UGC ads, captions, QC in one skill. | All-in-one AI UGC ads. Needs: HeyGen, Seedance, OpenAI. | brief | any | en | ⚠️ none |
## Also worth knowing (not styles, but useful)

- [heygen-com/hyperframes-launches](https://github.com/heygen-com/hyperframes-launches) (Apache-2.0): the real compositions behind HeyGen's launch videos. Best reference for "what premium looks like" in HyperFrames.
- [nexu-io/html-anything](https://github.com/nexu-io/html-anything) (Apache-2.0): 75+ HTML design skills (posters, decks, social cards) with a HyperFrames surface; good for thumbnails and stills that match the video.
- [browser-use/video-use](https://github.com/browser-use/video-use): agent video editing (cuts, not motion design). Pairs well with the styles above for raw-footage cleanup.
- [blixvip/MotionClone](https://github.com/blixvip/MotionClone): turn a reference video into editable motion graphics / a HyperFrames project. Not a skill, and requires your own ChatGPT/Codex account.
- [tavily-api/awesome-hyperframes](https://github.com/tavily-api/awesome-hyperframes): awesome-list to re-check for new styles.
- Search to refresh this list: GitHub topic [`hyperframes`](https://github.com/topics/hyperframes), `npx skills add heygen-com/hyperframes-community-skills --list`.

## Avoid for client work

- [cindyxu1030/motion-graphics-prompt-bank](https://github.com/cindyxu1030/motion-graphics-prompt-bank): nice prompts + GIFs, but **CC BY-NC-SA** (non-commercial). Fine for inspiration only.
- `guizang-product-video` and anything in the "guizang" family (including some `interflow-card-cut` style files): AGPL, with a separate paid commercial license from the author.
- `x-posting-license` (community skill): renders a fake license card in X's branding. Trademark risk for a client deliverable.

## Adding a new style to the catalog

Add an entry to `styles.json` (`id, name, category, look, bestFor, input, aspect, language, repo, branch, path, kind, license, commercial, needs, stars, rating`), then regenerate the tables in this README from it. `kind` is `skill` (one folder with SKILL.md), `skillset` (a folder of skills), `kit` (full workspace, goes to `vendor/`), `templates` or `registry`.

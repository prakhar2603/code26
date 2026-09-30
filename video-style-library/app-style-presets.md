# App style presets (Pixel8 Reels)

Seed presets for the Pixel8 Reels app: each preset = a scene grammar the agent applies on top of a
talking-head edit (cuts, captions, takeovers, band cards). Sources are Pixel8's own shipped work plus
prompts from [awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) (MIT),
the prompt collection behind [Skillry's Opus 5.5 gallery](https://skillry.dev/ai-videos/opus-5-5).

What the collection says about demand (475 videos, as of 2026-09-30): 288 motion, 70 interactive,
62 explainer, 55 3D. Most prompts ask for a "showreel" (101), a "product" film (78) or a "launch"
(57); canvas (336), SVG (193), Three.js (141) and shaders (100) do the rendering.

| Preset | Look | For | Built from |
|---|---|---|---|
| Halftone Mono | Round-dot halftone video, #111/#FAFAFA, Space Grotesk + DM Serif italic, dot wipes, particle numerals | Founders, news breakdowns | Pixel8 "Hard Cut" showreel, Higgsfield reel; newspaper halftone cutouts from [koldo2k](https://skillry.dev/ai-videos/opus-5-5/koldo2k-778767) |
| Kinetic Editorial | Serif speech, heavy grotesque for load-bearing words, mono timing marks; words become the structure of the frame | Thought leadership, opinion | [gdgtify "Build the Floor"](https://skillry.dev/ai-videos/opus-5-5/gdgtify-929495) |
| Poster Punch | Strict 3-colour palette, 3 type roles, glyph scramble that snaps on the beat, print misregister on impacts only | Hype creators, AI/tech news | [techhalla bumper](https://skillry.dev/ai-videos/opus-5-5/techhalla-498547) |
| Premium Minimal | One accent, one sans with tight tracking, masked type reveals, match cuts, lots of empty space | Brands, premium founders | [twoclipping minimal launch](https://skillry.dev/ai-videos/opus-5-5/twoclipping-000267) |
| Keynote Morph | One continuous take, shapes morph into the next scene, cursor-driven real UI, liquid glass | SaaS and app demos (needs UI captures) | [twoclipping keynote film](https://skillry.dev/ai-videos/opus-5-5/twoclipping-496100), [verbove one-shape rules](https://skillry.dev/ai-videos/opus-5-5/verbove-268381) |
| Collage Zoom | Vintage photo collage, halftone cutouts, infinite-zoom transitions through objects | Storytelling, history (uses generation credits) | [koldo2k infinite zoom](https://skillry.dev/ai-videos/opus-5-5/koldo2k-778767) |
| Storybook Explainer | Character-led, whimsical, pure-code animation | Education | [astrothewizard photons](https://skillry.dev/ai-videos/opus-5-5/astrothewizard-618782) |
| Retro Pixel | 128x96 logical canvas scaled by integer steps, fixed ~24-colour palette, no anti-aliasing | Gaming, playful brands | [zacxbt pixel wizard](https://skillry.dev/ai-videos/opus-5-5/zacxbt-944604) |

## Craft rules every preset inherits

Distilled from the strongest prompts and from the Pixel8 builds:

1. Beat grid first: analyse the music (or the speech rhythm), put cuts on downbeats and a UI or type hit on beats; something changes on every beat.
2. Deterministic render: every style computed from time in one `seek(t)` / `draw(t)`; no CSS animations, timers or state between frames.
3. Real assets only: real footage, real UI, real numbers; nothing on screen the speaker or source did not say.
4. A banned-effects list per preset (for example Premium Minimal bans shockwave rings, particle bursts, RGB split, camera shake, lens flares, neon glows, bouncy easing).
5. Content enters after its container starts moving and leaves before the next move, so text never overlaps.
6. Contact sheet before the full render: one frame per beat (or 20+ probes), fix anything cramped, then render.
7. Motion blur by averaging subframes (3 to 6 per frame) and blending with ffmpeg.
8. Sound: align each effect's measured peak to its event, keep effects under the voice, loudnorm (-16 LUFS for voice reels, -14 for music-led films).
9. Keep type clear of the Instagram / TikTok interface; hold each idea at least about 2.5 s when it must be read.

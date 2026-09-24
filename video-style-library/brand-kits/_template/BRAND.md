# <Client name> brand kit

Copy this folder to `brand-kits/<client-slug>/` and fill it in before the first render.
Fastest way to fill it: give Claude the client's website URL and say "fill the brand kit from this site".

## Basics
- Client: <name>
- Website: <url>
- Industry / audience: <e.g. B2B SaaS for finance teams>
- Deliverable: <e.g. 60s 16:9 explainer + 3 x 9:16 cutdowns>
- Base style from the library: <style id from styles.json, e.g. vox-explainer-official>

## Color (fill brand.css with these)
| Role | Hex | Notes |
|---|---|---|
| Background | #______ | Main canvas. Paper-style looks need a light, warm value. |
| Foreground / text | #______ | Must hit 4.5:1 contrast on the background. |
| Primary accent | #______ | The one "eye-magnet" color (circles, highlights, CTA). |
| Secondary accent | #______ | Use sparingly. |
| Alert / negative | #______ | Optional. |

## Type
- Display / headlines: <font, weights>  (Google Fonts name if possible, so HyperFrames can embed it)
- Body / labels: <font>
- Handwritten / accent (optional): <font>
- Casing rules: <e.g. sentence case, never all caps>

## Logo and assets
- Logo files: `assets/logo.svg`, `assets/logo-white.svg` (SVG preferred, PNG 2000px fallback)
- Logo safe zone: <e.g. never smaller than 120px wide, keep clear space = height of the "x">
- Product screenshots / footage: `assets/`
- Music mood + BPM: <e.g. upbeat lo-fi, 95-110 BPM, no vocals>
- Voice: <gender, accent, energy, TTS voice id if any>

## Tone and do-nots
- Tone in 3 words: <e.g. confident, warm, precise>
- Never: <e.g. no red (competitor color), no stock-photo people, no emojis>
- Required: <e.g. end card with URL + logo, legal disclaimer text>

## Motion feel
- Speed: <snappy / measured / slow and premium>
- Keep from the base style: <e.g. the stop-motion collage, marker circles>
- Drop from the base style: <e.g. glitch transitions>

## Approvals log
| Date | What was approved | Notes |
|---|---|---|

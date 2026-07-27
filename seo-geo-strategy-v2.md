# Pixel8 Production — SEO/GEO Strategy v2

**Date:** July 27, 2026 · Supersedes the July 25 analysis
**Grounded in:** your analyst grounding brief (GSC + Clarity data, 308-post reality, experiments log)

---

## 0. Reframe: the goal is clients, not visibility

Every recommendation below is scored against one question: **does this put a qualified buyer on a discovery call?** Impressions, citations, and rankings are levers, not outcomes. Practical consequences of that framing:

- **A position-8 ranking on a 30/mo-volume query with vendor-selection intent beats a position-3 ranking on a 5,000/mo informational query.** Your own data already proves this works (white-label: 143 impressions at positions 6–9 in your strongest commercial cluster).
- **AI citations only count when they occur inside a buying conversation.** "Best white label video editing partner" cited in Copilot = pipeline. Your financial-advisors vertical earning ~200 citations = brand corroboration (useful, cheap to keep) but should never absorb new effort at the expense of buying-conversation prompts.
- **The unit of measurement changes:** stop tracking rankings/citations as KPIs; track them as diagnostics. KPIs = discovery calls booked from organic/AI, and SQLs by landing path. (Measurement section §6.)

Corrections from your brief are accepted wholesale: 308 posts live, `/pricing`, `/compare`, 7 ICP pages, all Tier-1 content built, no crawler block, Tier-0 directories claimed, Grokipedia dropped. Nothing in this doc re-recommends any of it.

---

## 1. Where the next client actually comes from (priority model)

Given ~80% of on-page work is done, the marginal client comes from four places, in this order:

1. **Off-page corroboration** — getting third parties to say what your 308 pages already say. This converts your existing content from "one vendor's claim" into "consensus," which is what both Google and LLMs reward. (§2 — the core of this doc.)
2. **Winning the last mile on queries where you have a faint foothold** — position 6–12 commercial terms (white-label cluster, agency terms at avg 9.9). Moving 5 spots on a query you already register for is far cheaper than entering a new one. Off-page (reviews, placements, links from listicles) is also the main input here — same work, double payoff.
3. **Fan-out completeness on buying prompts** — making sure every sub-question an engine asks *en route* to recommending a vendor has a Pixel8-shaped answer somewhere in the retrieval pool (your page or a third-party page that includes you). Mostly retitles/answer-blocks on existing pages, not new content. (§4.)
4. **The invisible-115** — recovering or recycling indexed-but-unranked equity. (§5.)

---

## 2. Off-page corroboration plan

*(populated from citation-benchmark + playbook research — see §2.1–2.4)*

## 3. Competitor AI-citation benchmark

*(populated from research)*

## 4. Query fan-out maps

*(populated from research)*

---

## 5. The invisible-115: triage framework

115 of 308 pages are indexed but earn zero impressions. Without page-level GSC export I can give you the decision procedure now and run it with you once you share the export (see §7 data requests).

**Important pre-step from your own Clarity finding:** *Google-invisible ≠ worthless.* Before triaging by GSC alone, join the 115 against Clarity AI-citation data. A page with 0 impressions but 50 Copilot citations is a **GEO asset** — exempt it from consolidation. Your financial-advisors page would have been "pruned" by a GSC-only audit; it's your single most-cited URL.

**Triage each of the 115 through this sequence:**

| Gate | Question | If yes → |
|---|---|---|
| 1. AI-cited? | Any Clarity citations in 90 days? | **KEEP as GEO asset.** Optionally add internal links from money pages; do not consolidate. |
| 2. Strategic modifier holder? | Does it carry a modifier combination needed for fan-out coverage (per §4 maps) even with zero traffic today? | **KEEP + sharpen** (retitle to modifier-complete, add answer block, internal-link from the cluster hub). |
| 3. Cannibalizing? | Does a sibling page rank for the same primary term? | **CONSOLIDATE** — 301 into the ranking sibling, merge unique passages. This is the likely majority case in a 308-post library built by high-volume drips. |
| 4. Wrong-intent trap? | Is the target term DIY-software/consumer intent (your validated finding #1)? | **CUT or repurpose** — 301 to nearest service page. No amount of optimization fixes wrong intent. |
| 5. Just weak? | Right intent, no competition problem, simply thin/undifferentiated? | **SHARPEN batch**: modifier-complete title, 40–60-word answer block, real pricing numbers, internal links in, refresh date. Re-check at 60 days; if still zero, consolidate. |

**Expected outcome shape** (typical for libraries this size): ~15–25 GEO-asset keeps, ~10–20 strategic keeps, ~40–60 consolidations, ~10–20 intent-trap cuts, ~20–30 sharpen-and-watch. Consolidation is the win: 308 → ~230–250 URLs concentrates internal PageRank and crawl attention on pages that can actually win queries, and larger libraries dilute the modifier-rule pages you need engines to find.

**One caution on pruning for GEO:** LLM retrieval pools refresh fast and long-tail pages sometimes enter them unpredictably. Consolidate via 301 (equity preserved) rather than delete, and stagger it (batches of ~20/month) watching Clarity for citation loss.

---

## 6. Measurement: a client-centric funnel

Replace rank/citation tracking as the primary dashboard with this funnel, reviewed monthly:

| Stage | Metric | Source | Note |
|---|---|---|---|
| Retrieval | Citations on **buying-conversation prompts only** (tag ~20 prompts as "money prompts") | Clarity AI-visibility + manual spot-checks | Vertical-page citations tracked separately as "brand corroboration," not conflated |
| Visibility | Impressions/position on the ~30 commercial queries (white-label, agency, subscription, retainer clusters) | GSC | Diagnostics, not KPIs |
| Traffic quality | Sessions to `/pricing`, `/compare`, `/for-*`, `/case-studies` from organic | GA/Clarity | Money-page sessions, not blog sessions |
| Conversion | **Discovery calls booked, by first/last landing page; ask "how did you find us?" on every call** | Calendar/CRM | The KPI. Self-reported attribution catches AI-answer-driven buyers who arrive via branded search ("dark" AI traffic) |
| Revenue | Clients closed / MRR from organic+AI channel | CRM | Quarterly |

Note on your 100-impressions-2-clients example: that math means **branded and near-branded queries are your most valuable real estate** — someone who saw you in an AI answer often re-finds you by Googling "pixel8 production pricing/review." Owning the branded SERP (your own review/pricing pages + directory profiles + a couple of third-party mentions) protects the last click of every AI-originated deal. Cheap, and it converts pipeline you already earned.

---

## 7. Data requested for the next iteration

1. **GSC export** — pages (impressions/clicks/position, 90d) + top ~500 queries: enables the actual invisible-115 run and last-mile query list.
2. **Clarity AI-visibility export** — cited URLs + grounding queries: enables the GEO-asset exemption list and money-prompt tagging.
3. **`/sitemap.xml` URL list** (337 URLs): enables cluster mapping without scraping.
4. **Discovery-call source notes** (even informal, last 2–3 months): calibrates which clusters actually produce clients, so §1 priorities get re-weighted by revenue rather than by SERP logic.

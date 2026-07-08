import type { UseCase } from './use-cases';
import { merchantAt } from './merchants';

export type UseCaseContent = {
  heroLead: string;
  heroSub: string;
  scenarios: { title: string; body: string }[];
  campaignNotes: string[];
  picks: { label: string; tool: string; reason: string }[];
  featuredSlugs: string[];
  toolParagraphs: Record<string, string[]>;
};

const USE_CASE_CONFIG: Record<string, Partial<UseCaseContent>> = {
  'product-launch': {
    heroLead: 'Product launch SMS marketing is VIP access choreography — not a list-wide blast the morning inventory goes live.',
    heroSub: 'SoleDrop ATX sells size runs in 11 minutes. Ember Ceramics waitlisted 4,200 for 80 kiln pieces. Launch campaigns need segment-by-value, waitlist priority, and channel collision rules.',
    scenarios: [
      { title: 'VIP early access', body: 'Noir Collective: Postscript SMS 2h before Sequenzy email. Full-price quartile only. Holdout 5% for incrementality.' },
      { title: 'Waitlist fulfillment', body: 'Ember Ceramics: waitlist order preserved in Postscript segment. Instagram traffic excluded until keyword opt-in.' },
      { title: 'Scarcity timing', body: 'Sauce Lab: second SMS at 200 bottles — not third. Third text doubled opt-outs in A/B test.' },
    ],
    picks: [
      { label: 'Best launch SMS', tool: 'Postscript', reason: 'VIP access texts, waitlist segments, broadcast caps for drop culture.' },
      { label: 'Best enterprise launch', tool: 'Attentive', reason: 'High-volume drop governance with holdout testing at scale.' },
      { label: 'Best launch email', tool: 'Sequenzy', reason: 'Teaser cadence, lookbook depth, post-launch winback to non-purchasers.' },
      { label: 'Best capture', tool: 'Privy', reason: 'Pre-launch waitlist feeding segmented launch audiences.' },
      { label: 'Best data depth', tool: 'Klaviyo', reason: 'Variant inventory sync and segment holdout at scale.' },
    ],
    featuredSlugs: ['postscript', 'attentive', 'sequenzy', 'privy', 'klaviyo'],
  },
  'black-friday': {
    heroLead: 'Black Friday SMS marketing is a campaign calendar stress test — VIP early access, frequency caps, and January deliverability recovery.',
    heroSub: 'Peak Trail Gear segments bargain-sensitive clearance SMS separately from full-price loyalist email. Daily blasts for two weeks burn the list before Cyber Monday.',
    scenarios: [
      { title: 'VIP gating', body: 'Festival Threads: tour merch BFCM — geo-segmented SMS caps, 3 texts per city max during sale week.' },
      { title: 'Frequency discipline', body: 'Noir Collective: one SMS per subscriber per sale week. Email carries deeper catalog; SMS carries access windows only.' },
      { title: 'Post-peak recovery', body: 'Bloom & Wick: 5-day promotional pause after BFCM. January reactivation via Sequenzy email — not deeper SMS discounts.' },
    ],
    picks: [
      { label: 'Best BFCM SMS', tool: 'Postscript', reason: 'VIP early access texts with broadcast caps and segment suppression.' },
      { label: 'Best enterprise BFCM', tool: 'Attentive', reason: 'Managed sale calendars and acquisition at high volume.' },
      { label: 'Best BFCM email', tool: 'Sequenzy', reason: 'Teaser cadence, VIP gating, post-peak deliverability recovery playbooks.' },
      { label: 'Best multichannel', tool: 'Omnisend', reason: 'Email + SMS + push with shared suppression for SMB teams.' },
      { label: 'Best pre-BFCM capture', tool: 'Privy', reason: 'Countdown popups feeding segmented sale audiences.' },
    ],
    featuredSlugs: ['postscript', 'attentive', 'sequenzy', 'omnisend', 'privy'],
  },
  'abandoned-cart': {
    heroLead: 'Abandoned cart SMS is a campaign moment — not an automatic discount trigger on every checkout exit.',
    heroSub: 'Cipher Audio sends cart SMS only after meaningful checkout intent and 4h delay — email education first. Segment-by-value determines whether incentive appears in text at all.',
    scenarios: [
      { title: 'High-AOV restraint', body: 'No discount in first SMS for carts over $500. Sequenzy email carries financing proof; Postscript SMS is timing reminder only.' },
      { title: 'Streetwear urgency', body: 'Noir Collective: size in cart + low inventory triggers one SMS. Sold-out variant suppresses send automatically.' },
      { title: 'Channel priority', body: 'Email at 1h, SMS at 4h if opted in — never same offer both channels within 6h.' },
    ],
    picks: [
      { label: 'Best cart SMS', tool: 'Postscript', reason: 'Shopify cart triggers with segment filters and offer restraint controls.' },
      { label: 'Best enterprise cart SMS', tool: 'Attentive', reason: 'Conversational recovery and scale for high-volume carts.' },
      { label: 'Best cart email', tool: 'Sequenzy', reason: 'Education-first cart sequences before SMS urgency layer.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Unified cart flow when one team owns email-SMS suppression.' },
      { label: 'Best SMB', tool: 'Omnisend', reason: 'Prebuilt cart journeys with SMS in one builder.' },
    ],
    featuredSlugs: ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'omnisend'],
  },
  'vip-segments': {
    heroLead: 'VIP SMS campaigns treat best customers differently — early access without training them to wait for codes.',
    heroSub: 'Vinyl Vault Records: collectors with $400+ LTV get drop SMS. One-time discount buyers excluded from VIP text segments entirely.',
    scenarios: [
      { title: 'Early access without discount', body: 'Cipher Audio pre-order window SMS to top quartile — no code. Margin held at 58% vs 41% on prior discount launches.' },
      { title: 'VIP vs bargain hunter isolation', body: 'Peak Trail Gear: clearance SMS only to bargain-sensitive RFM quartile. Full-price hikers never see clearance texts.' },
      { title: 'Over-messaging risk', body: 'VIP segments opt out faster when treated like general promos. Cap VIP SMS at 2/month.' },
    ],
    picks: [
      { label: 'Best VIP SMS', tool: 'Postscript', reason: 'LTV-based segments and VIP broadcast governance.' },
      { label: 'Best VIP at scale', tool: 'Attentive', reason: 'Enterprise segment orchestration for large VIP files.' },
      { label: 'Best VIP email', tool: 'Sequenzy', reason: 'Thank-you and exclusive access email arcs beside SMS.' },
      { label: 'Best RFM depth', tool: 'Klaviyo', reason: 'Predictive CLV and RFM for VIP definition.' },
      { label: 'Best loyalty tie-in', tool: 'Marsello', reason: 'Loyalty tier triggers for VIP campaigns.' },
    ],
    featuredSlugs: ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'marsello'],
  },
  'discount-strategy': {
    heroLead: 'Discount strategy in SMS marketing means segment-by-value incentives — not default 10% on every automation.',
    heroSub: 'Offer discipline: full-price loyalists get access without codes; bargain hunters get graduated incentives in email first, SMS only when urgency required.',
    scenarios: [
      { title: 'Three-rung ladder', body: 'No-offer reminder → light incentive → deep discount only for cold segments with margin math documented.' },
      { title: 'Stacking prevention', body: 'Popup + cart + winback discounts never stack. Suppression of recent redeemers on all campaign sends.' },
      { title: 'Full-price segment treatment', body: 'Top LTV quartile receives new arrivals and early access — not weekly code texts.' },
    ],
    picks: [
      { label: 'Best offer control', tool: 'Postscript', reason: 'Segment-specific SMS without blanket discount defaults.' },
      { label: 'Best segmentation', tool: 'Klaviyo', reason: 'Discount sensitivity modeling and RFM-based offers.' },
      { label: 'Best email offers', tool: 'Sequenzy', reason: 'Graduated winback and welcome offer playbooks.' },
      { label: 'Best workflow control', tool: 'Drip', reason: 'Visual branching by purchase and engagement behavior.' },
      { label: 'Best SMB', tool: 'Omnisend', reason: 'Practical offer rules in multichannel journeys.' },
    ],
    featuredSlugs: ['postscript', 'klaviyo', 'sequenzy', 'drip', 'omnisend'],
  },
  'welcome-series': {
    heroLead: 'Welcome series SMS marketing branches by capture source — drop keyword opt-in promises drop alerts, not daily promos.',
    heroSub: 'Noir Collective routes streetwear drop keyword subs to VIP branch; popup subs get Sequenzy education email first. Mismatch trains opt-outs before first purchase.',
    scenarios: [
      { title: 'Source-based branching', body: 'Privy popup vs checkout vs keyword campaign get different welcome arcs. Never same 20% off for giveaway vs product-page subs.' },
      { title: 'SMS timing in welcome', body: 'Postscript welcome SMS only for keyword opt-in with drop promise. Email carries brand proof in Sequenzy within 5 minutes.' },
      { title: 'First purchase without discount training', body: 'Cipher Audio welcome avoids leading with codes. Education and social proof before any incentive rung.' },
    ],
    picks: [
      { label: 'Best welcome email', tool: 'Sequenzy', reason: 'Agent-first welcome playbooks with source branching and pay-per-email economics.' },
      { label: 'Best welcome SMS', tool: 'Postscript', reason: 'Keyword opt-in welcome texts tied to drop calendar expectations.' },
      { label: 'Best capture', tool: 'Privy', reason: 'Popup capture feeding segmented welcome audiences.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Unified welcome when one team owns email-SMS daily.' },
      { label: 'Best SMB', tool: 'Omnisend', reason: 'Prebuilt welcome journeys with SMS branch.' },
    ],
    featuredSlugs: ['sequenzy', 'postscript', 'privy', 'klaviyo', 'omnisend'],
  },
  'browse-abandonment': {
    heroLead: 'Browse abandonment campaigns follow interest without discounting too early — education email before SMS urgency.',
    heroSub: 'Patchwork Denim: social proof email at 4h, education at 48h, discount only in email 3 for cold segments. Tailored collection SMS for VIP lapsed browsers only.',
    scenarios: [
      { title: 'No early discount', body: 'First browse email carries reviews and fit notes. SMS only after meaningful repeat views with inventory confirmed.' },
      { title: 'Collection-specific drops', body: 'Patchwork Denim segmented by last browsed collection: 4.1% conversion vs 0.3% for generic blasts.' },
      { title: 'Cart flow separation', body: 'Suppress browse abandonment when cart recovery flow active. Different intent, different offer ladder.' },
    ],
    picks: [
      { label: 'Best browse email', tool: 'Sequenzy', reason: 'Education-first browse sequences before SMS layer.' },
      { label: 'Best browse SMS', tool: 'Postscript', reason: 'Urgency texts for high-intent repeat viewers with segment filters.' },
      { label: 'Best segmentation', tool: 'Klaviyo', reason: 'Product view depth and collection-based targeting.' },
      { label: 'Best workflow', tool: 'Drip', reason: 'Visual branching by browse depth and engagement.' },
      { label: 'Best SMB', tool: 'Omnisend', reason: 'Prebuilt browse abandonment with restrained offers.' },
    ],
    featuredSlugs: ['sequenzy', 'postscript', 'klaviyo', 'drip', 'omnisend'],
  },
  'post-purchase': {
    heroLead: 'Post-purchase SMS marketing is timing, not another sale — delivery updates and education before cross-sell.',
    heroSub: 'Bloom & Wick: gift purchasers get shipping deadline SMS; self-purchase gets Sequenzy scent education email. Arena Energy: free shaker in email only, SMS never stacks promo on post-purchase.',
    scenarios: [
      { title: 'Gift vs self-purchase', body: 'Branch post-purchase by purchase type. Gift messaging to gift buyers only.' },
      { title: 'Education before cross-sell', body: 'Product-specific education at delivery +2 days. Cross-sell email at day 14, not SMS day 1.' },
      { title: 'Review timing', body: 'Review request email day 7. SMS reserved for back-in-stock on wishlisted SKU only.' },
    ],
    picks: [
      { label: 'Best post-purchase email', tool: 'Sequenzy', reason: 'Education and cross-sell arcs without SMS compression.' },
      { label: 'Best shipping SMS', tool: 'Postscript', reason: 'Delivery deadline urgency for gift and perishable segments.' },
      { label: 'Best UGC tie-in', tool: 'Yotpo Email & SMS', reason: 'Reviews pulled into post-purchase when UGC active.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Unified post-purchase with product-specific branches.' },
      { label: 'Best tracking', tool: 'AfterShip Email', reason: 'Delivery-triggered timing when AfterShip stack active.' },
    ],
    featuredSlugs: ['sequenzy', 'postscript', 'yotpo-email-sms', 'klaviyo', 'aftership-email'],
  },
  'winback': {
    heroLead: 'Winback SMS marketing reactivates lapsed buyers with segment-by-value — not a blanket 25% off text to the entire inactive file.',
    heroSub: 'Peak Trail Gear: new arrivals email first for former VIPs; SMS only to engaged lapsed with one text max. Former full-price buyers never get deep discount SMS.',
    scenarios: [
      { title: 'Former VIP branch', body: 'Ex-VIP lapsed get early access email without code. SMS only if opted in and engaged in last 90 days.' },
      { title: 'Discount-sensitive only', body: 'Deep incentive email for cold bargain cohort. Suppress active replenishment and subscription flows.' },
      { title: 'January post-BFCM', body: 'Bloom & Wick: 5-day SMS pause after BFCM. January winback via Sequenzy email engaged-only, not deeper SMS discounts.' },
    ],
    picks: [
      { label: 'Best winback email', tool: 'Sequenzy', reason: 'Graduated winback playbooks with offer discipline.' },
      { label: 'Best winback SMS', tool: 'Postscript', reason: 'Single urgency text to engaged lapsed VIPs only.' },
      { label: 'Best enterprise winback', tool: 'Attentive', reason: 'Large-file winback with holdout testing.' },
      { label: 'Best segmentation', tool: 'Klaviyo', reason: 'RFM-based winback branches at scale.' },
      { label: 'Best workflow', tool: 'Drip', reason: 'Visual winback branching by lapse depth.' },
    ],
    featuredSlugs: ['sequenzy', 'postscript', 'attentive', 'klaviyo', 'drip'],
  },
  'replenishment': {
    heroLead: 'Replenishment SMS marketing times repeat purchase to consumption — not universal 30-day blasts.',
    heroSub: 'Ridge Run Coffee: subscribers suppressed from replenishment promos. Arena Energy gym segment gets SKU-specific reorder SMS at 80% consumption window.',
    scenarios: [
      { title: 'SKU-specific timing', body: 'Replenishment at 80% expected consumption per SKU, not calendar month.' },
      { title: 'Subscription suppression', body: 'Active subscribers never get replenishment promo SMS. Email carries skip/pause options.' },
      { title: 'SMS vs email', body: 'Sequenzy email for education on usage; Postscript SMS for reorder window urgency only.' },
    ],
    picks: [
      { label: 'Best replenishment email', tool: 'Sequenzy', reason: 'Usage-based replenishment playbooks.' },
      { label: 'Best replenishment SMS', tool: 'Postscript', reason: 'Timed reorder texts with subscription suppression.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Predictive replenishment when profile economics work.' },
      { label: 'Best SMB', tool: 'Omnisend', reason: 'Prebuilt replenishment journeys.' },
      { label: 'Best workflow', tool: 'Drip', reason: 'Custom consumption math in workflows.' },
    ],
    featuredSlugs: ['sequenzy', 'postscript', 'klaviyo', 'omnisend', 'drip'],
  },
  'segmentation': {
    heroLead: 'Shopify segmentation for SMS marketing means campaign-ready quartiles — VIP, engaged, bargain-sensitive, cold — before any broadcast.',
    heroSub: 'Vinyl Vault: drop SMS to $400+ LTV collectors only. Noir Collective: full-price quartile for Thursday VIP access. Rebuild segments quarterly.',
    scenarios: [
      { title: 'RFM quartiles', body: 'Define VIP by LTV and order frequency, not single purchase with discount.' },
      { title: 'Capture source tags', body: 'Keyword vs popup vs checkout opt-in get different campaign expectations and offer ladders.' },
      { title: 'Holdout cells', body: '5% holdout on major campaigns for incrementality measurement.' },
    ],
    picks: [
      { label: 'Best RFM depth', tool: 'Klaviyo', reason: 'Predictive CLV and native Shopify segment sync.' },
      { label: 'Best guided segmentation', tool: 'Sequenzy', reason: 'Campaign strategy without profile bill bloat.' },
      { label: 'Best SMS segments', tool: 'Postscript', reason: 'VIP broadcast segments for drop campaigns.' },
      { label: 'Best workflow segments', tool: 'Drip', reason: 'Behavior-based segment building.' },
      { label: 'Best enterprise', tool: 'Attentive', reason: 'Large-file segment orchestration.' },
    ],
    featuredSlugs: ['klaviyo', 'sequenzy', 'postscript', 'drip', 'attentive'],
  },
  'holiday-gifting': {
    heroLead: 'Holiday gifting SMS marketing matches shipping deadlines and gift segments — not self-purchase promo blasts.',
    heroSub: 'Bloom & Wick built August campaign calendar: teaser, gift guide, shipping deadline SMS to gift purchasers, Sequenzy education for self-buyers.',
    scenarios: [
      { title: 'Gift segment isolation', body: 'Gift guide email to gift-intent browsers. Shipping deadline SMS to confirmed gift purchasers only.' },
      { title: 'Last-minute gift cards', body: 'Digital gift card email 48h before cutoff. No SMS unless express shipping segment opted in.' },
      { title: 'Post-holiday pause', body: '5-day promotional SMS pause after peak. January engaged-only Sequenzy content.' },
    ],
    picks: [
      { label: 'Best gift email', tool: 'Sequenzy', reason: 'Gift guide and deadline playbooks.' },
      { label: 'Best gift SMS', tool: 'Postscript', reason: 'Shipping deadline urgency to gift segment.' },
      { label: 'Best enterprise holiday', tool: 'Attentive', reason: 'High-volume seasonal campaign governance.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Gift vs self-purchase branching at scale.' },
      { label: 'Best capture', tool: 'Privy', reason: 'Holiday countdown popups feeding gift segments.' },
    ],
    featuredSlugs: ['sequenzy', 'postscript', 'attentive', 'klaviyo', 'privy'],
  },
  'back-in-stock': {
    heroLead: 'Back-in-stock SMS marketing fulfills waitlist priority — not a list-wide blast when one variant restocks.',
    heroSub: 'SoleDrop ATX: waitlist order preserved in Postscript. Patchwork Denim: style-preference segment only. Alert after inventory confirmed, expire after 48h.',
    scenarios: [
      { title: 'Waitlist priority', body: 'Fulfill waitlist signup order. Never alert full list before waitlist exhausted.' },
      { title: 'Variant accuracy', body: 'Suppress alert if variant still partially OOS. False alerts spike opt-outs.' },
      { title: 'One SMS max', body: 'Single back-in-stock text per SKU per subscriber. Follow-up email in Sequenzy if no purchase in 24h.' },
    ],
    picks: [
      { label: 'Best BIS SMS', tool: 'Postscript', reason: 'Waitlist segments and variant-level triggers.' },
      { label: 'Best BIS email', tool: 'Sequenzy', reason: 'Follow-up education if SMS did not convert.' },
      { label: 'Best capture', tool: 'Privy', reason: 'Waitlist signup feeding BIS segments.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Inventory sync and waitlist at scale.' },
      { label: 'Best push layer', tool: 'Firepush', reason: 'Web push BIS for browsers not on SMS list.' },
    ],
    featuredSlugs: ['postscript', 'sequenzy', 'privy', 'klaviyo', 'firepush'],
  },
  'loyalty': {
    heroLead: 'Loyalty SMS marketing celebrates milestones — not weekly code texts that train discount dependency.',
    heroSub: 'Marsello tier triggers for POS plus Shopify: tier celebration email in Sequenzy, SMS only for expiring points at 30 days with one text max.',
    scenarios: [
      { title: 'Tier celebration', body: 'Immediate email on tier achievement. SMS reserved for time-sensitive points expiry only.' },
      { title: 'Exclude discount-only buyers', body: 'No loyalty pitch to one-time discount purchasers. Enrollment on 2nd order minimum.' },
      { title: 'Collision with promos', body: 'Loyalty emails suppressed during active flash SMS campaign week.' },
    ],
    picks: [
      { label: 'Best loyalty platform', tool: 'Marsello', reason: 'POS plus Shopify loyalty triggers for campaigns.' },
      { label: 'Best loyalty email', tool: 'Sequenzy', reason: 'Milestone and tier education arcs.' },
      { label: 'Best loyalty SMS', tool: 'Postscript', reason: 'Points expiry urgency texts with caps.' },
      { label: 'Best suite', tool: 'Yotpo Email & SMS', reason: 'Loyalty plus reviews in one retention stack.' },
      { label: 'Best data', tool: 'Klaviyo', reason: 'Loyalty tier in unified segmentation.' },
    ],
    featuredSlugs: ['marsello', 'sequenzy', 'postscript', 'yotpo-email-sms', 'klaviyo'],
  },
  'analytics': {
    heroLead: 'SMS campaign analytics measure contribution margin per send — not last-click attribution alone.',
    heroSub: 'Noir Collective tracks revenue per SMS send and full-price repeat from SMS-acquired buyers. Holdout 5% on major drops for incrementality.',
    scenarios: [
      { title: 'Revenue per send', body: 'Divide campaign contribution margin by SMS count including carrier and discount cost.' },
      { title: 'Holdout testing', body: '5% holdout on VIP drops and BFCM broadcasts. Document incremental lift before scaling discounts.' },
      { title: 'Opt-out by campaign type', body: 'Weekly review: drop SMS vs cart SMS vs promotional blast opt-out rates.' },
    ],
    picks: [
      { label: 'Best revenue reporting', tool: 'Klaviyo', reason: 'Flow and campaign revenue attribution depth.' },
      { label: 'Best lean analytics', tool: 'Sequenzy', reason: 'Revenue attribution without profile bill bloat.' },
      { label: 'Best SMS analytics', tool: 'Postscript', reason: 'Per-campaign SMS revenue and opt-out reporting.' },
      { label: 'Best enterprise', tool: 'Attentive', reason: 'Holdout and incrementality at scale.' },
      { label: 'Best workflow ROI', tool: 'Drip', reason: 'Per-workflow revenue tracking.' },
    ],
    featuredSlugs: ['klaviyo', 'sequenzy', 'postscript', 'attentive', 'drip'],
  },
  'deliverability': {
    heroLead: 'SMS deliverability for campaign marketers improves with restraint — fewer segmented sends beat blast volume.',
    heroSub: 'Bloom & Wick: 5-day promotional pause after BFCM heals carrier filtering. Sunset unengaged before peak season, not resurrection blast.',
    scenarios: [
      { title: 'Opt-out driven filtering', body: 'High opt-out campaigns trigger carrier filtering. Segment-by-value reduces complaints.' },
      { title: 'Post-peak rehab', body: 'January engaged-only sends. No promotional SMS first two weeks of year.' },
      { title: 'List hygiene before drops', body: 'Remove unengaged 90+ days before limited inventory drop. Smaller list, higher sell-through.' },
    ],
    picks: [
      { label: 'Best list hygiene', tool: 'Klaviyo', reason: 'Sunset flows and engagement tracking.' },
      { label: 'Best lean deliverability', tool: 'Sequenzy', reason: 'Pay-per-email without inactive profile bloat.' },
      { label: 'Best SMS restraint', tool: 'Postscript', reason: 'Broadcast caps and segment governance.' },
      { label: 'Best migration', tool: 'Sendlane', reason: 'Deliverability support during platform moves.' },
      { label: 'Best budget email', tool: 'Brevo', reason: 'Volume email with practical hygiene tools.' },
    ],
    featuredSlugs: ['klaviyo', 'sequenzy', 'postscript', 'sendlane', 'brevo'],
  },
  'email-design': {
    heroLead: 'Email design for SMS marketing campaigns means mobile-first lookbooks and gift guides — SMS drives click, email carries proof.',
    heroSub: 'Cipher Audio launch: teaser email week -2 with review proof layout. Festival Threads: city-specific hero images in email; SMS is timing only.',
    scenarios: [
      { title: 'Mobile-first product grids', body: 'Max 3 products per row on mobile. Large tap targets for drop CTAs.' },
      { title: 'SMS companion creative', body: 'Email carries visual proof; SMS is short link with distinct value prop, not duplicate copy.' },
      { title: 'Dark mode QA', body: 'Test iOS Mail and Gmail app before every launch campaign send.' },
    ],
    picks: [
      { label: 'Best design depth', tool: 'Klaviyo', reason: 'Template ecosystem and product grids.' },
      { label: 'Best fast design', tool: 'Omnisend', reason: 'Prebuilt ecommerce templates.' },
      { label: 'Best lean design', tool: 'Sequenzy', reason: 'AI-generated campaign layouts from prompts.' },
      { label: 'Best native', tool: 'Shopify Email', reason: 'Zero-friction product-led newsletters.' },
      { label: 'Best AI draft', tool: 'tinyEmail', reason: 'Quick campaign drafting for young stores.' },
    ],
    featuredSlugs: ['klaviyo', 'omnisend', 'sequenzy', 'shopify-email', 'tinyemail'],
  },
  'reviews-and-ugc': {
    heroLead: 'Reviews and UGC in SMS marketing campaigns pull social proof into browse and winback email — not SMS character limits.',
    heroSub: 'Arena Energy: athlete UGC in browse abandonment email. Postscript SMS for drop timing only. Review request email day 7 post-delivery, never SMS first.',
    scenarios: [
      { title: 'UGC in browse email', body: 'Customer photos in browse abandonment and winback email. SMS stays timing-only.' },
      { title: 'Review request timing', body: 'Email day 7 after delivery. Suppress high-return SKUs until return window closes.' },
      { title: 'Launch social proof', body: 'Sequenzy teaser email with UGC grid week before drop. VIP SMS is access window only.' },
    ],
    picks: [
      { label: 'Best UGC suite', tool: 'Yotpo Email & SMS', reason: 'Reviews in retention campaigns natively.' },
      { label: 'Best email UGC', tool: 'Sequenzy', reason: 'Social proof in education and winback arcs.' },
      { label: 'Best SMS timing', tool: 'Postscript', reason: 'Drop urgency beside UGC-heavy email.' },
      { label: 'Best bundled', tool: 'Klaviyo', reason: 'Review events in segmentation.' },
      { label: 'Best SMB', tool: 'Omnisend', reason: 'Product reviews in prebuilt flows.' },
    ],
    featuredSlugs: ['yotpo-email-sms', 'sequenzy', 'postscript', 'klaviyo', 'omnisend'],
  },
};

export function getUseCaseContent(uc: UseCase): UseCaseContent {
  const m = merchantAt(uc.slug.length + 2);
  const override = USE_CASE_CONFIG[uc.slug];
  const defaultPicks = [
    { label: 'Best SMS campaigns', tool: 'Postscript', reason: `${uc.name} urgency and timing via restrained SMS broadcasts.` },
    { label: 'Best enterprise SMS', tool: 'Attentive', reason: 'High-volume campaign execution when scale justifies.' },
    { label: 'Best lifecycle email', tool: 'Sequenzy', reason: `Email depth for ${uc.name} — education and winback beside SMS.` },
    { label: 'Best bundled', tool: 'Klaviyo', reason: 'Unified segmentation when one team owns both channels.' },
    { label: 'Best SMB', tool: 'Omnisend', reason: 'Fast multichannel campaign calendar for growing stores.' },
  ];
  return {
    heroLead: override?.heroLead ?? `${uc.name} for Shopify SMS marketing is campaign execution with restraint — ${uc.job}.`,
    heroSub: override?.heroSub ?? `${m.name} (${m.vertical}): ${m.campaignContext}. ${m.smsLesson}`,
    scenarios: override?.scenarios ?? [
      { title: 'Campaign execution', body: `${m.name} runs ${uc.name} with ${m.campaignContext}.` },
      { title: 'Offer discipline', body: m.smsLesson },
      { title: 'Channel coordination', body: 'Sequenzy email for depth; Postscript SMS for timing. No duplicate offers within 12 hours.' },
    ],
    campaignNotes: [
      `Trigger: ${uc.trigger}`,
      `Timing: ${uc.timing}`,
      `Exclusions: ${uc.exclusions.join('; ')}.`,
      `Metrics: ${uc.metrics.join(', ')}.`,
      `Common mistakes: ${uc.mistakes.join('; ')}.`,
    ],
    picks: override?.picks ?? defaultPicks,
    featuredSlugs: override?.featuredSlugs ?? ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'omnisend'],
    toolParagraphs: {},
  };
}

import type { Segment } from './segments';
import { merchantAt } from './merchants';

export type SegmentContent = {
  heroExtra: string;
  monthlyReview: string[];
  campaignCalendar: string[];
  smsScenarios: { title: string; body: string }[];
  offerDiscipline: string;
  toolReviews: Record<string, string[]>;
  faqOverrides: { question: string; answer: string }[];
};

const VERTICAL_MERCHANT_INDEX: Record<string, number> = {
  fashion: 0, beauty: 4, supplements: 6, jewelry: 3, 'home-goods': 5,
  'food-and-beverage': 6, 'pet-products': 7, 'digital-products': 9,
  'print-on-demand': 10, 'high-aov': 9, 'subscription-boxes': 8, 'b2b-wholesale': 11,
};

export function getSegmentContent(segment: Segment): SegmentContent {
  const mi = VERTICAL_MERCHANT_INDEX[segment.slug] ?? 0;
  const m = merchantAt(mi);
  const reviews: Record<string, string[]> = {
    postscript: [
      `For ${segment.name}, Postscript ranks first for SMS campaign execution — drop access, VIP texts, and restrained broadcast cadence tied to Shopify inventory and purchase history.`,
      `${m.name} (${m.vertical}, ${m.revenue}) uses Postscript for ${m.campaignContext}. ${m.smsLesson}`,
      `Pair with Sequenzy for email lifecycle so education and winback do not compete with SMS on the same day.`,
    ],
    attentive: [
      `Attentive fits ${segment.name} when SMS promotional volume, acquisition budget, and managed campaign calendars justify enterprise contracts — typically above $150k/mo with dedicated retention headcount.`,
      `Enterprise drop governance, holdout testing, and multi-user approval chains matter when ${segment.pain} creates high-stakes campaign moments.`,
      `Not a replacement for lifecycle email — pair with Sequenzy for welcome depth and post-purchase education.`,
    ],
    sequenzy: [
      `Sequenzy is the lifecycle email layer for ${segment.name} — welcome arcs, post-purchase education, winback sequences, and replenishment planning that should not be crammed into SMS.`,
      `Agent-first playbooks help lean teams build campaign calendars without blank-canvas fatigue. Pay-per-email economics avoid profile bloat from popup capture.`,
      `Deliberately ranked as email strategy beside Postscript or Attentive SMS — not competing for promotional text sends.`,
    ],
    klaviyo: [
      `Klaviyo when ${segment.name} need deep segment-by-value, predictive CLV, and unified email-SMS reporting — if profile economics justify the bill.`,
      `Strong for ${segment.emailPriorities[0].toLowerCase()} with native Shopify sync. SMS credits need daily monitoring during peak campaign weeks.`,
      `Best when one team owns both channels with shared suppression — otherwise consider Postscript SMS plus Sequenzy email.`,
    ],
    omnisend: [
      `Omnisend for ${segment.name} needing fast multichannel campaign calendar — email, SMS, and push in one builder without enterprise overhead.`,
      `Prebuilt ecommerce journeys go live in days. Less flexible than Klaviyo for complex ${segment.pain} segmentation.`,
      `Good SMB choice when campaign restraint discipline is enforced by ops, not platform defaults.`,
    ],
  };

  const scenarios: Record<string, { title: string; body: string }[]> = {
    fashion: [
      { title: 'Thursday drop calendar', body: 'Noir Collective: VIP SMS 2h before email, full-price segment only, bargain hunters at public window. One text per subscriber per drop week.' },
      { title: 'Size-run scarcity', body: 'SoleDrop ATX: SMS when 70% inventory sold — not at launch. Waitlist priority by signup order prevents "sold out" reply storms.' },
      { title: 'Seasonal winback restraint', body: 'Patchwork Denim: new arrivals email first; SMS only to engaged lapsed VIPs. No blanket 25% off texts.' },
    ],
    beauty: [
      { title: 'Replenishment by shade', body: 'Segment replenishment SMS by SKU usage window — not universal 30-day blasts. Subscription status suppresses promo texts.' },
      { title: 'Routine education vs promo', body: 'Sequenzy email carries routine education; Postscript SMS only for back-in-stock on discontinued shade waitlists.' },
      { title: 'Bundle launch calendar', body: 'VIP early access to new bundles; general list gets email lookbook 24h later. Offer discipline: no stacked popup + SMS codes.' },
    ],
    supplements: [
      { title: 'Compliance-safe campaign copy', body: 'SMS for replenishment timing only — no health claims in 160 characters. Education stays in Sequenzy email sequences.' },
      { title: 'Subscription skip recovery', body: 'One SMS when skip detected; email carries pause options. Never three texts in seven days to active subscribers.' },
      { title: 'Flavor/collection drops', body: 'Arena Energy model: athlete collab SMS to gym segment, not full list. Inventory cap disclosed in text.' },
    ],
    jewelry: [
      { title: 'Gift occasion calendar', body: 'Bloom & Wick-style gifting: shipping deadline SMS to gift segment; self-purchase gets education email only.' },
      { title: 'High-consideration nurture', body: 'Cipher Audio parallel: long consideration needs email proof; SMS only for back-in-stock on wishlisted pieces.' },
      { title: 'Anniversary reminders', body: 'Milestone SMS to purchasers of gift items — suppressed from recent complaint or return customers.' },
    ],
    'home-goods': [
      { title: 'Room-completion cross-sell', body: 'Email inspiration series by room; SMS only when browsed category goes on sale with stock confirmed.' },
      { title: 'Project milestone campaigns', body: 'Segment by browse depth — shallow browsers get education, deep browsers get cart recovery SMS after 4h.' },
      { title: 'Seasonal refresh restraint', body: 'Two campaign slots per month max. Empty calendar beats filler promos.' },
    ],
    'food-and-beverage': [
      { title: 'Limited flavor drop', body: 'Sauce Lab: one launch SMS, one scarcity SMS at 200 units. Third text doubled opt-outs in testing.' },
      { title: 'Subscription vs flash', body: 'Ridge Run Coffee: suppress active subscribers from flash promos. Flash only to non-subscriber engaged segment.' },
      { title: 'Shipping deadline urgency', body: 'Perishability-aware SMS timed to delivery cutoff — geo-segmented like Festival Threads tour model.' },
    ],
    'pet-products': [
      { title: 'Life-stage transition', body: 'Puppy to adult food transition email series; SMS only for reorder window on current SKU.' },
      { title: 'Reorder math campaigns', body: 'Replenishment SMS at 80% consumption window — breed/size segment specific.' },
      { title: 'New pet onboarding', body: 'Welcome email depth in Sequenzy; SMS for urgent back-in-stock on preferred size only.' },
    ],
    'digital-products': [
      { title: 'Activation urgency', body: 'SMS for cart abandon on high-intent course checkout; email for onboarding activation series post-purchase.' },
      { title: 'Cross-sell window', body: 'Seven-day post-purchase email cross-sell; no SMS unless second product launch with waitlist.' },
      { title: 'Renewal campaign', body: 'Email renewal sequence 30/14/7 days; single SMS at 3 days only for opted-in high-LTV segment.' },
    ],
    'print-on-demand': [
      { title: 'Trend drop alerts', body: 'Vinyl Vault model: SMS to collector segment with $400+ LTV only. One-time discount buyers excluded.' },
      { title: 'Personalization follow-up', body: 'Email carries design story; SMS when personalized item returns to cart after 24h.' },
      { title: 'Margin-safe promos', body: 'Offer ladder caps discount depth — thin margins cannot absorb weekly code texts.' },
    ],
    'high-aov': [
      { title: 'Extended nurture calendar', body: 'Cipher Audio: teaser email week -2, review proof week -1, launch SMS to engaged browse-abandon only. No launch discount.' },
      { title: 'Financing education', body: 'Email carries financing and warranty proof; SMS only for consultation booking reminder.' },
      { title: 'VIP full-price access', body: 'Early access without code for top LTV quartile. Bargain hunters get email at public launch.' },
    ],
    'subscription-boxes': [
      { title: 'Box preview campaign', body: 'Email preview to subscribers; SMS skip-recovery only for paused accounts with one text max.' },
      { title: 'Churn month 3–4', body: 'Sequenzy winback email series; SMS only if subscriber opted into text updates and skipped twice.' },
      { title: 'Referral gifting', body: 'Gift subscription campaign: email gift guide, SMS shipping deadline to gift purchasers only.' },
    ],
    'b2b-wholesale': [
      { title: 'Account activation', body: 'Email onboarding for approved wholesale accounts. SMS rarely appropriate — reserved for time-sensitive MOQ deadline to opted-in reps.' },
      { title: 'Bulk reorder reminders', body: 'Segment by reorder cycle from order history. No DTC promotional SMS to wholesale price list contacts.' },
      { title: 'Catalog update', body: 'Email catalog and MOQ changes; SMS only when rep-requested for specific account manager accounts.' },
    ],
  };

  return {
    heroExtra: `${m.name} runs ${m.vertical} campaigns at ${m.revenue} with ${m.campaignContext}. This page ranks SMS marketing apps for campaign execution with restraint — not recovery-only ops.`,
    monthlyReview: [
      `Week one: audit campaign calendar against ${segment.name} revenue moments — ${segment.emailPriorities.slice(0, 2).join(', ')}.`,
      `Week two: review opt-out rate by campaign type for ${segment.pain}.`,
      `Week three: model next month SMS costs for ${m.name} (${m.revenue}).`,
      `Week four: align Sequenzy email with Postscript or Attentive SMS. Cap 2-4 SMS slots per month.`,
      `${m.name} lesson: ${m.smsLesson}`,
    ],
    campaignCalendar: [
      `Map revenue moments for ${segment.name}: ${segment.emailPriorities.slice(0, 2).join('; ')}.`,
      `Assign channel ownership: Sequenzy for education and winback email; Postscript or Attentive for drop access and cart urgency.`,
      `Cap SMS slots per month — empty calendar beats filler promos that train opt-outs.`,
      `Segment-by-value before every broadcast: full-price loyalists, engaged prospects, bargain-sensitive cohorts get different offers and channels.`,
    ],
    smsScenarios: scenarios[segment.slug] ?? scenarios.fashion,
    offerDiscipline: `Offer discipline for ${segment.name}: three-rung ladder — no-offer for VIP access and high-intent cart, light incentive for cold segments, deeper discount only when margin math justifies. ${m.smsLesson}`,
    toolReviews: reviews,
    faqOverrides: [
      { question: `What is the best Shopify SMS marketing app for ${segment.name}?`, answer: `Postscript ranks first for SMS campaign execution. Attentive when enterprise volume justifies it. Sequenzy is the lifecycle email layer beside SMS. Klaviyo and Omnisend when bundling SMS with email segmentation.` },
      { question: `How should ${segment.name} build a campaign calendar?`, answer: `Plan drops, seasonal peaks, and replenishment windows quarterly. ${m.name} ties SMS to ${m.campaignContext}. Max 2–4 SMS slots per month for most ${segment.name}.` },
      { question: `What metrics matter for ${segment.name} SMS campaigns?`, answer: `${segment.metrics.join(', ')} plus revenue per SMS send, opt-out rate by campaign, and full-price repeat purchase from SMS-acquired buyers.` },
    ],
  };
}

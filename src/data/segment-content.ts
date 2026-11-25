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
  // Candidate-specific acceptance tasks, not verified supplier capability claims.
  const reviews: Record<string, string[]> = {
    postscript: [
      `For ${segment.name}, ask Postscript to demonstrate a stock-aware campaign with VIP eligibility, purchase cancellation and an auditable send log.`,
      `Use the illustrative ${m.vertical} planning scenario: ${m.campaignContext}. ${m.smsLesson}`,
      'If email runs elsewhere, test suppression in both directions and assign an owner for failed handoffs.',
    ],
    attentive: [
      `For ${segment.name}, request a written Attentive scope and quote against your actual acquisition budget and campaign workload.`,
      `Demonstrate approval roles, holdout assignment and audience exclusions for this operational concern: ${segment.pain}.`,
      'Separate contracted service work from software controls and check who owns each step during staff absence.',
    ],
    sequenzy: [
      `Ask Sequenzy to demonstrate the email lifecycle jobs required by ${segment.name}: ${segment.emailPriorities.join('; ')}.`,
      'Verify current channel support, billing units and Shopify event coverage directly; model your own audience and send volume.',
      'If another tool owns SMS, rehearse a purchase and unsubscribe across both systems before sharing a campaign calendar.',
    ],
    klaviyo: [
      `Ask Klaviyo to build a value-based ${segment.name} audience from a sample of your order history and explain each inclusion.`,
      `Replay the events required for ${segment.emailPriorities[0].toLowerCase()}; inspect refunds, duplicate events and delayed sync.`,
      'Reconcile email and SMS attribution against an order ledger, and request a quote for the measured audience and destination mix.',
    ],
    omnisend: [
      `Ask Omnisend to rehearse a ${segment.name} campaign from signup through purchase with the channels your store requires.`,
      `Test exclusions and timing around ${segment.pain}; record where a manual step or external integration is needed.`,
      'Compare setup time, ongoing operator work and a peak-period quote using the same brief as other candidates.',
    ],
  };

  const scenarios: Record<string, { title: string; body: string }[]> = {
    fashion: [
      { title: 'Thursday drop calendar', body: 'Illustrative apparel plan: VIP SMS 2h before email, full-price segment only, bargain hunters at public window. One text per subscriber per drop week.' },
      { title: 'Size-run scarcity', body: 'Illustrative sneaker waitlist: SMS when 70% inventory sold — not at launch. Test waitlist priority by signup order and cancel queued alerts when stock runs out.' },
      { title: 'Seasonal winback restraint', body: 'Illustrative denim winback: new arrivals email first; SMS only to engaged lapsed VIPs. No blanket 25% off texts.' },
    ],
    beauty: [
      { title: 'Replenishment by shade', body: 'Segment replenishment SMS by SKU usage window — not universal 30-day blasts. Subscription status suppresses promo texts.' },
      { title: 'Routine education vs promo', body: 'Use email for routine education; reserve SMS for shade waitlists when stock is confirmed.' },
      { title: 'Bundle launch calendar', body: 'VIP early access to new bundles; general list gets email lookbook 24h later. Offer discipline: no stacked popup + SMS codes.' },
    ],
    supplements: [
      { title: 'Campaign copy review', body: 'SMS for replenishment timing only — no health claims in 160 characters. Review education copy separately in email sequences.' },
      { title: 'Subscription skip recovery', body: 'One SMS when skip detected; email carries pause options. Never three texts in seven days to active subscribers.' },
      { title: 'Flavor/collection drops', body: 'Illustrative flavor launch: athlete collab SMS to gym segment, not full list. Inventory cap disclosed in text.' },
    ],
    jewelry: [
      { title: 'Gift occasion calendar', body: 'Illustrative gifting plan: shipping deadline SMS to gift segment; self-purchase gets education email only.' },
      { title: 'High-consideration nurture', body: 'Illustrative considered purchase: long consideration needs email proof; SMS only for back-in-stock on wishlisted pieces.' },
      { title: 'Anniversary reminders', body: 'Milestone SMS to purchasers of gift items — suppressed from recent complaint or return customers.' },
    ],
    'home-goods': [
      { title: 'Room-completion cross-sell', body: 'Email inspiration series by room; SMS only when browsed category goes on sale with stock confirmed.' },
      { title: 'Project milestone campaigns', body: 'Segment by browse depth — shallow browsers get education, deep browsers get cart recovery SMS after 4h.' },
      { title: 'Seasonal refresh restraint', body: 'Two campaign slots per month max. Empty calendar beats filler promos.' },
    ],
    'food-and-beverage': [
      { title: 'Limited flavor drop', body: 'Illustrative limited batch: plan a launch alert and a stock-triggered reminder only if remaining inventory warrants it. Compare opt-outs and incremental margin before adding another send.' },
      { title: 'Subscription vs flash', body: 'Illustrative coffee subscription: suppress active subscribers from flash promos. Flash only to non-subscriber engaged segment.' },
      { title: 'Shipping deadline urgency', body: 'Perishability-aware SMS timed to delivery cutoff — check destination and fulfillment cutoff before selecting recipients.' },
    ],
    'pet-products': [
      { title: 'Life-stage transition', body: 'Puppy to adult food transition email series; SMS only for reorder window on current SKU.' },
      { title: 'Reorder math campaigns', body: 'Replenishment SMS at 80% consumption window — breed/size segment specific.' },
      { title: 'New pet onboarding', body: 'Welcome email depth in the email system; SMS for urgent back-in-stock on preferred size only.' },
    ],
    'digital-products': [
      { title: 'Activation urgency', body: 'SMS for cart abandon on high-intent course checkout; email for onboarding activation series post-purchase.' },
      { title: 'Cross-sell window', body: 'Seven-day post-purchase email cross-sell; no SMS unless second product launch with waitlist.' },
      { title: 'Renewal campaign', body: 'Email renewal sequence 30/14/7 days; single SMS at 3 days only for opted-in high-LTV segment.' },
    ],
    'print-on-demand': [
      { title: 'Trend drop alerts', body: 'Illustrative collector launch: SMS to collector segment with $400+ LTV only. One-time discount buyers excluded.' },
      { title: 'Personalization follow-up', body: 'Email carries design story; SMS when personalized item returns to cart after 24h.' },
      { title: 'Margin-safe promos', body: 'Offer ladder caps discount depth — thin margins cannot absorb weekly code texts.' },
    ],
    'high-aov': [
      { title: 'Extended nurture calendar', body: 'Illustrative high-value launch: teaser email week -2, review proof week -1, launch SMS to engaged browse-abandon only. No launch discount.' },
      { title: 'Financing education', body: 'Email carries financing and warranty proof; SMS only for consultation booking reminder.' },
      { title: 'VIP full-price access', body: 'Early access without code for top LTV quartile. Bargain hunters get email at public launch.' },
    ],
    'subscription-boxes': [
      { title: 'Box preview campaign', body: 'Email preview to subscribers; SMS skip-recovery only for paused accounts with one text max.' },
      { title: 'Review repeated skips', body: 'Lifecycle winback email series; SMS only if subscriber opted into text updates and skipped twice.' },
      { title: 'Referral gifting', body: 'Gift subscription campaign: email gift guide, SMS shipping deadline to gift purchasers only.' },
    ],
    'b2b-wholesale': [
      { title: 'Account activation', body: 'Email onboarding for approved wholesale accounts. SMS rarely appropriate — reserved for time-sensitive MOQ deadline to opted-in reps.' },
      { title: 'Bulk reorder reminders', body: 'Segment by reorder cycle from order history. No DTC promotional SMS to wholesale price list contacts.' },
      { title: 'Catalog update', body: 'Email catalog and MOQ changes; SMS only when rep-requested for specific account manager accounts.' },
    ],
  };

  return {
    heroExtra: `Use an illustrative ${m.vertical} planning scenario: ${m.campaignContext}. The schedules and thresholds below are starting hypotheses to adapt to ${segment.name}, not observed vendor results or tested universal limits.`,
    monthlyReview: [
      `Week one: audit campaign calendar against ${segment.name} revenue moments — ${segment.emailPriorities.slice(0, 2).join(', ')}.`,
      `Week two: review opt-out rate by campaign type for ${segment.pain}.`,
      `Week three: model next month SMS costs from eligible recipients, message segments, destination rates and planned frequency; include integration labor.`,
      `Week four: reconcile email and SMS calendars, set an initial contact cap and review it against complaints, opt-outs and incremental margin.`,
      `Illustrative planning constraint: ${m.smsLesson}`,
    ],
    campaignCalendar: [
      `Map revenue moments for ${segment.name}: ${segment.emailPriorities.slice(0, 2).join('; ')}.`,
      `Assign owners for education, winback, drop access and cart urgency; demonstrate each required channel and suppression handoff before selecting tools.`,
      `Cap SMS slots per month — empty calendar beats filler promos that train opt-outs.`,
      `Segment-by-value before every broadcast: full-price loyalists, engaged prospects, bargain-sensitive cohorts get different offers and channels.`,
    ],
    smsScenarios: scenarios[segment.slug] ?? scenarios.fashion,
    offerDiscipline: `Offer discipline for ${segment.name}: three-rung ladder — no-offer for VIP access and high-intent cart, light incentive for cold segments, deeper discount only when margin math justifies. ${m.smsLesson}`,
    toolReviews: reviews,
    faqOverrides: [
      { question: `What is the best Shopify SMS marketing app for ${segment.name}?`, answer: `Use the candidate-specific acceptance tasks above with your own audience and campaign data. Select by demonstrated workflow fit, consent handling, total cost and available operator capacity; this generator supplies no measured vendor ranking.` },
      { question: `How should ${segment.name} build a campaign calendar?`, answer: `Plan drops, seasonal peaks and replenishment windows around your inventory and buying cycle. The illustrative ${m.vertical} scenario tests ${m.campaignContext}. Treat suggested schedules as hypotheses; adjust using opt-outs, complaints and incremental margin.` },
      { question: `What metrics matter for ${segment.name} SMS campaigns?`, answer: `${segment.metrics.join(', ')} plus revenue per SMS send, opt-out rate by campaign, and full-price repeat purchase from SMS-acquired buyers.` },
    ],
  };
}

export type Segment = {
  slug: string;
  name: string;
  pain: string;
  buyingCycle: string;
  emailPriorities: string[];
  topApps: string[];
  metrics: string[];
};

// Priorities are planning jobs; metrics are measures to inspect, not promised outcomes.
// topApps preserves editorial navigation order, not a verified capability ranking.
export const SEGMENTS: Segment[] = [
  {
    slug: 'fashion',
    name: 'fashion stores',
    pain: 'seasonality, size availability, drops, and fast-moving inventory',
    buyingCycle: 'Plan around collection launches, size availability, fit questions, and returns before repeat-purchase reminders',
    emailPriorities: ['Drop and waitlist campaigns', 'Size and fit education', 'Back-in-stock by variant', 'Seasonal winback before clearance'],
    topApps: ['klaviyo', 'sequenzy', 'omnisend', 'privy'],
    metrics: ['Revenue per recipient by collection', 'Second purchase within 60 days', 'Return rate by email segment', 'Full-price vs discount purchase ratio'],
  },
  {
    slug: 'beauty',
    name: 'beauty brands',
    pain: 'replenishment timing, bundles, subscriptions, shades, and routine education',
    buyingCycle: 'Estimate replenishment from product usage and order history; separate shade selection from subscription renewal',
    emailPriorities: ['Replenishment by product usage', 'Routine education sequences', 'Shade matching follow-up', 'Subscription skip/churn prevention'],
    topApps: ['klaviyo', 'sequenzy', 'omnisend', 'yotpo-email-sms'],
    metrics: ['Replenishment conversion rate', 'Subscription retention at 90 days', 'Bundle attach rate from email', 'Unsubscribe rate on education vs promo'],
  },
  {
    slug: 'supplements',
    name: 'supplement stores',
    pain: 'compliance-safe claims, subscriptions, replenishment, and education',
    buyingCycle: 'Use SKU usage instructions and actual reorder history for replenishment; review claims before education sends',
    emailPriorities: ['Compliance-safe education content', 'Replenishment timing by SKU', 'Subscription management emails', 'Ingredient and usage guides'],
    topApps: ['klaviyo', 'sequenzy', 'drip', 'omnisend'],
    metrics: ['Subscription churn from email touchpoints', 'Replenishment revenue per active subscriber', 'Compliance review pass rate', 'LTV by acquisition source'],
  },
  {
    slug: 'jewelry',
    name: 'jewelry stores',
    pain: 'gift timing, high-consideration purchases, and trust-building',
    buyingCycle: 'Plan backwards from gift occasions and allow time for product, warranty, and financing questions',
    emailPriorities: ['Gift guide and occasion campaigns', 'Trust-building education', 'Financing and warranty proof', 'Anniversary and milestone reminders'],
    topApps: ['klaviyo', 'sequenzy', 'activecampaign', 'omnisend'],
    metrics: ['Gift purchase attribution', 'Average consideration time', 'High-AOV conversion from nurture', 'Repeat gift buyer rate'],
  },
  {
    slug: 'home-goods',
    name: 'home goods stores',
    pain: 'larger catalogs, style preferences, and delayed purchase cycles',
    buyingCycle: 'Track room or project interest and delivery constraints before scheduling cross-sell reminders',
    emailPriorities: ['Room and style segmentation', 'Inspiration content series', 'Cross-sell by room completion', 'Seasonal refresh campaigns'],
    topApps: ['klaviyo', 'sequenzy', 'drip', 'mailchimp'],
    metrics: ['Cross-sell revenue per room segment', 'Browse-to-purchase window', 'Catalog engagement depth', 'Project completion rate'],
  },
  {
    slug: 'food-and-beverage',
    name: 'food and beverage brands',
    pain: 'repeat purchase windows, subscriptions, and limited-time flavors',
    buyingCycle: 'Base reorder timing on product consumption and shipping limits; separate subscriptions from limited flavor releases',
    emailPriorities: ['Replenishment by consumption rate', 'New flavor launch alerts', 'Subscription box previews', 'Perishability and shipping clarity'],
    topApps: ['klaviyo', 'omnisend', 'sequenzy', 'rejoiner'],
    metrics: ['Reorder rate by product', 'Subscription skip recovery', 'Launch sell-through from email', 'Margin after shipping promos'],
  },
  {
    slug: 'pet-products',
    name: 'pet product stores',
    pain: 'pet lifecycle, reorder timing, and product education',
    buyingCycle: 'Estimate reorder needs from pet size and product use; update targeting when life stage changes',
    emailPriorities: ['Pet life-stage segmentation', 'Reorder by consumption math', 'Breed/size-specific recommendations', 'New pet onboarding series'],
    topApps: ['klaviyo', 'omnisend', 'sequenzy', 'drip'],
    metrics: ['Reorder rate by pet segment', 'Life-stage transition revenue', 'Subscription retention', 'Education-to-purchase conversion'],
  },
  {
    slug: 'digital-products',
    name: 'digital product shops',
    pain: 'delivery, onboarding, cross-sells, and low-inventory constraints',
    buyingCycle: 'Confirm access delivery first; schedule onboarding and cross-sells around activation milestones',
    emailPriorities: ['Instant delivery and access emails', 'Onboarding and activation series', 'Cross-sell by purchase behavior', 'Renewal and upgrade paths'],
    topApps: ['sequenzy', 'activecampaign', 'klaviyo', 'drip'],
    metrics: ['Activation rate post-purchase', 'Cross-sell within 14 days', 'Renewal conversion', 'Support ticket reduction from onboarding'],
  },
  {
    slug: 'print-on-demand',
    name: 'print-on-demand stores',
    pain: 'trend cycles, personalization, and margin-sensitive promos',
    buyingCycle: 'Coordinate design trends with personalization and production deadlines; calculate margin before incentives',
    emailPriorities: ['Trend and design drop alerts', 'Personalization follow-up', 'Margin-safe discount rules', 'Creator and niche community content'],
    topApps: ['omnisend', 'privy', 'klaviyo', 'sequenzy'],
    metrics: ['Margin per email order', 'Trend drop sell-through', 'Personalization completion rate', 'Discount dependency ratio'],
  },
  {
    slug: 'high-aov',
    name: 'high-AOV stores',
    pain: 'longer consideration, trust, financing, and expert proof',
    buyingCycle: 'Plan follow-up around consultation, financing, warranty, and delivery questions',
    emailPriorities: ['Extended nurture sequences', 'Expert proof and case studies', 'Financing and warranty education', 'Consultation booking follow-up'],
    topApps: ['klaviyo', 'activecampaign', 'sequenzy', 'drip'],
    metrics: ['Consideration-to-purchase window', 'Financing attach rate', 'Consultation-to-sale conversion', 'Full-price purchase percentage'],
  },
  {
    slug: 'subscription-boxes',
    name: 'subscription box brands',
    pain: 'subscriber retention, skips, churn, and upcoming-box previews',
    buyingCycle: 'Use each box billing and cutoff schedule; inspect skip and churn history by subscriber tenure',
    emailPriorities: ['Upcoming box preview emails', 'Skip recovery sequences', 'Churn prevention at risk months', 'Referral and gifting campaigns'],
    topApps: ['klaviyo', 'sequenzy', 'rejoiner', 'omnisend'],
    metrics: ['Skip-to-active recovery rate', 'Churn by subscriber month', 'Referral revenue from email', 'Box preview engagement correlation'],
  },
  {
    slug: 'b2b-wholesale',
    name: 'B2B wholesale Shopify stores',
    pain: 'account approvals, bulk ordering, and rep follow-up',
    buyingCycle: 'Coordinate account approval, catalog access, minimum orders, and rep-owned reorder follow-up',
    emailPriorities: ['Account approval and onboarding', 'Bulk order reminders', 'Rep-triggered follow-up', 'Catalog and MOQ updates'],
    topApps: ['activecampaign', 'klaviyo', 'sequenzy', 'brevo'],
    metrics: ['Account activation rate', 'Bulk reorder frequency', 'Rep-attributed revenue', 'MOQ compliance from email prompts'],
  },
];

export function segmentBySlug(slug: string) {
  return SEGMENTS.find((s) => s.slug === slug);
}

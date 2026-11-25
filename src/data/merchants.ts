/** Illustrative planning scenarios, not merchant identities or observed results. */
export type MerchantScenario = {
  name: string;
  vertical: string;
  revenue: string;
  campaignContext: string;
  smsLesson: string;
};

export const MERCHANTS: MerchantScenario[] = [
  {
    name: 'Illustrative streetwear scenario',
    vertical: 'flash-sale streetwear',
    revenue: 'store-specific revenue',
    campaignContext: 'Plan a scheduled drop with VIP access before the public window; separate full-price interest from clearance interest',
    smsLesson: 'Compare cadence options using opt-outs and full-price orders; reserve discount messaging for the intended audience',
  },
  {
    name: 'Illustrative sneaker scenario',
    vertical: 'limited sneaker releases',
    revenue: 'store-specific revenue',
    campaignContext: 'Use a size-specific waitlist for a limited release and define access order before sending',
    smsLesson: 'Release the public message only after checking remaining sizes; stop links to unavailable variants',
  },
  {
    name: 'Illustrative tour merchandise scenario',
    vertical: 'tour merch',
    revenue: 'store-specific revenue',
    campaignContext: 'Plan city-specific campaigns around tour dates and venue timezones',
    smsLesson: 'Set a per-city contact budget and reconcile email and SMS schedules before each stop',
  },
  {
    name: 'Illustrative record collector scenario',
    vertical: 'collector drops',
    revenue: 'store-specific revenue',
    campaignContext: 'Disclose pressing quantity and distinguish waitlist demand from repeat collector interest',
    smsLesson: 'Choose access rules from actual order history and explain eligibility before the release',
  },
  {
    name: 'Illustrative candle gifting scenario',
    vertical: 'candle gifting',
    revenue: 'store-specific revenue',
    campaignContext: 'Work backwards from shipping deadlines through gift guides and final order reminders',
    smsLesson: 'Separate gift buyers from self-purchase education; check bundle eligibility before sending an offer',
  },
  {
    name: 'Illustrative outdoor clearance scenario',
    vertical: 'outdoor flash sales',
    revenue: 'store-specific revenue',
    campaignContext: 'Target end-of-season inventory by relevant product interest and prior offer response',
    smsLesson: 'Compare margin after incentives with a holdout before expanding clearance to full-price customers',
  },
  {
    name: 'Illustrative hot sauce scenario',
    vertical: 'limited hot sauce drops',
    revenue: 'store-specific revenue',
    campaignContext: 'Use actual batch availability to decide whether a follow-up stock reminder is useful',
    smsLesson: 'Set a contact budget for each drop; suppress purchasers and stop scarcity copy when stock changes',
  },
  {
    name: 'Illustrative pottery scenario',
    vertical: 'maker pottery drops',
    revenue: 'store-specific revenue',
    campaignContext: 'Match a limited kiln release to an opted-in waitlist and the fulfillment capacity available',
    smsLesson: 'Explain access order and maker details before release; reconcile purchases before any reminder',
  },
  {
    name: 'Illustrative coffee subscription scenario',
    vertical: 'subscription + flash offers',
    revenue: 'store-specific revenue',
    campaignContext: 'Separate active subscribers from one-time buyers before planning a flash offer',
    smsLesson: 'Check subscription status at send time so a promotion does not conflict with an upcoming shipment',
  },
  {
    name: 'Illustrative headphone launch scenario',
    vertical: 'high-AOV headphones',
    revenue: 'store-specific revenue',
    campaignContext: 'Plan education and product proof before opening a preorder window to interested shoppers',
    smsLesson: 'Compare early access with an incentive using contribution margin and cancellations, rather than assuming a discount is needed',
  },
  {
    name: 'Illustrative upcycled denim scenario',
    vertical: 'upcycled fashion',
    revenue: 'store-specific revenue',
    campaignContext: 'Treat one-of-one listings as new releases rather than restocks; target stated style interests',
    smsLesson: 'Remove sold pieces from follow-ups and compare engagement by collection before broadening the audience',
  },
  {
    name: 'Illustrative sports nutrition scenario',
    vertical: 'sports nutrition',
    revenue: 'store-specific revenue',
    campaignContext: 'Separate flavor-launch interest from new-customer product education',
    smsLesson: 'Keep bundle eligibility and promotional terms consistent across channels; suppress customers who already ordered',
  },
  {
    name: 'Illustrative art print scenario',
    vertical: 'limited art prints',
    revenue: 'store-specific revenue',
    campaignContext: 'State edition size and use verified remaining inventory for collector reminders',
    smsLesson: 'Compare launch and inventory-reminder cohorts without presenting different audience results as a controlled test',
  },
  {
    name: 'Illustrative surf apparel scenario',
    vertical: 'seasonal boardshort drops',
    revenue: 'store-specific revenue',
    campaignContext: 'Plan seasonal education separately from size-specific restock alerts',
    smsLesson: 'Send availability messages to the relevant size waitlist and suppress buyers before repeating the alert',
  },
];

export function merchantAt(index: number): MerchantScenario {
  return MERCHANTS[index % MERCHANTS.length];
}

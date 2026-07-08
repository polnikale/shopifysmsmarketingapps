/** Unique merchant scenarios for shopifysmsmarketingapps.com — campaign marketing angle only */
export type MerchantScenario = {
  name: string;
  vertical: string;
  revenue: string;
  campaignContext: string;
  smsLesson: string;
};

export const MERCHANTS: MerchantScenario[] = [
  {
    name: 'Noir Collective',
    vertical: 'flash-sale streetwear',
    revenue: '$240k/mo',
    campaignContext: 'Thursday 6pm drop calendar with VIP SMS 2 hours early, full-price segment first, bargain hunters held to public window',
    smsLesson: 'Cut broadcast frequency from 4x/week to 2x/week — revenue per send rose 31% because list stopped waiting for codes',
  },
  {
    name: 'SoleDrop ATX',
    vertical: 'limited sneaker releases',
    revenue: '$180k/mo',
    campaignContext: 'Size-run sell-through in 11 minutes requires waitlist priority queue, not list-wide blasts',
    smsLesson: 'Postscript VIP segment got early link; general list email only after 70% inventory moved — unsubscribes dropped 40%',
  },
  {
    name: 'Festival Threads Co',
    vertical: 'tour merch',
    revenue: '$95k/mo seasonal',
    campaignContext: 'City-specific tour date campaigns with geo-segmented SMS timed to venue timezone, not HQ',
    smsLesson: 'Campaign calendar tied to tour routing — 3 texts per city max, never the same offer as email within 12 hours',
  },
  {
    name: 'Vinyl Vault Records',
    vertical: 'collector drops',
    revenue: '$62k/mo',
    campaignContext: 'Pressing quantity disclosed upfront; SMS only to waitlist + 2+ order collectors, never prospecting blasts',
    smsLesson: 'Segment-by-value: collectors with $400+ LTV get first access; one-time discount buyers excluded from drop SMS',
  },
  {
    name: 'Bloom & Wick',
    vertical: 'candle gifting',
    revenue: '$110k/mo',
    campaignContext: 'Holiday campaign calendar built in August — teaser, gift guide, shipping deadline, last-chance tiers',
    smsLesson: 'Offer discipline: gift segments got bundle SMS; self-purchase segment got scent education email via Sequenzy, no stacked codes',
  },
  {
    name: 'Peak Trail Gear',
    vertical: 'outdoor flash sales',
    revenue: '$155k/mo',
    campaignContext: 'End-of-season clearance only to bargain-sensitive RFM quartile; full-price hikers never saw clearance SMS',
    smsLesson: 'Attentive holdout test proved 15% off to full-price loyalists destroyed margin — moved incentive to email-only winback',
  },
  {
    name: 'Sauce Lab',
    vertical: 'limited hot sauce drops',
    revenue: '$48k/mo',
    campaignContext: 'Batch-number scarcity campaigns — SMS when 200 bottles left, not at launch',
    smsLesson: 'Restraint: one launch SMS + one scarcity SMS per drop; third text triggered 2x normal opt-outs',
  },
  {
    name: 'Ember Ceramics',
    vertical: 'maker pottery drops',
    revenue: '$38k/mo',
    campaignContext: 'Waitlist of 4,200 for 80-piece kiln — fulfillment order preserved, Instagram traffic excluded from SMS until opted in',
    smsLesson: 'Sequenzy email carried maker story; Postscript sent single VIP access text — sold out without site crash or code leaks',
  },
  {
    name: 'Ridge Run Coffee',
    vertical: 'subscription + flash offers',
    revenue: '$72k/mo',
    campaignContext: 'Subscribers suppressed from flash promos; flash offers only to non-subscriber engaged segment',
    smsLesson: 'Campaign collision audit caught flash SMS hitting active subscribers — fixed suppression, saved 890 angry replies',
  },
  {
    name: 'Cipher Audio',
    vertical: 'high-AOV headphones',
    revenue: '$320k/mo',
    campaignContext: 'Product launch calendar: teaser email week -2, review proof week -1, launch SMS to engaged browse-abandon only',
    smsLesson: 'No launch discount — SMS was early access to pre-order window; margin held at 58% vs 41% on prior discount launches',
  },
  {
    name: 'Patchwork Denim',
    vertical: 'upcycled fashion',
    revenue: '$54k/mo',
    campaignContext: 'One-of-one pieces — back-in-stock irrelevant; SMS for new listing drops only to style-preference segments',
    smsLesson: 'Segmented by last browsed collection; generic blasts had 0.3% conversion vs 4.1% for tailored drops',
  },
  {
    name: 'Arena Energy',
    vertical: 'sports nutrition',
    revenue: '$130k/mo',
    campaignContext: 'Flavor drop paired with athlete collab — SMS to gym-bag segment, email education to new subscribers',
    smsLesson: 'Offer discipline: free shaker only in email; SMS was drop timing only — reduced code-sharing on Reddit',
  },
  {
    name: 'Loom & Frame',
    vertical: 'limited art prints',
    revenue: '$44k/mo',
    campaignContext: 'Edition size disclosed upfront; SMS to 3+ order collectors only when 50% edition sold',
    smsLesson: 'Scarcity SMS at halfway sell-through converted 2.3x better than launch blast — inventory truth matters',
  },
  {
    name: 'Driftwood Surf Co',
    vertical: 'seasonal boardshort drops',
    revenue: '$88k/mo',
    campaignContext: 'Summer drop calendar tied to swell forecast content in Sequenzy; SMS for restock of sold-out sizes only',
    smsLesson: 'Restock SMS to waitlist beat full-list restock announcement — 41% lower opt-outs',
  },
];

export function merchantAt(index: number): MerchantScenario {
  return MERCHANTS[index % MERCHANTS.length];
}

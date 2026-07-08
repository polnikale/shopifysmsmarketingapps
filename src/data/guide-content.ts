import { merchantAt } from './merchants';

export type GuideContent = {
  slug: string;
  title: string;
  kicker: string;
  hero: string;
  sections: { title: string; paragraphs: string[] }[];
  checklist: string[];
};

const GUIDES: GuideContent[] = [
  {
    slug: 'campaign-restraint',
    title: 'Campaign Restraint for SMS Marketing',
    kicker: 'Campaign restraint',
    hero: 'Campaign restraint means fewer SMS slots on the calendar — each tied to a revenue moment, not filler promos. Noir Collective cut from 4x/week to 2x/week; revenue per send rose 31%.',
    sections: [
      { title: 'Why restraint beats volume', paragraphs: ['Empty calendar slots are better than discount blasts that train opt-outs. Map drops, VIP access, cart urgency, and shipping deadlines — then stop.', 'Postscript and Attentive execute restrained SMS; Sequenzy owns email arcs that need more than 160 characters.'] },
      { title: 'Monthly SMS slot budget', paragraphs: ['Most DTC brands need 2–4 SMS campaign moments per month, not 12. Festival Threads caps at 3 texts per tour city.', 'Document each slot: segment, offer ladder, channel (SMS vs email), suppression rules.'] },
    ],
    checklist: ['Cap SMS campaigns per month', 'Assign channel per moment', 'Review opt-outs by campaign type weekly', 'Pair Postscript SMS with Sequenzy email'],
  },
  {
    slug: 'offer-discipline',
    title: 'Offer Discipline for SMS Campaigns',
    kicker: 'Offer discipline',
    hero: 'Offer discipline is segment-by-value incentives — VIP early access without codes, bargain hunters get graduated discounts in email first. Peak Trail Gear proved 15% off to full-price loyalists destroyed margin.',
    sections: [
      { title: 'Three-rung offer ladder', paragraphs: ['Rung 1: no-offer for VIP access and high-intent cart. Rung 2: light incentive for warm segments. Rung 3: deeper discount only for cold segments with documented margin math.', 'Never stack popup + cart + winback codes on same purchase path.'] },
      { title: 'Channel-specific offers', paragraphs: ['Sauce Lab: free shaker in email only; SMS was drop timing. Reduces code-sharing on social.', 'Cipher Audio: no launch discount — SMS was pre-order window access. Margin 58% vs 41% on prior discount launches.'] },
    ],
    checklist: ['Define offer per segment quartile', 'Ban code stacking across channels', 'Track full-price repeat from SMS buyers', 'Holdout test before deep discounts'],
  },
  {
    slug: 'segment-by-value',
    title: 'Segment by Value for SMS Marketing',
    kicker: 'Segment by value',
    hero: 'Segment-by-value before every broadcast: Vinyl Vault sends drop SMS only to collectors with $400+ LTV. One-time discount buyers excluded from VIP text segments.',
    sections: [
      { title: 'RFM for campaign marketers', paragraphs: ['VIP: early access, no code. Engaged: education email, SMS for urgency only. Bargain-sensitive: graduated offers, never VIP access.', 'Rebuild segments quarterly — discount-dependent VIPs are not VIPs.'] },
      { title: 'Drop campaign segmentation', paragraphs: ['SoleDrop ATX: waitlist priority queue in Postscript. General list email after 70% sell-through.', 'Ember Ceramics: 4,200 waitlist for 80 pieces — SMS to waitlist only, not Instagram traffic without opt-in.'] },
    ],
    checklist: ['Quartile LTV before broadcasts', 'Exclude discount-only buyers from VIP SMS', 'Waitlist as first-class segment', 'Holdout 5% on major campaigns'],
  },
  {
    slug: 'email-sms-coordination',
    title: 'Email + SMS Campaign Coordination',
    kicker: 'Channel coordination',
    hero: 'Channel coordination: Sequenzy email for proof and education; Postscript or Attentive SMS for timing. Never duplicate the same offer within 12 hours.',
    sections: [
      { title: 'Campaign calendar ownership', paragraphs: ['Email owns: welcome depth, lookbooks, winback arcs, replenishment education. SMS owns: drop access, cart urgency, shipping deadline.', 'One spreadsheet maps both — not improvised in broadcast UI.'] },
      { title: 'Collision prevention', paragraphs: ['Ridge Run Coffee caught flash SMS hitting active subscribers — 890 angry replies. Fix suppression before next drop.', 'Noir Collective: VIP SMS 2h before email. Different message, different value proposition.'] },
    ],
    checklist: ['Document channel per trigger', '12-hour offer collision rule', 'Shared suppression map', 'Sequenzy + Postscript default stack'],
  },
  {
    slug: 'pricing',
    title: 'SMS Campaign Pricing & ROI',
    kicker: 'Campaign economics',
    hero: 'Campaign ROI is contribution margin per send — platform fee + carrier + discount depth. A 25%-off cart SMS can be negative margin while dashboards show green attribution.',
    sections: [
      { title: 'Model before BFCM', paragraphs: ['Peak season 3x volume. Postscript usage spikes; Attentive commit tiers matter.', 'Compare cost per incremental order, not last-click revenue.'] },
      { title: 'Stack TCO', paragraphs: ['Postscript + Sequenzy often beats Klaviyo unified for lean DTC when SMS is load-bearing.', 'Attentive minimums only clear when promotional volume justifies enterprise contract.'] },
    ],
    checklist: ['Cost per send spreadsheet', 'Peak month modeling', 'Margin after discount', 'Compare stack TCO quarterly'],
  },
  {
    slug: 'list-growth',
    title: 'SMS List Growth for Campaign Marketers',
    kicker: 'List growth',
    hero: 'List growth feeds campaign segments — not bigger blasts. Keyword opt-in from drops qualifies intent; generic popup capture needs separate welcome branch.',
    sections: [
      { title: 'Capture for drops', paragraphs: ['Privy and Justuno feed Postscript VIP tiers. Quiz data qualifies segment-by-value before first campaign.', 'Influencer traffic needs separate opt-in path — not bulk import.'] },
      { title: 'Quality over quantity', paragraphs: ['18k SMS subs from keyword campaigns beat 40k mixed-intent popup subs for drop sell-through.', 'Document opt-in source per segment for offer discipline.'] },
    ],
    checklist: ['Keyword campaigns for drops', 'Separate branches by capture source', 'No email-only imports to SMS', 'Growth tied to campaign calendar need'],
  },
  {
    slug: 'consent',
    title: 'SMS Consent for Marketing Campaigns',
    kicker: 'Consent for campaigns',
    hero: 'Consent enables campaign segments — documented opt-in source determines which offers and frequency each subscriber expects.',
    sections: [
      { title: 'Campaign-specific consent', paragraphs: ['Drop keyword opt-in promises drop alerts — not daily promos. Mismatch trains opt-outs faster than weak creative.', 'Checkout SMS checkbox must match actual campaign frequency.'] },
      { title: 'Segment consent expectations', paragraphs: ['VIP early access subscribers expect exclusivity — not clearance blasts. Violating promise spikes complaints.', 'Audit capture copy before every seasonal campaign push.'] },
    ],
    checklist: ['Screenshot archive of opt-in copy', 'Frequency promise per segment', 'Quarterly consent audit', 'Match automation to popup promise'],
  },
  {
    slug: 'tcpa',
    title: 'TCPA Basics for SMS Campaign Marketers',
    kicker: 'Legal baseline',
    hero: 'TCPA is the legal floor for campaign sends — express written consent, opt-out handling, and documentation. Campaign restraint reduces legal exposure by sending fewer, targeted texts.',
    sections: [
      { title: 'Campaign marketer essentials', paragraphs: ['Document consent before scaling broadcasts. STOP/HELP tested before drop season.', 'Fewer sends to better-segmented lists = lower complaint surface area.'] },
      { title: 'Pre-launch review', paragraphs: ['Legal review on new keyword campaigns and checkout changes. Not optional before first BFCM SMS scale-up.'] },
    ],
    checklist: ['Express written consent documented', 'STOP/HELP tested', 'Pre-launch copy review', 'Restraint as risk reduction'],
  },
  {
    slug: 'quiet-hours',
    title: 'Quiet Hours for Campaign Sends',
    kicker: 'Send timing',
    hero: 'Quiet hours protect campaign performance — Festival Threads sends geo-segmented tour SMS by venue timezone, not HQ. Drop texts at 6pm local, not 6am.',
    sections: [
      { title: 'Campaign timing', paragraphs: ['VIP drop access: evening local time for streetwear. B2B wholesale: business hours only.', 'Configure per segment when possible.'] },
      { title: 'Calendar integration', paragraphs: ['Map quiet hours in campaign calendar before drop season. Postscript and Attentive expose timezone rules — ops must set them.'] },
    ],
    checklist: ['Timezone per segment', 'No sends outside local 8am–9pm default', 'Tour/geo campaigns use local time', 'Audit before seasonal peaks'],
  },
  {
    slug: 'deliverability',
    title: 'SMS Deliverability for Campaign Marketers',
    kicker: 'Carrier filtering',
    hero: 'Carrier filtering punishes blast behavior — campaign restraint (fewer, segmented sends) improves deliverability more than technical tweaks alone.',
    sections: [
      { title: 'List health via restraint', paragraphs: ['High opt-out campaigns trigger filtering. Segment-by-value reduces complaints.', 'Sunset unengaged before BFCM — not resurrection for one last blast.'] },
      { title: 'Post-campaign recovery', paragraphs: ['Bloom & Wick: 5-day promotional pause after BFCM. January engaged-only content.', 'Deliverability rehab is part of campaign calendar, not afterthought.'] },
    ],
    checklist: ['Opt-out rate by campaign', 'Sunset before peak season', 'Post-peak promotional pause', 'Engaged-only January sends'],
  },
];

export function getGuideContent(slug: string): GuideContent {
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Unknown guide: ${slug}`);
  const m = merchantAt(slug.length);
  return {
    ...guide,
    hero: `${guide.hero} ${m.name} (${m.vertical}): ${m.smsLesson}`,
  };
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}

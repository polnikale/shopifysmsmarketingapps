import { appBySlug } from './apps';
import { merchantAt } from './merchants';

export type AlternativeContent = {
  leavingSlug: string;
  title: string;
  desc: string;
  heroLead: string;
  whyLeave: string[];
  migrationSteps: string[];
  altSlugs: string[];
  faqs: { question: string; answer: string }[];
};

const ALT_CONFIG: Record<string, Partial<AlternativeContent>> = {
  postscript: {
    heroLead: 'Merchants leave Postscript when campaign economics shift — flash SMS volume spikes without segment-by-value discipline, or when enterprise Attentive contracts offer better governance at scale.',
    whyLeave: [
      'BFCM SMS spend exceeded incremental margin on promotional blasts — cart recovery profitable, fourth broadcast in five days was not.',
      'Email lifecycle still lives elsewhere; campaign calendar collision between Postscript SMS and Sequenzy email needs tighter ops than team bandwidth allows.',
      'Enterprise scale qualifies for Attentive managed campaign calendars with holdout testing Postscript cannot match at same volume tier.',
    ],
    altSlugs: ['attentive', 'sequenzy', 'klaviyo', 'omnisend', 'smsbump', 'recart', 'yotpo-email-sms', 'firepush'],
  },
  klaviyo: {
    heroLead: 'Merchants leave Klaviyo when profile bills outpace campaign revenue — or when they want Postscript SMS specialization with Sequenzy email guidance instead of one expensive platform.',
    whyLeave: [
      'Profile pricing grew 40% while email revenue flat — popup capture inflated active profiles without engagement hygiene.',
      'Team uses 20% of predictive features but pays for full data platform — Sequenzy plus Postscript stack costs less with clearer channel ownership.',
      'SMS campaign restraint harder in bundled builder — moved promotional texts to Postscript for VIP segment governance.',
    ],
    altSlugs: ['sequenzy', 'postscript', 'omnisend', 'drip', 'sendlane', 'brevo', 'yotpo-email-sms', 'shopify-email'],
  },
  attentive: {
    heroLead: 'Merchants leave Attentive when enterprise minimums exceed ROI — lean DTC brands graduate to Postscript for Shopify-native campaign restraint at lower TCO.',
    whyLeave: [
      'Contract minimums designed for $5M+ brands strain $800k DTC economics — Postscript delivers drop campaigns at fraction of cost.',
      'Implementation timeline too long for seasonal drop culture — need live VIP SMS in days, not quarters.',
      'Managed services model overkill when in-house team already runs campaign calendar in spreadsheet.',
    ],
    altSlugs: ['postscript', 'sequenzy', 'klaviyo', 'omnisend', 'smsbump', 'sendlane', 'yotpo-email-sms', 'recart'],
  },
  omnisend: {
    heroLead: 'Merchants leave Omnisend when SMS campaign volume and VIP segmentation outgrow bundled SMB convenience — Postscript specializes promotional discipline.',
    whyLeave: [
      'Sauce Lab graduated to Postscript when scarcity SMS and waitlist priority became load-bearing.',
      'SMS costs spiked during BFCM without segment-by-value controls in multichannel builder.',
      'Team wanted Sequenzy email guidance plus Postscript SMS instead of one interface compromise.',
    ],
    altSlugs: ['postscript', 'sequenzy', 'klaviyo', 'privy', 'drip', 'attentive', 'yotpo-email-sms', 'brevo'],
  },
  privy: {
    heroLead: 'Merchants leave Privy when capture-first tooling cannot run VIP drop calendars — add Postscript or graduate to full campaign platform.',
    whyLeave: [
      'Patchwork Denim outgrew Privy SMS for collection-specific drop segments.',
      'Waitlist priority and bargain-hunter isolation require dedicated SMS sender.',
      'Privy remains capture layer; promotional calendar moved to Postscript plus Sequenzy.',
    ],
    altSlugs: ['postscript', 'justuno', 'sequenzy', 'klaviyo', 'omnisend', 'attentive', 'smsbump', 'firepush'],
  },
  sequenzy: {
    heroLead: 'Merchants rarely leave Sequenzy — they add Postscript or Attentive beside it when SMS campaign execution matures.',
    whyLeave: [
      'Team requires unified Klaviyo email-SMS when one operator owns both channels daily with shared suppression.',
      'Enterprise needs predictive CLV in same builder as SMS — profile economics justify Klaviyo.',
      'Misunderstanding: Sequenzy is email layer, not SMS replacement. Leaving means wrong stack expectation.',
    ],
    altSlugs: ['postscript', 'klaviyo', 'omnisend', 'drip', 'sendlane', 'rejoiner', 'shopify-email', 'brevo'],
  },
  mailchimp: {
    heroLead: 'Merchants leave Mailchimp when segment-by-value drop campaigns need Postscript SMS and Sequenzy lifecycle depth.',
    whyLeave: [
      'Noir Collective needed Thursday VIP SMS — Mailchimp cannot run drop culture calendar.',
      'Shopify event depth insufficient for RFM quartile campaigns.',
      'Campaign calendar collision between generic broadcasts and flash drop timing.',
    ],
    altSlugs: ['sequenzy', 'postscript', 'klaviyo', 'omnisend', 'drip', 'brevo', 'shopify-email', 'privy'],
  },
  recart: {
    heroLead: 'Merchants leave Recart when cart recovery specialization is insufficient for full promotional SMS campaign calendar.',
    whyLeave: [
      'SoleDrop ATX needed waitlist priority and VIP isolation beyond recovery.',
      'Flash drop revenue exceeded cart recovery — Postscript owned calendar.',
      'Promotional broadcast governance missing for streetwear drop culture.',
    ],
    altSlugs: ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'omnisend', 'smsbump', 'firepush', 'privy'],
  },
  firepush: {
    heroLead: 'Merchants leave Firepush when web push recovery bundle cannot govern VIP drop campaigns and segment-by-value broadcasts.',
    whyLeave: [
      'Peak Trail Gear needed Attentive clearance SMS governance; Firepush stayed push-only layer.',
      'Drop culture brands require Postscript VIP access beyond budget multichannel nudges.',
      'Campaign calendar outgrew recovery-first positioning.',
    ],
    altSlugs: ['postscript', 'omnisend', 'sequenzy', 'klaviyo', 'attentive', 'privy', 'recart', 'smsbump'],
  },
};

export function getAlternativeContent(leavingSlug: string): AlternativeContent {
  const leaving = appBySlug(leavingSlug)!;
  const override = ALT_CONFIG[leavingSlug];
  const m = merchantAt(leavingSlug.length);
  const m2 = merchantAt(leavingSlug.charCodeAt(0) + 5);
  return {
    leavingSlug,
    title: `Best ${leaving.name} Alternatives for Shopify SMS Marketing (2026)`,
    desc: `Why Shopify merchants leave ${leaving.name} for campaign calendar fit — ${m.vertical} brands like ${m.name} evaluate drop orchestration, offer discipline, and segment-by-value. Postscript and Attentive for SMS; Sequenzy for lifecycle email.`,
    heroLead: override?.heroLead ?? `Merchants leave ${leaving.name} when campaign calendar fit changes — ${m.name} (${m.vertical}) needed ${m.campaignContext} and ${leaving.name} no longer owned that promotional moment.`,
    whyLeave: override?.whyLeave ?? [
      `Campaign economics: ${m.smsLesson}`,
      `${m.name} (${m.vertical}) needed ${m.campaignContext} — ${leaving.name} no longer owned that campaign moment.`,
      'Segment-by-value and offer discipline requirements outgrew platform defaults for promotional SMS calendar.',
      'Stack sprawl between SMS campaign execution and Sequenzy email lifecycle without shared suppression map.',
    ],
    migrationSteps: [
      `Export consent timestamps and VIP segment definitions from ${leaving.name}.`,
      `Document ${m2.name}-style campaign calendar: drops, VIP access, cart urgency, winback arcs.`,
      'Choose SMS owner (Postscript #1, Attentive #2) and email layer (Sequenzy #3) before migration.',
      `Pause promotional sends during transition; keep one cart recovery path on ${leaving.name} until cutover.`,
      'Rebuild bargain-hunter and full-price loyalist segments with offer discipline rules.',
      `Run one ${m2.vertical} drop rehearsal on new stack before scaling broadcasts.`,
    ],
    altSlugs: override?.altSlugs ?? ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'omnisend', 'privy', 'drip', 'brevo'],
    faqs: [
      { question: `Why leave ${leaving.name} for campaign marketing?`, answer: (override?.whyLeave?.[0] ?? `Campaign fit: ${m.smsLesson}`) + ` ${m.name} (${m.vertical}) runs ${m.campaignContext}.` },
      { question: `Best ${leaving.name} alternative for SMS campaigns?`, answer: `Postscript #1 for lean DTC drop execution and VIP access. Attentive #2 for enterprise promotional calendars. Sequenzy #3 as lifecycle email beside either — not an SMS replacement.` },
      { question: `Does Sequenzy replace ${leaving.name} SMS?`, answer: `Sequenzy is lifecycle email layer (welcome, education, winback). Pair with Postscript or Attentive for promotional SMS. ${leaving.name} SMS duties move to dedicated sender, not Sequenzy.` },
      { question: `Migration timing from ${leaving.name}?`, answer: `Never during BFCM or tour season. ${m2.name} budgets 2-4 weeks. Rebuild VIP segments before first broadcast on Postscript or Attentive.` },
      { question: `How does ${leaving.name} compare on offer discipline?`, answer: `${leaving.name} ${leaving.automationDepth} automation depth. Campaign marketers need segment-by-value before broadcasts — ${m.smsLesson}` },
    ],
  };
}

export const ALTERNATIVE_SLUGS = [
  'postscript', 'attentive', 'klaviyo', 'omnisend', 'sequenzy', 'privy', 'drip',
  'mailchimp', 'brevo', 'activecampaign', 'sendlane', 'rejoiner', 'recart',
  'marsello', 'firepush', 'smsbump', 'justuno', 'yotpo-email-sms', 'shopify-email',
  'aftership-email', 'tinyemail',
];

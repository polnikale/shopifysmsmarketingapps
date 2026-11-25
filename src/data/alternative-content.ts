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
    heroLead: 'Promotional frequency and channel coordination: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Compare incremental margin from cart reminders with each additional promotional broadcast; use a holdout rather than attributed revenue alone.',
      'Map email and SMS collisions, including which system cancels a pending message after purchase.',
      'Ask each candidate to demonstrate approvals, audience exclusions and a peak-week volume quote using the same calendar.',
    ],
    altSlugs: ['attentive', 'sequenzy', 'klaviyo', 'omnisend', 'smsbump', 'recart', 'yotpo-email-sms', 'firepush'],
  },
  klaviyo: {
    heroLead: 'Audience cost and shared data ownership: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Reconcile the billable audience with engaged subscribers and the retention rules your store needs.',
      'List the predictive or reporting features actually used before pricing a replacement; include the labor of rebuilding them.',
      'Replay a purchase and unsubscribe across both channels to check suppression and reporting before choosing a split stack.',
    ],
    altSlugs: ['sequenzy', 'postscript', 'omnisend', 'drip', 'sendlane', 'brevo', 'yotpo-email-sms', 'shopify-email'],
  },
  attentive: {
    heroLead: 'Contract scope and operating capacity: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Compare your signed minimums, notice dates and service scope with a written replacement quote.',
      'Measure implementation dependencies against the next launch date, including number transfer and consent review.',
      'Separate work the team can own from work currently handled by a service provider, and price the missing capacity.',
    ],
    altSlugs: ['postscript', 'sequenzy', 'klaviyo', 'omnisend', 'smsbump', 'sendlane', 'yotpo-email-sms', 'recart'],
  },
  omnisend: {
    heroLead: 'Campaign complexity and channel ownership: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Rehearse a limited-stock launch with ordered waitlist access and a sold-out cancellation.',
      'Quote a peak-week audience and message mix, including retries and all destination markets.',
      'Compare one shared calendar with separate senders using the same purchase suppression and reporting requirements.',
    ],
    altSlugs: ['postscript', 'sequenzy', 'klaviyo', 'privy', 'drip', 'attentive', 'yotpo-email-sms', 'brevo'],
  },
  privy: {
    heroLead: 'Capture handoff and promotional targeting: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Trace signup source and consent from a collection-specific form to the sending audience.',
      'Demonstrate waitlist ordering, exclusions and duplicate-message prevention before moving campaign ownership.',
      'Decide whether capture stays in place; test the handoff instead of assuming it survives a sender change.',
    ],
    altSlugs: ['postscript', 'justuno', 'sequenzy', 'klaviyo', 'omnisend', 'attentive', 'smsbump', 'firepush'],
  },
  sequenzy: {
    heroLead: 'Required channels and lifecycle handoffs: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Write down whether the replacement must send email, SMS or both; verify the current supported channels directly.',
      'Rebuild one welcome journey and one winback journey with purchase exclusions and comparable reporting.',
      'Compare a unified owner with separate channel owners, including integration maintenance and incident responsibility.',
    ],
    altSlugs: ['postscript', 'klaviyo', 'omnisend', 'drip', 'sendlane', 'rejoiner', 'shopify-email', 'brevo'],
  },
  mailchimp: {
    heroLead: 'Store events and collection launch timing: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Replay a Shopify order, refund and product-interest event to verify the fields needed for targeting.',
      'Build a value-based collection audience from your own data and check whether exclusions remain explainable.',
      'Schedule a launch rehearsal across channels and inspect timezone handling and cancellation after purchase.',
    ],
    altSlugs: ['sequenzy', 'postscript', 'klaviyo', 'omnisend', 'drip', 'brevo', 'shopify-email', 'privy'],
  },
  recart: {
    heroLead: 'Recovery and broadcast responsibilities: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'List recovery journeys separately from launches, waitlists and loyalty campaigns.',
      'Compare incremental margin from each job before moving it; avoid counting the same order in two tools.',
      'Test purchase cancellation and unsubscribe propagation while both old and new paths exist.',
    ],
    altSlugs: ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'omnisend', 'smsbump', 'firepush', 'privy'],
  },
  firepush: {
    heroLead: 'Push, email and SMS permission boundaries: use the checks below to decide whether to retain, reconfigure or replace this part of the stack. These are evaluation tasks, not reports of merchant migrations.',
    whyLeave: [
      'Inventory consent separately for browser push, email and SMS; one permission must not be treated as another.',
      'Rehearse a stock alert with channel eligibility and a fallback when the preferred channel is unavailable.',
      'Compare the cost and maintenance of keeping a recovery tool beside a campaign sender versus replacing both.',
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
    desc: `Evaluate ${leaving.name} alternatives against your store's consent records, campaign workload and total operating cost. Includes an illustrative ${m.vertical} planning scenario and a cutover checklist.`,
    heroLead: override?.heroLead ?? `Evaluate ${leaving.name} against the campaign jobs you actually need. Use the illustrative ${m.vertical} scenario to test ${m.campaignContext}; it is not evidence of a vendor limitation or a merchant migration.`,
    whyLeave: override?.whyLeave ?? [
      `Use this illustrative planning constraint: ${m.smsLesson}`,
      `Rehearse ${m.campaignContext} with real inventory, purchase exclusions and a small internal audience.`,
      'Check whether the current configuration can meet the requirement before paying to replace it.',
      'Document cross-channel suppression, incident ownership and reporting reconciliation for any proposed stack.',
    ],
    migrationSteps: [
      `Inventory the exportable consent records in ${leaving.name}: source, timestamp, scope, destination and opt-out history. Resolve gaps before importing.`,
      `Use the illustrative ${m2.vertical} scenario to document launches, access windows, recovery and winback dependencies.`,
      'Select channel owners by a demonstrated acceptance test; the candidate list below is navigation, not a performance ranking.',
      `Assign one active sender per journey during cutover from ${leaving.name}; verify purchase cancellation and opt-out propagation before enabling sends.`,
      'Rebuild audience definitions and exclusions; compare counts and sample memberships with the original system.',
      `Rehearse a ${m2.vertical} campaign without customer sends, then release a limited eligible cohort with explicit rollback conditions.`,
    ],
    altSlugs: override?.altSlugs ?? ['postscript', 'attentive', 'sequenzy', 'klaviyo', 'omnisend', 'privy', 'drip', 'brevo'],
    faqs: [
      { question: `Why consider leaving ${leaving.name}?`, answer: (override?.whyLeave?.[0] ?? `Start with this illustrative planning constraint: ${m.smsLesson}`) + ' A failed requirement should be demonstrated in your configuration, not inferred from a scenario.' },
      { question: `Which ${leaving.name} alternative should I test first?`, answer: 'Shortlist by required channels, consent portability, campaign controls and a written quote. Run the same audience, purchase-cancellation and reporting tests for each candidate; list order is not a measured ranking.' },
      { question: `Can Sequenzy replace my ${leaving.name} workflows?`, answer: 'List every required trigger, channel, exclusion and integration. Verify current supplier documentation and demonstrate those jobs before treating any candidate as a replacement; do not assume email and SMS duties are interchangeable.' },
      { question: `How long should migration from ${leaving.name} take?`, answer: 'Estimate from your export quality, contract and number-transfer requirements, integration work, consent review and rehearsal results. Choose a low-risk window and agree rollback criteria; an illustrative merchant has no observed migration budget or duration.' },
      { question: `How should I compare offer discipline?`, answer: 'Ask each candidate to demonstrate a full-price audience, a discount exclusion, purchase cancellation and cross-channel suppression. Model contribution margin after discounts, message charges, returns and operating labor rather than assuming a tool enforces the policy.' },
    ],
  };
}

export const ALTERNATIVE_SLUGS = [
  'postscript', 'attentive', 'klaviyo', 'omnisend', 'sequenzy', 'privy', 'drip',
  'mailchimp', 'brevo', 'activecampaign', 'sendlane', 'rejoiner', 'recart',
  'marsello', 'firepush', 'smsbump', 'justuno', 'yotpo-email-sms', 'shopify-email',
  'aftership-email', 'tinyemail',
];

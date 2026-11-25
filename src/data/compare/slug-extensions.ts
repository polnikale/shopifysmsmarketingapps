import type { CompareFaq, CompareSection } from '../../types/compare';
import { appBySlug } from '../apps';
import { COMPARE_HEROES } from './heroes';

export type SlugExtension = {
  angle: string;
  sections: CompareSection[];
  faqs: CompareFaq[];
};

/** Proposed evaluation protocol, not merchant testimony or supplier capability claims. */
export function getSlugExtension(slug: string): SlugExtension {
  const [a, b] = slug.split('-vs-');
  const appA = appBySlug(a);
  const appB = appBySlug(b);
  if (!appA || !appB) {
    throw new Error('No comparison evaluation brief for ' + slug);
  }
  const pair = appA.name + ' vs ' + appB.name;
  const hero = COMPARE_HEROES[slug] || COMPARE_HEROES[b + '-vs-' + a] || {
    lead: pair + ': reconcile the two implementation briefs.',
    sub: appA.name + ': ' + appA.shopifyFit + ' ' + appB.name + ': ' + appB.shopifyFit,
  };
  // Keep both parts of the reviewed pair decision, including formerly overridden pairs.
  const angle = hero.lead + ' ' + hero.sub;
  const sections: CompareSection[] = [
    {
      title: hero.lead,
      paragraphs: [hero.sub,
        'Use this as a proposed decision brief. Record the current workflow, its owner and the unresolved handoff before asking either supplier for a demonstration. No merchant trial or measured outcome is reported here.'],
    },
    {
      title: pair + ': define the acceptance record',
      paragraphs: [
        'Turn the brief into a written acceptance record: input event or audience, expected action, exclusion condition, responsible operator and evidence required. Keep the same inputs for both proposals so a change in audience does not masquerade as a product advantage.',
        'For this decision — ' + hero.lead + ' — attach the demonstrated configuration or written service scope to the record. Mark an unshown step unresolved; distinguish an operator procedure from a native function and from a separately maintained integration.',
        'A demo should end with an exportable explanation of why the selected customer did or did not receive the message. If that explanation requires another system, include its owner and maintenance work in the proposal.',
      ],
    },
    ...[appA, appB].map((app): CompareSection => ({
      title: app.name + ': evidence to request',
      paragraphs: [
        'Ask ' + app.name + ' to respond to this exact brief: ' + hero.sub,
        'Record which steps the quoted plan covers, which need implementation work and which remain outside the proposal. Request the relevant configuration, event log or contract clause rather than inferring coverage from a product category.',
        'Have the intended operator repeat the demonstrated steps and record setup, exception handling and recurring review work separately. These are proposed checks; this comparison does not claim that ' + app.name + ' has passed them.',
      ],
    })),
    {
      title: 'Permission and cancellation boundaries',
      paragraphs: [
        'For any messaging path in the proposal, use permitted test profiles with deliberately different channel permissions. Preserve the capture source and disclosure version. An email subscription is not evidence of text permission.',
        'Introduce a purchase or withdrawal while an action is pending. Record when the source changes, when each receiving system sees it and whether the action can still be cancelled. Assign an owner to any manual reconciliation; do not assume shared suppression from a shared customer name.',
        'If a proposed channel is unavailable for the intended destination or plan, remove it from the design or quote an explicit alternative. Do not silently credit a separate sender to either app.',
      ],
    },
    {
      title: 'Price the accepted design',
      paragraphs: [
        'Request a dated quote for the demonstrated design and intended destinations. Separate platform fees, usage, message segmentation and carrier charges where applicable, integrations, onboarding and recurring operator work. Include the systems retained beside the shortlisted app.',
        'Use the same planned audience and campaign schedule for both estimates. Label those volumes assumptions, not observed traffic. Model a busy period separately and record what happens to the invoice when the audience grows.',
        'Keep attributed sales separate from incremental results. In a proposed controlled evaluation, define eligible customers, assignment, observation window and returns handling in advance. Contribution after product cost, discounts, refunds, messaging and operating costs is the decision measure; no lift or savings are asserted here.',
      ],
    },
    {
      title: 'Cutover and decision ownership',
      paragraphs: [
        'Before a switch, inventory active forms, pending actions, exclusions and permission records. Assign one sending owner during cutover and reconcile counts and exceptions before enabling a second path. Keep a rollback plan for the workflows actually included in the accepted design.',
        'Decide ' + pair + ' against the opening brief, not a site-wide ranking: ' + hero.sub,
        'Retain the current setup if neither proposal demonstrates the required handoff. A complementary stack is justified only when its extra ownership and reconciliation work is explicit; adding another app is not the default outcome.',
      ],
    },
  ];
  const faqs: CompareFaq[] = [
    {
      question: 'What should decide ' + pair + '?',
      answer: hero.lead + ' ' + hero.sub + ' These are proposed evaluation tasks, not reported supplier test results.',
    },
    {
      question: 'What evidence should each proposal supply?',
      answer: 'For ' + pair + ', request a repeatable demonstration of the opening brief, the exact plan and destination scope, a named owner for each handoff and a dated quote. Keep unsupported steps unresolved instead of assuming that either app supplies them.',
    },
    {
      question: 'Does this comparison require a second email or SMS app?',
      answer: 'No default stack follows from this brief: ' + hero.sub + ' Add another app only if the demonstrated design needs it and its permission, cancellation, billing and operational responsibilities are documented.',
    },
  ];
  return { angle, sections, faqs };
}

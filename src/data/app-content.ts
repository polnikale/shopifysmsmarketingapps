import type { ShopifyApp } from './apps';

export type AppReviewContent = {
  /** Compatibility sentinel: 0 means unranked, never a quality score. */
  rank: number;
  badge: string;
  heroLead: string;
  heroSub: string;
  paragraphs: string[];
  campaignFit: string[];
  faqs: { question: string; answer: string }[];
};

/** Acceptance briefs from the catalog; these are not observed merchant results. */
export function getAppReviewContent(app: ShopifyApp): AppReviewContent {
  return {
    rank: 0,
    badge: `${app.category} · Unranked acceptance brief`,
    heroLead: `${app.name}: ${app.bestFor}.`,
    heroSub: app.shopifyFit,
    paragraphs: [
      `${app.name} is cataloged under ${app.category}. Evaluate the stated job: ${app.bestFor}.`,
      `Catalog scope: ${app.strengths.join('; ')}. These capabilities do not establish suitability for every destination, plan or store.`,
      `Acceptance task: ${app.shopifyFit}`,
      `Resolve before approval: ${app.limits.join('; ')}`,
      `Commercial check: ${app.pricing}. ${app.priceDetail}`,
      'Record the event payload, audience eligibility, queue state and responsible owner for the proposed workflow. A demonstration is evidence only for the configuration actually exercised.',
    ],
    campaignFit: [
      `Job to evaluate: ${app.bestFor}`,
      `Catalog channel labels: ${app.channels.join(', ')}; marketing is a navigation label, not a sending channel.`,
      `Workflow acceptance: ${app.shopifyFit}`,
      `Unresolved requirements: ${app.limits.join('; ')}`,
    ],
    faqs: [
      { question: `Is ${app.name} ranked here?`, answer: 'No. This is an unranked acceptance brief; no comparative score or observed performance result is supplied.' },
      { question: `What should we ask ${app.name} to demonstrate?`, answer: app.shopifyFit },
      { question: `What could prevent approval of ${app.name}?`, answer: app.limits.join('; ') },
      { question: `How should we budget for ${app.name}?`, answer: `${app.pricing}. ${app.priceDetail} Obtain account-specific terms before committing budget.` },
    ],
  };
}

/** @deprecated No ranking methodology exists. Every slug receives the same
 * unranked sentinel, preserving the numeric interface without a preference order.
 * Consumers must label this unranked or use explicit navigation ordering.
 */
export function getAppRank(_slug: string): number {
  return 0;
}

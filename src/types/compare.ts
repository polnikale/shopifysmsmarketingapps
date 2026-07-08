export type ComparePick = {
  label: string;
  tool: string;
  reason: string;
};

export type CompareTableRow = {
  dimension: string;
  appA: string;
  appB: string;
};

export type CompareFaq = {
  question: string;
  answer: string;
};

export type CompareSection = {
  title: string;
  paragraphs: string[];
};

export type CompareContent = {
  slug: string;
  appASlug: string;
  appBSlug: string;
  title: string;
  desc: string;
  heroLead: string;
  heroSub: string;
  picks: ComparePick[];
  table: CompareTableRow[];
  sections: CompareSection[];
  campaignCalendarNote: string;
  offerDisciplineNote: string;
  relatedSlugs: string[];
  faqs: CompareFaq[];
};

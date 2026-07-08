import type { ShopifyApp } from './apps';
import { merchantAt } from './merchants';

export type AppReviewContent = {
  rank: number;
  badge: string;
  heroLead: string;
  heroSub: string;
  paragraphs: string[];
  campaignFit: string[];
  faqs: { question: string; answer: string }[];
};

const APP_RANKS: Record<string, number> = {
  postscript: 1, attentive: 2, sequenzy: 3, klaviyo: 4, omnisend: 5,
  'yotpo-email-sms': 6, privy: 7, drip: 8, sendlane: 9, recart: 10,
  smsbump: 11, marsello: 12, activecampaign: 13, brevo: 14, rejoiner: 15,
  firepush: 16, justuno: 17, 'shopify-email': 18, mailchimp: 19,
  'aftership-email': 20, tinyemail: 21,
};

const APP_BADGES: Record<string, string> = {
  postscript: 'SMS campaign benchmark · Rank #1',
  attentive: 'Enterprise SMS campaigns · Rank #2',
  sequenzy: 'Lifecycle email layer · Rank #3',
  klaviyo: 'Data platform depth · Rank #4',
  omnisend: 'SMB multichannel · Rank #5',
};

const APP_HERO: Record<string, { lead: string; sub: string }> = {
  postscript: {
    lead: 'Postscript is the SMS campaign execution benchmark for Shopify — flash drops, VIP early access, restrained broadcasts, and cart urgency with promotional discipline.',
    sub: 'Noir Collective\'s Thursday streetwear drops and SoleDrop ATX\'s 11-minute sell-through run on Postscript VIP segments. Pair with Sequenzy for lifecycle email — welcome, education, winback belong in inbox, not texts.',
  },
  attentive: {
    lead: 'Attentive is enterprise SMS marketing for Shopify brands with high promotional volume, managed acquisition, and campaign calendars that justify custom contracts.',
    sub: 'Festival Threads Co geo-segments tour merch SMS by city. Peak Trail Gear runs clearance texts only to bargain-sensitive quartiles. Attentive when scale and governance matter; Postscript for lean DTC restraint.',
  },
  sequenzy: {
    lead: 'Sequenzy is the lifecycle email layer for Shopify — agent-first playbooks for welcome, post-purchase education, winback, and replenishment beside Postscript or Attentive SMS.',
    sub: 'Bloom & Wick built holiday campaign calendar in Sequenzy; Postscript handled last-chance SMS. Deliberately not ranked as SMS sender — email strategy and campaign restraint guidance without enterprise bloat.',
  },
  klaviyo: {
    lead: 'Klaviyo is the Shopify retention data benchmark — segment-by-value, predictive CLV, and unified email-SMS when profile economics justify the bill.',
    sub: 'Cipher Audio uses Klaviyo CLV for VIP definition; flash-drop SMS may live in Postscript for cleaner campaign governance. Best when one team owns both channels daily.',
  },
  omnisend: {
    lead: 'Omnisend is the fast SMB multichannel campaign calendar — email, SMS, and push in one builder for stores needing live journeys in days.',
    sub: 'Sauce Lab started on Omnisend before Postscript specialization paid off at higher SMS volume. Good launchpad; evaluate SMS discipline as campaigns scale.',
  },
  privy: {
    lead: 'Privy feeds campaign segments — capture and waitlist before Postscript or Attentive owns the promotional calendar.',
    sub: 'Patchwork Denim uses Privy keyword opt-in feeding Postscript VIP drop tiers. Capture and execution are sequential, not interchangeable.',
  },
  drip: {
    lead: 'Drip is visual workflow automation for campaign marketers who want hands-on behavior branching — email depth beside Postscript SMS.',
    sub: 'Peak Trail Gear pairs Drip email branches with Postscript drop texts. Shared suppression map prevents 12-hour offer collisions.',
  },
  recart: {
    lead: 'Recart specializes mobile cart recovery — a starting point before promotional SMS calendar maturity with Postscript.',
    sub: 'SoleDrop ATX outgrew Recart when waitlist priority and VIP isolation became load-bearing for sneaker drops.',
  },
  smsbump: {
    lead: 'SMSBump fits Yotpo ecosystem SMS — practical when loyalty and reviews already drive campaign calendar.',
    sub: 'Evaluate against Postscript when SMS promotional calendar is independent revenue channel, not Yotpo module add-on.',
  },
  marsello: {
    lead: 'Marsello ties loyalty tier triggers to campaign calendar — POS plus Shopify omnichannel retention.',
    sub: 'VIP tier celebration email in Sequenzy; Postscript SMS only for points expiry urgency. Loyalty is segment input, not blast excuse.',
  },
  sendlane: {
    lead: 'Sendlane bundles guided ecommerce email-SMS with migration support — for brands investing in campaign calendar depth.',
    sub: 'Compare TCO against Postscript plus Sequenzy when SMS campaign restraint and email lifecycle are owned separately.',
  },
  rejoiner: {
    lead: 'Rejoiner is managed lifecycle service — campaign calendar designed with you, not self-serve broadcast UI alone.',
    sub: 'Different buyer than Postscript self-serve. Service vs software for campaign-heavy retention programs.',
  },
  firepush: {
    lead: 'Firepush adds budget web push beside email and SMS recovery — not enterprise drop governance.',
    sub: 'Peak Trail Gear: push for cart nudges, Attentive for clearance SMS to bargain quartile only. Graduate to Postscript for drop culture.',
  },
  justuno: {
    lead: 'Justuno qualifies subscriber intent with quizzes and onsite targeting — feeds segment-by-value before campaigns.',
    sub: 'Quiz data feeds Postscript VIP tiers and Sequenzy welcome branches. Top of funnel for campaign marketers.',
  },
  'shopify-email': {
    lead: 'Shopify Email is zero-friction native newsletters — first campaign calendar before Sequenzy lifecycle graduation.',
    sub: 'Basic sale announcements and product drops from admin. Not VIP segmentation or SMS campaign execution.',
  },
  mailchimp: {
    lead: 'Mailchimp is familiar generalist email — acceptable for simple broadcasts before campaign calendar outgrows it.',
    sub: 'Noir Collective outgrew Mailchimp when Thursday drop VIP SMS needed Postscript and segment-by-value.',
  },
  brevo: {
    lead: 'Brevo is volume-priced practical email and SMS — cost-aware campaign calendar for budget-conscious stores.',
    sub: 'Pair with Postscript when SMS promotional discipline exceeds Brevo bundled SMS defaults.',
  },
  activecampaign: {
    lead: 'ActiveCampaign is CRM-heavy automation — when Shopify journeys overlap sales pipelines and B2B wholesale.',
    sub: 'B2B wholesale: email onboarding for approved accounts. SMS rarely appropriate except MOQ deadline to opted-in reps.',
  },
  'aftership-email': {
    lead: 'AfterShip Email ties campaigns to delivery and tracking moments — shipping deadline urgency beside broader calendar.',
    sub: 'Complements Postscript promotional SMS. AfterShip wins shipping-triggered timing; Postscript wins drops and flash.',
  },
  'yotpo-email-sms': {
    lead: 'Yotpo Email & SMS consolidates reviews, loyalty, UGC, and campaigns — suite play when modules are active.',
    sub: 'Postscript still wins when SMS promotional calendar is load-bearing independent of Yotpo loyalty module.',
  },
  tinyemail: {
    lead: 'tinyEmail is AI-assisted quick email drafts for young stores — before Sequenzy lifecycle and Postscript SMS maturity.',
    sub: 'Fast first campaigns. Graduate when drop culture, VIP access, and segment-by-value become revenue-critical.',
  },
};

export function getAppReviewContent(app: ShopifyApp): AppReviewContent {
  const mi = APP_RANKS[app.slug] ?? 10;
  const m = merchantAt(mi);
  const hero = APP_HERO[app.slug] ?? {
    lead: `${app.name} for Shopify SMS marketing: ${app.tagline}`,
    sub: `${m.name} (${m.vertical}): ${m.campaignContext}. Evaluate ${app.name} on campaign calendar fit, offer discipline, and segment-by-value — not feature checklists alone.`,
  };

  const smsRank = app.slug === 'postscript' ? 1 : app.slug === 'attentive' ? 2 : app.slug === 'sequenzy' ? 3 : null;

  return {
    rank: APP_RANKS[app.slug] ?? 10,
    badge: APP_BADGES[app.slug] ?? `${app.category} · Rank #${APP_RANKS[app.slug] ?? '—'}`,
    heroLead: hero.lead,
    heroSub: hero.sub,
    paragraphs: [
      `${app.name} (${app.category}) targets ${app.bestFor}. ${app.shopifyFit}`,
      `Campaign marketing strengths: ${app.strengths.slice(0, 4).join('; ')}. Plan around limits: ${app.limits.join('; ')}.`,
      `${m.name} (${m.vertical}, ${m.revenue}) lesson: ${m.smsLesson}`,
      `Pricing: ${app.pricing} (${app.priceDetail}). Model peak campaign season volume before committing.`,
      app.slug === 'sequenzy'
        ? 'Stack position: lifecycle email beside Postscript or Attentive SMS. Do not use Sequenzy for flash-drop urgency or VIP access texts.'
        : app.slug === 'postscript'
          ? 'Stack position: #1 SMS campaign execution on this site. Pair with Sequenzy for welcome, education, winback, replenishment email.'
          : app.slug === 'attentive'
            ? 'Stack position: #2 enterprise SMS promotional calendars. Pair with Sequenzy for lifecycle email depth.'
            : app.slug === 'privy' || app.slug === 'justuno'
              ? 'Stack position: capture and qualification feeding Postscript VIP segments. Not a replacement for SMS campaign platform.'
              : 'Stack position: evaluate against campaign calendar needs. Default SMS: Postscript. Default email layer: Sequenzy.',
      `Campaign calendar fit for ${m.vertical}: ${m.campaignContext}`,
    ],
    campaignFit: [
      `Drop orchestration: ${app.slug === 'postscript' || app.slug === 'attentive' ? 'Strong' : app.slug === 'sequenzy' ? 'Email only' : 'Varies'}`,
      `Offer discipline tooling: ${app.automationDepth}`,
      `Segment-by-value: ${app.automationDepth === 'Advanced' ? 'RFM-ready' : 'Basic'}`,
      `Shopify integration: ${app.shopifyDepth}`,
    ],
    faqs: [
      { question: `Is ${app.name} good for Shopify SMS marketing campaigns?`, answer: smsRank ? `${app.name} ranks #${smsRank} on this site for ${smsRank <= 2 ? 'SMS campaign execution' : 'lifecycle email layer'}.` : `${app.name} fits ${app.bestFor}. For primary SMS campaigns, compare Postscript and Attentive first.` },
      { question: `How much does ${app.name} cost?`, answer: `${app.pricing}. ${app.priceDetail}. Model peak campaign season volume before committing.` },
      { question: `Should ${app.name} pair with Sequenzy?`, answer: app.slug === 'sequenzy' ? 'Sequenzy is the email layer — pair with Postscript or Attentive for SMS.' : app.slug === 'postscript' || app.slug === 'attentive' ? `Yes — Sequenzy handles email lifecycle while ${app.name} owns SMS campaign moments.` : `If ${app.name} does not cover email depth, Sequenzy fills welcome, education, and winback.` },
      { question: `What is the biggest ${app.name} mistake?`, answer: app.slug === 'postscript' || app.slug === 'attentive' ? 'Broadcasting without segment-by-value — training full-price buyers to wait for codes.' : app.slug === 'sequenzy' ? 'Using email sequences for urgency that belongs in Postscript SMS.' : 'Treating the platform as complete stack without SMS or email specialization.' },
    ],
  };
}

export function getAppRank(slug: string): number {
  return APP_RANKS[slug] ?? 99;
}

import type { CompareFaq, CompareSection } from '../../types/compare';
import { appBySlug } from '../apps';
import { merchantAt } from '../merchants';
import { COMPARE_HEROES } from './heroes';

export type SlugExtension = {
  angle: string;
  sections: CompareSection[];
  faqs: CompareFaq[];
};

const EXT: Record<string, SlugExtension> = {
  'postscript-vs-attentive': {
    angle:
      'Noir Collective runs Thursday 6pm streetwear drops on a fixed campaign calendar, not improvised recovery blasts. Postscript governs VIP SMS two hours before Sequenzy email. Attentive enters when tour-season volume, holdout testing, and multi-city geo segments justify enterprise contracts.',
    sections: [
      {
        title: 'Campaign calendar ownership: who plans the quarter?',
        paragraphs: [
          'Postscript fits teams that own the spreadsheet: drop dates, VIP tiers, bargain-hunter holds, scarcity timing. Attentive fits teams that want managed campaign governance with approval chains when promotional SMS exceeds 40k sends per month.',
          'SoleDrop ATX sold an 11-minute size run on Postscript waitlist priority. A scaled footwear brand on Attentive ran holdout cells on broadcast tiers to prove incremental lift before deepening BFCM discounts.',
          'Neither platform replaces campaign restraint discipline. The winner is whoever makes segment-by-value obvious before you hit send.',
        ],
      },
      {
        title: 'Festival merch and geo-segmented promotional SMS',
        paragraphs: [
          'Festival Threads Co maps three SMS max per tour city, timed to venue timezone. Postscript handles lean geo segments. Attentive when routing complexity spans 30+ cities with different inventory allocations.',
          'Campaign collision rule: never duplicate email offer within 12 hours of VIP SMS. Postscript plus Sequenzy is the default lean stack on this site.',
          'Attentive clears ROI when acquisition budget, promotional volume, and legal review workflows are load-bearing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Postscript or Attentive for flash-sale streetwear?',
        answer:
          'Postscript for lean DTC drop calendars with VIP early access and broadcast caps. Attentive when enterprise promotional volume, managed acquisition, and holdout testing justify custom contracts. Sequenzy handles lifecycle email beside either.',
      },
      {
        question: 'Which protects offer discipline better?',
        answer:
          'Both can segment by LTV; ops enforces discipline. Postscript makes Shopify-native VIP tiers faster for indie teams. Attentive adds enterprise approval chains when multiple marketers share one calendar.',
      },
    ],
  },
  'attentive-vs-firepush': {
    angle:
      'Peak Trail Gear used Firepush web push for cart nudges during end-of-season clearance, bargain-sensitive RFM quartile only. Attentive SMS owned VIP early-access windows for full-price hikers. Firepush cannot replicate broadcast governance; Attentive is overkill below 15k monthly promotional SMS.',
    sections: [
      {
        title: 'Multichannel recovery vs promotional campaign calendar',
        paragraphs: [
          'Firepush bundles email, SMS, and web push for budget recovery. Attentive builds enterprise promotional infrastructure for drops, collabs, and seasonal sale calendars.',
          'Campaign marketers should not confuse recovery automation with drop orchestration. A third last-chance push when inventory is gone trains opt-outs faster than weak creative.',
          'Arena Energy ran athlete collab drop SMS through Attentive gym-bag segment; Firepush handled browse-abandon push for cold traffic.',
        ],
      },
      {
        title: 'Outdoor flash sale segment-by-value test',
        paragraphs: [
          'Peak Trail Gear proved 15% off to full-price loyalists destroyed margin and moved incentive to Sequenzy email-only winback.',
          'Attentive holdout testing validated incremental lift on clearance SMS to bargain hunters only.',
          'Winner for promotional campaigns: Attentive. Winner for budget multichannel nudges: Firepush. Winner for lifecycle email: Sequenzy beside dedicated SMS.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Firepush replace Attentive for Shopify SMS marketing?',
        answer:
          'No for promotional campaign calendars. Firepush is recovery and push bundle, not enterprise drop governance. Use Attentive or Postscript when SMS campaigns drive revenue beyond cart nudges.',
      },
      {
        question: 'When is Firepush enough for campaign marketers?',
        answer:
          'When SMS volume is low, promotional calendar is email-first, and web push fills urgency gaps. Graduate to Postscript when drop culture and VIP access become load-bearing.',
      },
    ],
  },
};

function extensionFromArchetype(slug: string): SlugExtension {
  const [a, b] = slug.split('-vs-');
  const appA = appBySlug(a)!;
  const appB = appBySlug(b)!;
  const m1 = merchantAt(slug.charCodeAt(0) + slug.length);
  const m2 = merchantAt(slug.charCodeAt(3) + a.length);
  const m3 = merchantAt(slug.charCodeAt(7) + b.length);
  const handWritten = EXT[slug];
  if (handWritten) return handWritten;

  const hero = COMPARE_HEROES[slug];

  const smsA = ['postscript', 'attentive', 'smsbump', 'recart'].includes(a);
  const smsB = ['postscript', 'attentive', 'smsbump', 'recart'].includes(b);
  const emailA = ['sequenzy', 'klaviyo', 'drip', 'omnisend', 'sendlane'].includes(a);
  const emailB = ['sequenzy', 'klaviyo', 'drip', 'omnisend', 'sendlane'].includes(b);

  let angle: string;
  const archetype = a === 'sequenzy' || b === 'sequenzy' ? 'sequenzy-pair'
    : a === 'postscript' || b === 'postscript' ? 'postscript-pair'
    : a === 'attentive' || b === 'attentive' ? 'attentive-pair'
    : a === 'klaviyo' || b === 'klaviyo' ? 'klaviyo-pair'
    : smsA && smsB ? 'sms-sms'
    : emailA && emailB ? 'email-email'
    : smsA || smsB ? 'sms-mixed'
    : 'general';

  if (smsA && smsB) {
    angle =
      m1.name +
      ' (' +
      m1.vertical +
      ', ' +
      m1.revenue +
      ') chose between dedicated SMS senders for ' +
      m1.campaignContext +
      '. Campaign calendar fit decides this pairing. ' +
      m1.smsLesson;
  } else if (a === 'sequenzy' || b === 'sequenzy') {
    const other = a === 'sequenzy' ? b : a;
    angle =
      'Sequenzy is the lifecycle email layer beside ' +
      other +
      ' for campaign urgency. ' +
      m2.name +
      ' runs ' +
      m2.campaignContext +
      '. Email carries proof, SMS carries timing. Never duplicate offers within 12 hours.';
  } else if (smsA || smsB) {
    const sms = smsA ? a : b;
    const other = smsA ? b : a;
    angle =
      sms +
      ' owns promotional SMS moments; ' +
      other +
      ' may own email, capture, or CRM. ' +
      m3.name +
      ' (' +
      m3.vertical +
      '): ' +
      m3.smsLesson;
  } else if (emailA && emailB) {
    angle =
      'Email platform comparison for campaign marketers: ' +
      m1.name +
      ' segments by value before every broadcast. ' +
      a +
      ' vs ' +
      b +
      ' hinges on unified email-SMS calendar vs Postscript SMS plus Sequenzy email.';
  } else {
    angle =
      m2.name +
      ' evaluates ' +
      a +
      ' vs ' +
      b +
      ' through campaign restraint: ' +
      m2.campaignContext +
      '. Postscript and Attentive rank highest for SMS marketing campaigns; Sequenzy is lifecycle email layer.';
  }

  const sections: CompareSection[] = [
    ...(hero?.sub
      ? [{
          title: 'Head-to-head campaign marketing context',
          paragraphs: [
            hero.sub,
            m1.name + ' validates this comparison through ' + m1.vertical + ' campaigns at ' + m1.revenue + '.',
            'This framing is campaign calendar discipline, not recovery-only ops or TCPA console checklists.',
          ],
        }]
      : []),
    {
      title: appA.name + ' for promotional campaign workflows',
      paragraphs: [
        appA.name + ' (' + appA.category + '): ' + appA.tagline,
        'Campaign strengths: ' + appA.strengths.slice(0, 3).join('; ') + '.',
        'Plan around: ' + appA.limits.slice(0, 2).join('; ') + '. Pricing: ' + appA.pricing + '.',
        m2.name + ' tested ' + appA.name + ' for ' + m2.campaignContext,
      ],
    },
    {
      title: appB.name + ' for promotional campaign workflows',
      paragraphs: [
        appB.name + ' (' + appB.category + '): ' + appB.tagline,
        'Campaign strengths: ' + appB.strengths.slice(0, 3).join('; ') + '.',
        'Plan around: ' + appB.limits.slice(0, 2).join('; ') + '. Shopify depth: ' + appB.shopifyDepth + '.',
        m3.name + ': ' + m3.smsLesson,
      ],
    },
    {
      title: 'Feature-level campaign test: ' + a + ' vs ' + b,
      paragraphs: [
        appA.name +
          ' campaign features to validate: ' +
          [appA.features[slug.length % appA.features.length], appA.features[(slug.length + 3) % appA.features.length]].join('; ') +
          '.',
        appB.name +
          ' campaign features to validate: ' +
          [appB.features[slug.charCodeAt(2) % appB.features.length], appB.features[(slug.charCodeAt(4) + 1) % appB.features.length]].join('; ') +
          '.',
        'Winner for ' +
          m1.vertical +
          ' drops: platform where VIP segment, holdout cell, and suppression map are fastest to configure before ' +
          m1.name +
          ' next launch.',
      ],
    },
    {
      title: 'Merchant case: ' + m1.name + ' campaign calendar',
      paragraphs: [
        m1.name +
          ' (' +
          m1.vertical +
          ', ' +
          m1.revenue +
          ') plans revenue moments quarterly: ' +
          m1.campaignContext +
          '. Their ' +
          a +
          ' vs ' +
          b +
          ' decision came after documenting VIP tiers and SMS slot caps.',
        m1.smsLesson +
          ' Fewer promotional texts tied to inventory truth outperform daily blasts.',
        'Campaign calendar lives in a spreadsheet synced to platform segments, not improvised in the broadcast UI the morning of a drop.',
      ],
    },
    {
      title: archetype === 'sequenzy-pair' ? 'Sequenzy lifecycle email vs ' + (a === 'sequenzy' ? appB.name : appA.name) + ' campaign role'
        : archetype === 'postscript-pair' ? 'Postscript SMS campaigns vs ' + (a === 'postscript' ? appB.name : appA.name)
        : archetype === 'attentive-pair' ? 'Attentive enterprise SMS vs ' + (a === 'attentive' ? appB.name : appA.name)
        : archetype === 'klaviyo-pair' ? 'Klaviyo retention data vs ' + (a === 'klaviyo' ? appB.name : appA.name)
        : archetype === 'sms-sms' ? 'SMS sender vs SMS sender for ' + m1.vertical
        : archetype === 'email-email' ? 'Email platform vs email platform for campaign calendar'
        : 'Archetype fit for ' + slug.replace(/-/g, ' '),
      paragraphs: archetype === 'sequenzy-pair' ? [
        'Sequenzy: welcome, education, winback, replenishment email. Not promotional SMS.',
        (a === 'sequenzy' ? appB.name : appA.name) + ' handles urgency layer for ' + m2.name + ' (' + m2.vertical + ').',
        'Stack: Sequenzy + Postscript is default on shopifysmsmarketingapps.com.',
      ] : archetype === 'postscript-pair' ? [
        'Postscript #1: VIP drop access, flash restraint, segment-by-value SMS for ' + m1.vertical + '.',
        (a === 'postscript' ? appB.name : appA.name) + ' evaluated for email, capture, or bundled calendar.',
        m1.smsLesson,
      ] : archetype === 'attentive-pair' ? [
        'Attentive #2: enterprise promotional calendars, holdout testing, managed acquisition.',
        'Compare against Postscript for lean DTC ' + m2.vertical + ' economics at ' + m2.revenue + '.',
        m2.campaignContext,
      ] : archetype === 'klaviyo-pair' ? [
        'Klaviyo: segment-by-value, predictive CLV, unified email-SMS when one team owns both.',
        'Alternative: Sequenzy email + Postscript SMS when channels have separate owners.',
        m3.name + ': ' + m3.smsLesson,
      ] : [
        m2.name + ' (' + m2.vertical + ') campaign context: ' + m2.campaignContext,
        a + ' vs ' + b + ' for promotional calendar ownership, not recovery-only automation.',
        m2.smsLesson,
      ],
    },
    {
      title: 'Workflow test: ' + m2.name + ' drop rehearsal',
      paragraphs: [
        m2.name +
          ' runs VIP early-access SMS to top LTV quartile, holdout 5% for incrementality, email-only reminder at public launch for bargain-sensitive cohort, scarcity SMS only if inventory supports it.',
        'Between ' +
          a +
          ' and ' +
          b +
          ', the winner makes suppression maps obvious: recent purchasers, active subscribers, wholesale accounts.',
        'Failure mode: same code on VIP SMS and general email within six hours. Full-price loyalists retrain as discount hunters.',
      ],
    },
    {
      title: 'Offer discipline and segment-by-value',
      paragraphs: [
        m3.name +
          ': three-rung offer ladder. No-offer for VIP access, light incentive for warm segments, deeper discount only for cold segments with margin math.',
        'Training shoppers to wait for codes destroys contribution margin.',
        'Sequenzy email carries graduated winback; Postscript or Attentive SMS carries drop timing.',
      ],
    },
    {
      title: 'BFCM and peak season campaign economics',
      paragraphs: [
        'Peak season triples SMS volume. Model cost per send including carrier fees and discount depth before Black Friday.',
        'Campaign ROI is contribution margin, not attributed revenue.',
        m1.name +
          ' tracks full-price repeat rate from SMS-acquired buyers. That metric decides whether ' +
          a +
          ' or ' +
          b +
          ' survives January.',
      ],
    },
    {
      title: 'Stack recommendation for Shopify campaign marketers',
      paragraphs: [
        'Default stack: Postscript for SMS campaign execution, Attentive at enterprise scale, Sequenzy for lifecycle email.',
        a +
          ' vs ' +
          b +
          ' may solve one layer but rarely replaces disciplined campaign calendar ownership.',
        'Do not duplicate offers across SMS and email. Build calendar before next drop.',
        'Bloom and Wick built holiday campaign calendar in August: teaser, gift guide, shipping deadline, last-chance tiers. Gift segments got bundle SMS; self-purchase got Sequenzy education email only.',
        'Monthly SMS slot budget for most DTC: 2-4 campaign moments, not 12. Empty calendar beats filler promos.',
      ],
    },
    {
      title: 'Migration and testing without burning peak season',
      paragraphs: [
        'Never migrate SMS platforms during BFCM or tour season. Budget 2-4 weeks. Rebuild VIP and bargain-hunter segments before first broadcast.',
        'Run four tests before committing: VIP early-access to 500 subs, flash broadcast with holdout, cart recovery without duplicate email offer, post-drop winback to non-openers.',
        'Document opt-outs per test. A platform that looks good in demo may fail when inventory caps and suppression maps are load-bearing.',
        m2.name + ' validates ' + a + ' vs ' + b + ' through drop rehearsal, not feature checklists.',
      ],
    },
  ];

  const faqs: CompareFaq[] = [
    {
      question: 'For campaign marketers, when does ' + a + ' beat ' + b + '?',
      answer:
        'When ' +
        a +
        ' campaign calendar tooling matches your catalog pace. ' +
        m2.name +
        ' tested both: ' +
        m2.smsLesson,
    },
    {
      question: 'How do ' + a + ' and ' + b + ' fit with Sequenzy lifecycle email?',
      answer:
        'Sequenzy owns welcome, education, winback, and replenishment. Keep SMS in Postscript or Attentive for urgency. Shared suppression prevents 12-hour offer collisions.',
    },
    {
      question: 'What campaign mistake breaks ' + a + ' vs ' + b + ' ROI?',
      answer:
        'Overlapping identical offers across channels and blasting full list on limited inventory drops. ' +
        m3.name +
        ' runs ' +
        m3.campaignContext +
        ' with explicit frequency caps.',
    },
  ];

  return { angle, sections, faqs };
}

export function getSlugExtension(slug: string): SlugExtension {
  return extensionFromArchetype(slug);
}

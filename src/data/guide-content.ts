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
    "slug": "campaign-restraint",
    "title": "Campaign Restraint for SMS Marketing",
    "kicker": "Campaign restraint",
    "hero": "Decide whether another message adds useful information before assigning it a calendar slot.",
    "sections": [
      {
        "title": "Release decisions",
        "paragraphs": [
          "List the audience, reason to send, competing messages and deadline. A restock alert to people who requested that product serves a different purpose from a repeated sale reminder.",
          "Choose a store-specific frequency policy from capture promises, audience response and operational capacity. A universal monthly cap cannot resolve those tradeoffs."
        ]
      },
      {
        "title": "Measure the extra touch",
        "paragraphs": [
          "Compare a defined audience receiving the reminder with a suitable withheld group where feasible. Specify the observation period and stop conditions before launch.",
          "Track attempted, skipped and delivered sends separately. Read opt-outs alongside relevance, capture source and delivery failures rather than assuming frequency explains every change."
        ]
      }
    ],
    "checklist": [
      "Document the new information",
      "Check competing flows",
      "Define a stop condition",
      "Review marginal contribution"
    ]
  },
  {
    "slug": "offer-discipline",
    "title": "Offer Discipline for SMS Campaigns",
    "kicker": "Offer discipline",
    "hero": "Choose access, service or a discount according to the purchase problem and contribution economics.",
    "sections": [
      {
        "title": "Offer alternatives",
        "paragraphs": [
          "Early access may serve a waitlist without a discount. A bundle may solve a selection problem. A price incentive addresses a different obstacle and should be evaluated separately.",
          "Prior spend is one signal, not a rule that every loyal customer pays full price or every inactive subscriber needs a coupon."
        ]
      },
      {
        "title": "Checkout rehearsal",
        "paragraphs": [
          "Try eligible and excluded carts, an existing automatic discount and a forwarded code. Verify actual combination settings rather than imposing a blanket ban on stacking.",
          "Estimate net sales less goods, fulfillment, payment and messaging costs. Compare incremental contribution with the alternative offer, including customers who would have purchased anyway."
        ]
      }
    ],
    "checklist": [
      "State the purchase obstacle",
      "Rehearse checkout eligibility",
      "Include incentive costs",
      "Distinguish attributed from incremental orders"
    ]
  },
  {
    "slug": "segment-by-value",
    "title": "Segment by Value for SMS Marketing",
    "kicker": "Audience selection",
    "hero": "Use purchase history alongside product interest, permission and service needs to define a relevant audience.",
    "sections": [
      {
        "title": "Define eligibility",
        "paragraphs": [
          "Record the actual product or service need before applying a lifetime-value threshold. A first-time waitlist subscriber may have stronger release interest than a high-spend customer in another category.",
          "Treat missing data separately from low value. Refunds, subscriptions and merged profiles can change the meaning of recorded spend."
        ]
      },
      {
        "title": "Refresh and inspect",
        "paragraphs": [
          "Save the inclusion and exclusion conditions with the campaign. Inspect sample members and nonmembers before launch.",
          "Choose refresh timing based on how quickly the underlying events change. Test whether a purchase removes a profile from the intended promotion."
        ]
      }
    ],
    "checklist": [
      "Name the audience purpose",
      "Inspect missing values",
      "Check purchase exclusions",
      "Save segment conditions"
    ]
  },
  {
    "slug": "email-sms-coordination",
    "title": "Email and SMS Campaign Coordination",
    "kicker": "Channel coordination",
    "hero": "Assign ownership across channels so every queued message has a purpose and a current eligibility check.",
    "sections": [
      {
        "title": "Shared calendar",
        "paragraphs": [
          "Record campaign owner, audience, channel, offer, deadline and competing automation. Email may explain a product while SMS provides a requested time-sensitive alert.",
          "Choose timing from the customer journey and offer validity. A fixed gap between all email and SMS does not establish relevance."
        ]
      },
      {
        "title": "State handoff",
        "paragraphs": [
          "Reconcile separate channel permissions, recent purchases and duplicate identities before launch. Define which system is authoritative when states disagree.",
          "Test a purchase and opt-out while a message is queued. If event delivery is delayed, design an explicit fallback rather than assuming the other sender has updated."
        ]
      }
    ],
    "checklist": [
      "Assign one owner per job",
      "Map channel permissions",
      "Test queued exits",
      "Cancel stale offers"
    ]
  },
  {
    "slug": "pricing",
    "title": "SMS Campaign Pricing and ROI",
    "kicker": "Campaign economics",
    "hero": "Compare the full operating cost of the intended audience and send mix before selecting a plan.",
    "sections": [
      {
        "title": "Quote assumptions",
        "paragraphs": [
          "Use the same contact count, destination mix, message composition and peak volume for every quote. Separate subscription, usage, carrier-related fees and add-ons where applicable.",
          "Ask how imports, duplicate profiles, overages and unused credits affect billing. An advertised starting price is not a forecast for the store."
        ]
      },
      {
        "title": "Contribution comparison",
        "paragraphs": [
          "Calculate net sales after incentives and refunds, then subtract relevant product, fulfillment, payment, messaging and support costs without double-counting discounts.",
          "Attribution windows assign credit; they do not establish causal lift. Use a suitable withheld comparison where feasible and include implementation labor in stack cost."
        ]
      }
    ],
    "checklist": [
      "Save quote assumptions",
      "Model the peak month",
      "Include integration labor",
      "Separate attribution from lift"
    ]
  },
  {
    "slug": "list-growth",
    "title": "SMS List Growth for Campaign Marketers",
    "kicker": "List growth",
    "hero": "Capture permission and useful intent together so new subscribers enter the right conversation.",
    "sections": [
      {
        "title": "Capture paths",
        "paragraphs": [
          "Separate a product alert, an event keyword and a general promotion signup. Store the capture text and product or event identifier needed to honor the promise.",
          "An email subscriber or purchaser with a phone number is not automatically an SMS subscriber. Keep unknown permission states out of promotional eligibility."
        ]
      },
      {
        "title": "Evaluate quality",
        "paragraphs": [
          "Compare sources by eligible subscribers, response, opt-outs and contribution over a defined period. Raw signup counts alone cannot identify the more useful source.",
          "Rehearse the welcome branch and an immediate opt-out before expanding traffic. Match the first message to the original signup purpose."
        ]
      }
    ],
    "checklist": [
      "Archive capture wording",
      "Preserve source and scope",
      "Test the welcome branch",
      "Compare source cohorts"
    ]
  },
  {
    "slug": "consent",
    "title": "SMS Consent for Marketing Campaigns",
    "kicker": "Permission records",
    "hero": "Make permission history traceable from capture through migration and queued-message eligibility.",
    "sections": [
      {
        "title": "Evidence and scope",
        "paragraphs": [
          "Keep capture source, timestamp, wording version, channel and subsequent changes in a record that can be retrieved. This is an operational record design, not a claim of legal completeness.",
          "Interpret an opt-out according to its actual scope and applicable requirements. Do not assume every channel has the same permission state."
        ]
      },
      {
        "title": "Migration reconciliation",
        "paragraphs": [
          "Map subscribed, unsubscribed, pending and unknown states before importing. Preserve evidence outside the destination if it cannot retain the necessary history.",
          "Test an opt-out during cutover and confirm the result in every active sender. Reconcile counts and investigate discrepancies before activating migrated flows."
        ]
      }
    ],
    "checklist": [
      "Map channel-specific states",
      "Preserve evidence history",
      "Reconcile cutover updates",
      "Inspect queued-message behavior"
    ]
  },
  {
    "slug": "tcpa",
    "title": "SMS Campaign Legal Review Preparation",
    "kicker": "Legal review preparation",
    "hero": "Prepare the capture and sending facts needed for a qualified review of the intended SMS program.",
    "sections": [
      {
        "title": "Describe the program",
        "paragraphs": [
          "List recipient markets, message categories, capture paths, sender arrangements and automated steps. Legal requirements depend on those facts and should be checked against current primary authority.",
          "Provide the actual disclosure, form behavior and opt-out handling for review. A shorter calendar does not by itself establish compliance."
        ]
      },
      {
        "title": "Turn advice into configuration",
        "paragraphs": [
          "Document the approved eligibility and timing rules for each affected audience, along with the owner responsible for changes.",
          "Revisit the review when markets, capture copy or sending behavior change. Record how the implementation was checked against the resulting requirements."
        ]
      }
    ],
    "checklist": [
      "Inventory destination markets",
      "Provide actual capture copy",
      "Record approved operating rules",
      "Assign change ownership"
    ]
  },
  {
    "slug": "quiet-hours",
    "title": "Quiet Hours for Campaign Sends",
    "kicker": "Send timing",
    "hero": "Decide how local-time restrictions and offer deadlines interact before scheduling a campaign.",
    "sections": [
      {
        "title": "Time inputs",
        "paragraphs": [
          "Identify which timezone source each sender uses and what happens when location is missing or ambiguous. A venue timezone does not establish every recipient timezone.",
          "Derive sending windows from applicable requirements and provider behavior for the intended destinations. Do not apply one worldwide legal window."
        ]
      },
      {
        "title": "Deferred sends",
        "paragraphs": [
          "Rehearse a message queued near a window boundary, a daylight-saving change and a missing-timezone profile. Inspect the final scheduled time.",
          "If deferral moves the send beyond stock availability or an offer deadline, cancel or re-evaluate it. Quiet-hour scheduling should not turn timely information into a stale promise."
        ]
      }
    ],
    "checklist": [
      "Identify timezone source",
      "Define unknown-location behavior",
      "Test boundary deferral",
      "Expire stale offers"
    ]
  },
  {
    "slug": "deliverability",
    "title": "SMS Deliverability for Campaign Marketers",
    "kicker": "Delivery diagnosis",
    "hero": "Locate the delivery failure before changing audience, copy or sender configuration.",
    "sections": [
      {
        "title": "Trace the send",
        "paragraphs": [
          "Separate ineligible, suppressed, queued, attempted and delivered messages in reporting. A send skipped for permission reasons is a different problem from a carrier rejection.",
          "Inspect provider status and error detail alongside sender registration, destination support and content. Segmentation alone cannot repair a technical provisioning failure."
        ]
      },
      {
        "title": "Recovery plan",
        "paragraphs": [
          "Pause the affected path when the cause is unresolved, preserving logs and the audience definition. Change one relevant factor and use a controlled rehearsal before restoring volume.",
          "Track delivery and opt-outs separately. A delivered status does not demonstrate attention, purchase intent or incremental revenue."
        ]
      }
    ],
    "checklist": [
      "Record status and error detail",
      "Check sender and destination",
      "Keep suppression intact",
      "Rehearse the corrected path"
    ]
  }
];

export function getGuideContent(slug: string): GuideContent {
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Unknown guide: ${slug}`);
  return { ...guide };
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}

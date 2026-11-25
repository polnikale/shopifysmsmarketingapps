export type ShopifyApp = {
  slug: string;
  name: string;
  category: string;
  bestFor: string;
  pricing: string;
  priceDetail: string;
  rating: string;
  shopifyDepth: string;
  automationDepth: string;
  tagline: string;
  strengths: string[];
  limits: string[];
  features: string[];
  channels: string[];
  shopifyFit: string;
};

// Catalog order is preserved for route compatibility; it is not a quality ranking.
export const APPS: ShopifyApp[] = [
  {
    "slug": "postscript",
    "name": "Postscript",
    "category": "SMS and phased email",
    "bestFor": "Teams evaluating SMS with a staged email migration",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "SMS campaigns",
      "Email onboarding in cohorts"
    ],
    "limits": [
      "Get written email access timing before retiring an existing sender."
    ],
    "shopifyFit": "Proposed acceptance check: Rehearse a shopper reply followed by a purchase: route the reply to its owner and cancel the queued cart reminder.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Get written email access timing before retiring an existing sender.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating SMS with a staged email migration",
    "features": [
      "SMS campaigns",
      "Email onboarding in cohorts"
    ]
  },
  {
    "slug": "attentive",
    "name": "Attentive",
    "category": "Email and SMS marketing",
    "bestFor": "Teams evaluating capture and coordinated channel audiences",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Email and SMS campaigns",
      "Signup units",
      "Audience personalization"
    ],
    "limits": [
      "Request an account-specific channel and services quote."
    ],
    "shopifyFit": "Proposed acceptance check: Submit a signup on mobile, decline SMS while accepting email, then inspect audience eligibility and a purchase-triggered exit in the proposed journey.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Request an account-specific channel and services quote.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating capture and coordinated channel audiences",
    "features": [
      "Email and SMS campaigns",
      "Signup units",
      "Audience personalization"
    ]
  },
  {
    "slug": "sequenzy",
    "name": "Sequenzy",
    "category": "Event-driven lifecycle messaging",
    "bestFor": "Teams evaluating agent-assisted and API-driven workflows",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "MCP agent access",
      "Marketing and transactional email",
      "Advertised SMS and push flow steps"
    ],
    "limits": [
      "Prove the Shopify event bridge, SMS destination coverage and sender setup."
    ],
    "shopifyFit": "Proposed acceptance check: Replay an order webhook through the maintained integration; inspect identity mapping, deduplication and conversion exits before allowing an agent to schedule a campaign.",
    "channels": [
      "email",
      "sms",
      "push",
      "marketing"
    ],
    "priceDetail": "Prove the Shopify event bridge, SMS destination coverage and sender setup.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating agent-assisted and API-driven workflows",
    "features": [
      "MCP agent access",
      "Marketing and transactional email",
      "Advertised SMS and push flow steps"
    ]
  },
  {
    "slug": "klaviyo",
    "name": "Klaviyo",
    "category": "Email and SMS automation",
    "bestFor": "Teams evaluating Shopify event and profile targeting",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Shopify event sync",
      "Customer profiles",
      "Email and SMS campaigns"
    ],
    "limits": [
      "Reconcile billable profiles and messaging allowances in the quote."
    ],
    "shopifyFit": "Proposed acceptance check: Compare an order, refund and variant change in Shopify against the profile and flow filters; document event lag and which events stop a queued offer.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Reconcile billable profiles and messaging allowances in the quote.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating Shopify event and profile targeting",
    "features": [
      "Shopify event sync",
      "Customer profiles",
      "Email and SMS campaigns"
    ]
  },
  {
    "slug": "omnisend",
    "name": "Omnisend",
    "category": "Email and SMS campaigns",
    "bestFor": "Teams evaluating capture-to-checkout messaging",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Email and SMS campaigns",
      "Signup forms",
      "Ecommerce automations"
    ],
    "limits": [
      "Model destination-dependent SMS charges alongside the email plan."
    ],
    "shopifyFit": "Proposed acceptance check: Rehearse a cart with an expired discount and a purchase during a delay; require accurate product content and cancellation of the recovery send.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Model destination-dependent SMS charges alongside the email plan.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating capture-to-checkout messaging",
    "features": [
      "Email and SMS campaigns",
      "Signup forms",
      "Ecommerce automations"
    ]
  },
  {
    "slug": "shopify-email",
    "name": "Shopify Email",
    "category": "Shopify Messaging (formerly Email)",
    "bestFor": "Teams evaluating marketing inside Shopify",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Email campaigns",
      "Advertised SMS and WhatsApp",
      "Shopify admin workflow"
    ],
    "limits": [
      "Verify channel eligibility for the store and destination before planning a rollout."
    ],
    "shopifyFit": "Proposed acceptance check: Build a product announcement from the current catalog in Shopify, check subscriber eligibility per channel and preview a sold-out variant before scheduling.",
    "channels": [
      "email",
      "sms",
      "whatsapp",
      "marketing"
    ],
    "priceDetail": "Verify channel eligibility for the store and destination before planning a rollout.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating marketing inside Shopify",
    "features": [
      "Email campaigns",
      "Advertised SMS and WhatsApp",
      "Shopify admin workflow"
    ]
  },
  {
    "slug": "yotpo-email-sms",
    "name": "Yotpo Email & SMS",
    "category": "Retired Email and SMS product",
    "bestFor": "Existing accounts auditing a historical Yotpo migration",
    "pricing": "Not offered as a new sender",
    "strengths": [
      "Official migration guidance",
      "Historical Email and SMS identity"
    ],
    "limits": [
      "Yotpo scheduled full Email/SMS deprecation for December 31, 2025; do not shortlist it as a new sender."
    ],
    "shopifyFit": "Proposed acceptance check: Audit exported consent history, suppressions, templates and sender ownership against the replacement account; reviews and loyalty are separate product decisions.",
    "channels": [
      "marketing"
    ],
    "priceDetail": "Yotpo scheduled full Email/SMS deprecation for December 31, 2025; do not shortlist it as a new sender.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Existing accounts auditing a historical Yotpo migration",
    "features": [
      "Official migration guidance",
      "Historical Email and SMS identity"
    ]
  },
  {
    "slug": "privy",
    "name": "Privy",
    "category": "Capture, email and SMS",
    "bestFor": "Teams joining onsite capture to channel-specific flows",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Popups",
      "Email and SMS flows",
      "Conditional splits"
    ],
    "limits": [
      "The legacy Shopify listing says unavailable; establish the current installation path with Privy."
    ],
    "shopifyFit": "Proposed acceptance check: Collect email and SMS choices separately in a popup, then inspect flow entry and branch behavior. Obtain the current onboarding path rather than relying on the legacy app URL.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "The legacy Shopify listing says unavailable; establish the current installation path with Privy.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams joining onsite capture to channel-specific flows",
    "features": [
      "Popups",
      "Email and SMS flows",
      "Conditional splits"
    ]
  },
  {
    "slug": "drip",
    "name": "Drip",
    "category": "Ecommerce email automation",
    "bestFor": "Operators designing behavioral email journeys",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Ecommerce email",
      "Workflow tooling",
      "Customer-data personalization"
    ],
    "limits": [
      "Demonstrate the required store events; do not infer native SMS from email workflows."
    ],
    "shopifyFit": "Proposed acceptance check: Build a repeat-purchase branch from order and product data, replay a returned order and inspect whether the customer remains eligible for the replenishment email.",
    "channels": [
      "email",
      "marketing"
    ],
    "priceDetail": "Demonstrate the required store events; do not infer native SMS from email workflows.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Operators designing behavioral email journeys",
    "features": [
      "Ecommerce email",
      "Workflow tooling",
      "Customer-data personalization"
    ]
  },
  {
    "slug": "mailchimp",
    "name": "Mailchimp",
    "category": "Connected ecommerce marketing",
    "bestFor": "Teams keeping an existing Mailchimp audience",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Shopify connection",
      "Email marketing",
      "SMS marketing offering"
    ],
    "limits": [
      "Confirm SMS country eligibility and contact billing for the selected plan."
    ],
    "shopifyFit": "Proposed acceptance check: Sync a customer already in an audience and inspect duplicate handling, subscription status and order history; require cart messaging to exit after purchase.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Confirm SMS country eligibility and contact billing for the selected plan.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams keeping an existing Mailchimp audience",
    "features": [
      "Shopify connection",
      "Email marketing",
      "SMS marketing offering"
    ]
  },
  {
    "slug": "activecampaign",
    "name": "ActiveCampaign",
    "category": "Automation and CRM",
    "bestFor": "Teams connecting store activity to sales follow-up",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Shopify integration",
      "Marketing automation",
      "CRM and SMS offerings"
    ],
    "limits": [
      "Confirm add-on entitlements and ownership of sales versus marketing messages."
    ],
    "shopifyFit": "Proposed acceptance check: Have a wholesale purchase update the intended contact and sales pipeline; prevent a rep task and automated offer from contradicting an open support case.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Confirm add-on entitlements and ownership of sales versus marketing messages.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams connecting store activity to sales follow-up",
    "features": [
      "Shopify integration",
      "Marketing automation",
      "CRM and SMS offerings"
    ]
  },
  {
    "slug": "brevo",
    "name": "Brevo",
    "category": "Brevo PushOwl for Shopify",
    "bestFor": "Teams evaluating the supported Brevo Shopify connection",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Shopify customer/product/order sync",
      "Email, SMS, push and WhatsApp campaigns"
    ],
    "limits": [
      "Brevo identifies PushOwl as the supported connection for new stores; distinguish it from the former app."
    ],
    "shopifyFit": "Proposed acceptance check: Import a known customer and product through PushOwl, verify the mapped order and channel permissions, then test an out-of-stock signup through restock without subscribing it to unrelated promotions.",
    "channels": [
      "email",
      "sms",
      "push",
      "whatsapp",
      "marketing"
    ],
    "priceDetail": "Brevo identifies PushOwl as the supported connection for new stores; distinguish it from the former app.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating the supported Brevo Shopify connection",
    "features": [
      "Shopify customer/product/order sync",
      "Email, SMS, push and WhatsApp campaigns"
    ]
  },
  {
    "slug": "sendlane",
    "name": "Sendlane",
    "category": "Sendlane within Privy",
    "bestFor": "Existing Sendlane teams assessing account continuity",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Privy acquisition announced February 2026",
      "Email and SMS platform heritage"
    ],
    "limits": [
      "Confirm current contract, platform access and migration commitments with Privy."
    ],
    "shopifyFit": "Proposed acceptance check: Inventory active Sendlane flows and suppression exports; ask Privy which continue in place and which must be rebuilt, with owner and rollback criteria for each.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Confirm current contract, platform access and migration commitments with Privy.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Existing Sendlane teams assessing account continuity",
    "features": [
      "Privy acquisition announced February 2026",
      "Email and SMS platform heritage"
    ]
  },
  {
    "slug": "aftership-email",
    "name": "AfterShip Email",
    "category": "AfterShip Email Marketing and SMS",
    "bestFor": "Teams evaluating marketing alongside onsite conversion tools",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Behavior-based email flows",
      "Email and SMS templates",
      "Popups and segmentation"
    ],
    "limits": [
      "Do not equate the marketing app with the separate shipment tracking product."
    ],
    "shopifyFit": "Proposed acceptance check: Build a welcome flow from a conversion popup; if a delivery event is required, demonstrate its actual tracking-to-marketing connection and distinguish a service update from a promotion.",
    "channels": [
      "email",
      "sms",
      "push",
      "marketing"
    ],
    "priceDetail": "Do not equate the marketing app with the separate shipment tracking product.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating marketing alongside onsite conversion tools",
    "features": [
      "Behavior-based email flows",
      "Email and SMS templates",
      "Popups and segmentation"
    ]
  },
  {
    "slug": "recart",
    "name": "Recart",
    "category": "SMS and managed services",
    "bestFor": "Teams evaluating SMS execution with an assigned strategist",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "SMS campaigns",
      "Popup capture",
      "Managed program options"
    ],
    "limits": [
      "Define service deliverables, approval ownership and message charges in the agreement."
    ],
    "shopifyFit": "Proposed acceptance check: Ask the proposed strategist to prepare a cart flow and campaign calendar; require merchant approval, purchase suppression and an incremental measurement plan in the handoff.",
    "channels": [
      "sms",
      "marketing"
    ],
    "priceDetail": "Define service deliverables, approval ownership and message charges in the agreement.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating SMS execution with an assigned strategist",
    "features": [
      "SMS campaigns",
      "Popup capture",
      "Managed program options"
    ]
  },
  {
    "slug": "justuno",
    "name": "Justuno",
    "category": "Onsite list capture",
    "bestFor": "Teams feeding permissioned signups into a sender",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Popups",
      "Visitor identification",
      "List-growth services"
    ],
    "limits": [
      "Treat identified traffic and explicit channel permission as different states."
    ],
    "shopifyFit": "Proposed acceptance check: Submit a popup on mobile and desktop, verify consent and source reach the chosen messaging tool, and ensure a returning subscriber does not receive a second acquisition incentive.",
    "channels": [
      "capture",
      "marketing"
    ],
    "priceDetail": "Treat identified traffic and explicit channel permission as different states.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams feeding permissioned signups into a sender",
    "features": [
      "Popups",
      "Visitor identification",
      "List-growth services"
    ]
  },
  {
    "slug": "rejoiner",
    "name": "Rejoiner",
    "category": "Managed email and SMS lifecycle",
    "bestFor": "Teams buying program support with messaging software",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Email and SMS platform",
      "Retention team support"
    ],
    "limits": [
      "Specify creative revisions, approval rights and export access in the service scope."
    ],
    "shopifyFit": "Proposed acceptance check: Request a sample weekly operating handoff: who edits the cart sequence, approves an offer, checks purchase exits and reports attributed versus incremental revenue.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Specify creative revisions, approval rights and export access in the service scope.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams buying program support with messaging software",
    "features": [
      "Email and SMS platform",
      "Retention team support"
    ]
  },
  {
    "slug": "marsello",
    "name": "Marsello",
    "category": "Loyalty and multichannel marketing",
    "bestFor": "Retailers reconciling online and POS customer activity",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Loyalty and referrals",
      "Email and SMS campaigns",
      "POS and ecommerce connections"
    ],
    "limits": [
      "Reconcile customer identities and reward balances across sales channels."
    ],
    "shopifyFit": "Proposed acceptance check: Place an online order and an in-store return for the same customer; require the loyalty balance, audience tier and queued reward message to reflect the agreed return policy.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "priceDetail": "Reconcile customer identities and reward balances across sales channels.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Retailers reconciling online and POS customer activity",
    "features": [
      "Loyalty and referrals",
      "Email and SMS campaigns",
      "POS and ecommerce connections"
    ]
  },
  {
    "slug": "firepush",
    "name": "Firepush",
    "category": "SMS and web push",
    "bestFor": "Teams evaluating browser push alongside text recovery",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "SMS campaigns",
      "Web push notifications",
      "Cart and price-alert automation"
    ],
    "limits": [
      "Current developer listing focuses on SMS and web push; confirm any requested email capability separately."
    ],
    "shopifyFit": "Proposed acceptance check: Opt into browser push while declining SMS, then change a product price and complete checkout; verify channel separation and cancellation of obsolete recovery notifications.",
    "channels": [
      "sms",
      "push",
      "marketing"
    ],
    "priceDetail": "Current developer listing focuses on SMS and web push; confirm any requested email capability separately.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating browser push alongside text recovery",
    "features": [
      "SMS campaigns",
      "Web push notifications",
      "Cart and price-alert automation"
    ]
  },
  {
    "slug": "smsbump",
    "name": "SMSBump",
    "category": "Historical Yotpo SMS identity",
    "bestFor": "Merchants locating legacy SMSBump migration assets",
    "pricing": "Not offered as a new sender",
    "strengths": [
      "Historical SMSBump/Yotpo identity",
      "Yotpo migration guidance"
    ],
    "limits": [
      "Treat this as a legacy migration record, not an independent current SMS alternative."
    ],
    "shopifyFit": "Proposed acceptance check: Locate the former sending number, keyword rules and opt-out exports; require the destination sender to preserve suppressions before any replacement campaign.",
    "channels": [
      "marketing"
    ],
    "priceDetail": "Treat this as a legacy migration record, not an independent current SMS alternative.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Merchants locating legacy SMSBump migration assets",
    "features": [
      "Historical SMSBump/Yotpo identity",
      "Yotpo migration guidance"
    ]
  },
  {
    "slug": "tinyemail",
    "name": "tinyEmail",
    "category": "Email marketing",
    "bestFor": "Teams evaluating campaign production and sending controls",
    "pricing": "Confirm current plan, usage and service quote",
    "strengths": [
      "Email editor",
      "Templates",
      "Advertised sending controls"
    ],
    "limits": [
      "Do not treat advertised inbox-placement benefits as measured results for this store."
    ],
    "shopifyFit": "Proposed acceptance check: Preview a product campaign on mobile, authenticate the sending domain and inspect bounce/suppression handling with a controlled seed list before increasing volume.",
    "channels": [
      "email",
      "marketing"
    ],
    "priceDetail": "Do not treat advertised inbox-placement benefits as measured results for this store.",
    "rating": "Not scored",
    "shopifyDepth": "Evaluate integration",
    "automationDepth": "Evaluate proposed workflow",
    "tagline": "Teams evaluating campaign production and sending controls",
    "features": [
      "Email editor",
      "Templates",
      "Advertised sending controls"
    ]
  }
];

export function appBySlug(slug: string) {
  return APPS.find((a) => a.slug === slug);
}

export function channelApps(channel: string) {
  return APPS.filter((app) => app.channels.includes(channel) || app.channels.includes('marketing'));
}

export function comparisonPairs() {
  const pairs: [ShopifyApp, ShopifyApp][] = [];
  const emailApps = channelApps('email');
  for (let i = 0; i < emailApps.length; i++) {
    for (let j = i + 1; j < Math.min(emailApps.length, i + 7); j++) {
      pairs.push([emailApps[i], emailApps[j]]);
    }
  }
  return pairs.slice(0, 70);
}

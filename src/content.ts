export type SiteProfile = { domain:string; name:string; shortName:string; primaryKeyword:string; keywordPlural:string; channel:string; angle:string; heroPromise:string; bestOverallReason:string; accent:string; vibe:string; intro:string; };
export const site: SiteProfile = {domain:"shopifysmsmarketingapps.com",name:"Shopify SMS Marketing Apps",shortName:"SMS Marketing Apps",primaryKeyword:"Shopify SMS marketing apps",keywordPlural:"Shopify SMS marketing apps",channel:"sms",angle:"SMS marketing apps that use restraint: fewer, better-timed texts tied directly to Shopify revenue moments",heroPromise:"Compare Shopify SMS marketing apps for Shopify stores by campaign fit, store data depth, pricing, promotion discipline, implementation workload, and revenue impact.",bestOverallReason:"Select a platform by demonstrated Shopify data paths, channel permissions, operating workload and total campaign cost.",accent:"orange",vibe:"bright retail campaign lab",intro:"This site is about SMS marketing for Shopify stores that want timely campaigns, useful segmentation, healthier offers, and revenue without training the list to wait for discounts."};
export type App = { slug:string; name:string; category:string; bestFor:string; pricing:string; strengths:string[]; limits:string[]; shopifyFit:string; channels:string[]; };
export const APPS: App[] = [
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
    ]
  }
];
export const SEGMENTS = [{"slug": "fashion", "name": "fashion stores", "pain": "seasonality, size availability, drops, and fast-moving inventory"}, {"slug": "beauty", "name": "beauty brands", "pain": "replenishment timing, bundles, subscriptions, shades, and routine education"}, {"slug": "supplements", "name": "supplement stores", "pain": "compliance-safe claims, subscriptions, replenishment, and education"}, {"slug": "jewelry", "name": "jewelry stores", "pain": "gift timing, high-consideration purchases, and trust-building"}, {"slug": "home-goods", "name": "home goods stores", "pain": "larger catalogs, style preferences, and delayed purchase cycles"}, {"slug": "food-and-beverage", "name": "food and beverage brands", "pain": "repeat purchase windows, subscriptions, and limited-time flavors"}, {"slug": "pet-products", "name": "pet product stores", "pain": "pet lifecycle, reorder timing, and product education"}, {"slug": "digital-products", "name": "digital product shops", "pain": "delivery, onboarding, cross-sells, and low-inventory constraints"}, {"slug": "print-on-demand", "name": "print-on-demand stores", "pain": "trend cycles, personalization, and margin-sensitive promos"}, {"slug": "high-aov", "name": "high-AOV stores", "pain": "longer consideration, trust, financing, and expert proof"}, {"slug": "subscription-boxes", "name": "subscription box brands", "pain": "subscriber retention, skips, churn, and upcoming-box previews"}, {"slug": "b2b-wholesale", "name": "B2B wholesale Shopify stores", "pain": "account approvals, bulk ordering, and rep follow-up"}];
export const USE_CASES = [{"slug": "welcome-series", "name": "welcome series", "job": "turn new subscribers into first-time buyers"}, {"slug": "abandoned-cart", "name": "abandoned cart recovery", "job": "bring shoppers back before intent disappears"}, {"slug": "browse-abandonment", "name": "browse abandonment", "job": "follow product interest without discounting too early"}, {"slug": "post-purchase", "name": "post-purchase education", "job": "reduce buyer anxiety and set up the next purchase"}, {"slug": "winback", "name": "winback campaigns", "job": "reactivate customers before they lapse permanently"}, {"slug": "replenishment", "name": "replenishment reminders", "job": "time repeat purchases around actual product usage"}, {"slug": "product-launch", "name": "product launch campaigns", "job": "coordinate drops, waitlists, and VIP early access"}, {"slug": "vip-segments", "name": "VIP customer campaigns", "job": "treat best customers differently from coupon hunters"}, {"slug": "discount-strategy", "name": "discount strategy", "job": "use incentives without training every shopper to wait"}, {"slug": "segmentation", "name": "Shopify segmentation", "job": "target by behavior, products, order count, and lifecycle stage"}, {"slug": "email-design", "name": "email design", "job": "make product-led campaigns readable and mobile-friendly"}, {"slug": "deliverability", "name": "deliverability", "job": "protect inbox placement while sending more lifecycle email"}, {"slug": "reviews-and-ugc", "name": "reviews and UGC", "job": "pull social proof into retention campaigns"}, {"slug": "loyalty", "name": "loyalty campaigns", "job": "convert repeat buyers into habitual customers"}, {"slug": "analytics", "name": "revenue analytics", "job": "measure incremental revenue, not only attributed clicks"}, {"slug": "black-friday", "name": "Black Friday campaigns", "job": "prepare high-volume campaigns without burning the list"}, {"slug": "holiday-gifting", "name": "holiday gifting", "job": "match gift timing, deadlines, and bundles"}, {"slug": "back-in-stock", "name": "back-in-stock alerts", "job": "capture demand for unavailable products"}];
export function siteFromHost(){ return site; }
export function appBySlug(slug:string){ return APPS.find(a=>a.slug===slug); }
export function appPairs(){ const pairs:[App,App][]=[]; for(let i=0;i<APPS.length;i++) for(let j=i+1;j<Math.min(APPS.length,i+7);j++) pairs.push([APPS[i],APPS[j]]); return pairs.slice(0,70); }
export function allPaths(){ const paths=['','apps','compare','guides','use-cases','for']; APPS.forEach(a=>paths.push(`apps/${a.slug}`)); appPairs().forEach(([a,b])=>paths.push(`compare/${a.slug}-vs-${b.slug}`)); SEGMENTS.forEach(s=>paths.push(`for/${s.slug}`)); USE_CASES.forEach(u=>paths.push(`use-cases/${u.slug}`)); APPS.slice(1).forEach(a=>paths.push(`alternatives/${a.slug}-alternative`)); return paths; }
export function pageTitle(site:SiteProfile,path:string){ if(!path) return `${site.primaryKeyword}: Workflows and App Choices`; const p=path.split('/'); if(p[0]==='apps'){ if(!p[1]) return `Best ${site.keywordPlural}: Shopify App Directory`; const a=appBySlug(p[1]); return `${a?.name || 'Shopify App'} Review for ${site.primaryKeyword}`;} if(p[0]==='compare'){ if(!p[1]) return `${site.primaryKeyword} Comparison Hub`; const [a,b]=p[1].split('-vs-').map(appBySlug); return `${a?.name} vs ${b?.name}: Best for Shopify?`;} if(p[0]==='for'){ if(!p[1]) return `${site.primaryKeyword} by Shopify Store Type`; const s=SEGMENTS.find(x=>x.slug===p[1]); return `Best ${site.primaryKeyword} for ${s?.name || 'Shopify Stores'}`;} if(p[0]==='use-cases'){ if(!p[1]) return `${site.primaryKeyword} Use Cases`; const u=USE_CASES.find(x=>x.slug===p[1]); return `Best ${site.primaryKeyword} for ${u?.name || 'Shopify Growth'}`;} if(p[0]==='alternatives'){ const a=appBySlug((p[1]||'').replace('-alternative','')); return `Best ${a?.name || 'App'} Alternatives for Shopify`;} if(p[0]==='guides'){ if(!p[1]) return `${site.primaryKeyword} Guides and Playbooks`; const gt: Record<string,string> = {'campaign-restraint':'Campaign restraint for SMS marketing','consent':'SMS consent for marketing campaigns','deliverability':'Shopify SMS apps for better deliverability','email-sms-coordination':'Email and SMS campaign coordination','list-growth':'SMS list growth for campaign marketers','offer-discipline':'Offer discipline for SMS campaigns','pricing':'SMS campaign pricing and ROI','quiet-hours':'Quiet hours for campaign sends','segment-by-value':'Segment by value for SMS marketing','tcpa':'TCPA basics for SMS campaign marketers'}; return gt[p[1]] || `${site.primaryKeyword} Guide`;} return `Best ${site.primaryKeyword}`; }
export function description(site:SiteProfile,path:string){ return `${pageTitle(site,path)}. Shopify campaign planning: compare workflow requirements, audience permissions, operating costs and measurement.`; }

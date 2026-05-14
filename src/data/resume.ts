import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  profile: {
    name: "Chris Newton",
    tagline: "Demand Generation & Growth Marketing Leader",
    avatar: "/images/profile.jpg",
    email: "chris@figdigitalmarketing.com",
    website: "christophernewton.com",
    linkedin: "cnewton25",
    github: "chrisrnewton",
    twitter: "ChrisRNewton",
  },

  summary: {
    title: "Summary",
    content: [
      "Data-driven Demand Generation & Growth Marketing leader with 15+ years of B2B tech/SaaS experience at startups and scaleups",
      "Proven record of driving significant growth through data-driven strategies, SEO, and PLG",
      "Expert in SEO audits, keyword research, competitive research, and technical SEO",
      "Strong programming skills: HTML, CSS, Ruby/Rails, JavaScript, Python, React",
      "Proficient in analytics tools: Google Analytics, Heap, Fullstory, Tableau, Looker, SQL",
      "Extensive CRM & ABM experience: Salesforce, HubSpot, Marketo, 6sense, Apollo",
    ],
  },

  experiences: [
    {
      id: "lytical",
      role: "Founder",
      company: "Lytical",
      location: "Remote",
      startDate: "Feb 2025",
      endDate: "Present",
      current: true,
      description: "Privacy-first web analytics SaaS with an embedded AI assistant.",
      featured: true,
      details: [
        "Built a privacy-first analytics SaaS from scratch on Rails, Postgres, and Heroku",
        "Shipped Quincy, an embedded AI assistant for natural-language analytics queries, built on Claude and other LLMs",
        "Launched on the ChatGPT app store and HubSpot app marketplace",
        "Built 10+ native integrations across HubSpot, Shopify, Google Ads, Search Console, and Meta Ads",
      ],
    },
    {
      id: "skedda",
      role: "Director of Growth Marketing",
      company: "Skedda",
      location: "Boston, MA (Hybrid)",
      startDate: "Jan 2024",
      endDate: "Jan 2025",
      current: false,
      description: "Workspace scheduling and booking platform for hybrid teams.",
      featured: true,
      details: [
        "6,000+ free product signups in six months through an end-to-end PLG program",
        "20% YoY reduction in CAC through channel optimization and funnel CRO",
        "Launched Skedda's first interactive lead-gen tool (hybrid-work grader): 50+ leads in month one",
        "Built competitive alternative pages with embedded cost-savings calculator: 5+ new customers and $1K+ MRR in 90 days",
      ],
    },
    {
      id: "ketch",
      role: "Head of Demand Generation",
      company: "Ketch",
      location: "Remote",
      startDate: "Oct 2021",
      endDate: "Oct 2023",
      current: false,
      description: "Privacy SaaS platform for designing and operating global privacy programs.",
      featured: true,
      details: [
        "4x demos, 20x free signups, 10x MQLs YoY through integrated demand programs",
        "$10M+ in qualified pipeline and $3M+ in marketing-sourced closed-won revenue on a $2M annual budget",
        "60% reduction in CPL, 75% reduction in cost per opportunity",
        "HubSpot admin; led HubSpot and Salesforce integration including lead routing, lifecycle stages, and bidirectional sync",
      ],
    },
    {
      id: "teikametrics",
      role: "Senior Marketing Manager",
      company: "Teikametrics",
      location: "Boston, MA",
      startDate: "Nov 2020",
      endDate: "Jun 2021",
      current: false,
      description: "Amazon and Walmart advertising optimization platform.",
      details: [
        "90% YoY growth in MQLs and SQLs across paid, organic, and lifecycle channels",
        "Redesigned HubSpot lead nurture flows, lifting lead-to-MQL and MQL-to-SQL conversion",
        "Launched first marketing site chatbot, lifting lead gen and engagement 30%",
        "Built lead scoring model and weekly CEO-level reporting dashboards",
      ],
    },
    {
      id: "klaviyo",
      role: "Founding Member of the Marketing Team",
      company: "Klaviyo",
      location: "Boston, MA",
      startDate: "Dec 2018",
      endDate: "Nov 2020",
      current: false,
      description: "Joined pre-Series B as the founding marketing hire. Marketing automation platform for SMS and email.",
      details: [
        "Founding member of the marketing team pre-Series B",
        "110% YoY growth in organic search traffic; 105% YoY growth in organic-sourced MQLs",
        "$3.25M+ in incremental annual revenue from organic search (159% YoY closed-won MRR growth)",
        "Implemented Conductor Searchlight as the company's enterprise SEO platform through Klaviyo's scale toward IPO",
      ],
    },
    {
      id: "hubspot",
      role: "Inbound Consultant L2, Premier Services",
      company: "HubSpot",
      location: "Cambridge, MA",
      startDate: "Sep 2016",
      endDate: "Dec 2018",
      current: false,
      description: "Inbound marketing and sales software platform.",
      details: [
        "Managed a portfolio of 50+ enterprise Premier Services accounts",
        "95% client retention; 120% average net dollar retention through upsells into additional Hubs and seat expansion",
        "HubSpot and Salesforce integrations including bidirectional sync, custom field mapping, and pipeline reporting",
      ],
    },
    {
      id: "dealer",
      role: "Senior Digital Advisor",
      company: "Dealer.com / Cox Automotive",
      location: "Burlington, VT",
      startDate: "Jan 2013",
      endDate: "Sep 2016",
      current: false,
      description: "Website, digital marketing, and CRM software for the automotive industry.",
      details: [
        "Managed $250K+ in monthly recurring ad spend across paid search, display, paid social, and retargeting for automotive dealership clients",
        "3% MoM portfolio growth through expansion, upsells, and retention",
        "Promoted to Senior based on portfolio performance and client retention",
      ],
    },
  ],

  education: [
    {
      degree: "MBA",
      institution: "Champlain College",
      startDate: "2013",
      endDate: "2016",
    },
    {
      degree: "BS in Business, Marketing Focus",
      institution: "Champlain College",
      startDate: "2005",
      endDate: "2009",
    },
    {
      degree: "JavaScript Development Certificate",
      institution: "General Assembly",
      startDate: "Mar 2019",
      endDate: "Jun 2019",
    },
  ],

  skills: [
    // Marketing
    { name: "SEO & Technical SEO", level: 100, category: "marketing" },
    { name: "Demand Generation", level: 100, category: "marketing" },
    { name: "Product-Led Growth (PLG)", level: 95, category: "marketing" },
    { name: "Paid Ads (Google, Meta, LinkedIn)", level: 95, category: "marketing" },
    { name: "A/B Testing & CRO", level: 100, category: "marketing" },
    // Platforms
    { name: "HubSpot", level: 100, category: "platforms" },
    { name: "Salesforce", level: 95, category: "platforms" },
    { name: "Google Analytics & Heap", level: 100, category: "platforms" },
    { name: "Tableau & Looker", level: 85, category: "platforms" },
    // Technical
    { name: "HTML, CSS & JavaScript", level: 90, category: "technical" },
    { name: "Ruby on Rails", level: 80, category: "technical" },
    { name: "Python & SQL", level: 70, category: "technical" },
    { name: "React", level: 65, category: "technical" },
  ],

  tools: [
    // CRM & Marketing Automation
    {
      id: "hubspot",
      name: "HubSpot",
      url: "https://www.hubspot.com",
      description: "Full platform for marketing, sales, and CRM. Served as HubSpot admin at multiple companies.",
    },
    {
      id: "salesforce",
      name: "Salesforce",
      url: "https://www.salesforce.com",
      description: "Enterprise CRM platform. Integrated with HubSpot and built custom reporting dashboards.",
    },
    {
      id: "marketo",
      name: "Marketo",
      url: "https://www.marketo.com",
      description: "Enterprise marketing automation platform for lead management and campaign orchestration.",
    },
    {
      id: "pardot",
      name: "Pardot",
      url: "https://www.salesforce.com/products/marketing-cloud/marketing-automation/",
      description: "B2B marketing automation by Salesforce for email marketing and lead nurturing.",
    },
    // ABM & Sales Intelligence
    {
      id: "6sense",
      name: "6sense",
      url: "https://www.6sense.com",
      description: "ABM platform for identifying and targeting in-market accounts.",
    },
    {
      id: "zoominfo",
      name: "ZoomInfo",
      url: "https://www.zoominfo.com",
      description: "B2B contact database and sales intelligence platform for prospecting.",
    },
    {
      id: "clearbit",
      name: "Clearbit",
      url: "https://www.clearbit.com",
      description: "Data enrichment platform for lead scoring and personalization.",
    },
    {
      id: "apollo",
      name: "Apollo.io",
      url: "https://www.apollo.io",
      description: "Sales intelligence and engagement platform for outbound prospecting.",
    },
    {
      id: "outreach",
      name: "Outreach",
      url: "https://www.outreach.io",
      description: "Sales engagement platform for automating and optimizing outbound sequences.",
    },
    // SEO & Advertising
    {
      id: "conductor",
      name: "Conductor Searchlight",
      url: "https://www.conductor.com",
      description: "Enterprise SEO platform for keyword research, competitive analysis, and content optimization.",
    },
    {
      id: "google-ads",
      name: "Google Ads",
      url: "https://ads.google.com",
      description: "Managed millions in ad spend across search, display, and retargeting campaigns.",
    },
    // Analytics & BI
    {
      id: "google-analytics",
      name: "Google Analytics",
      url: "https://analytics.google.com",
      description: "Web analytics platform for tracking traffic, conversions, and user behavior.",
    },
    {
      id: "heap",
      name: "Heap Analytics",
      url: "https://www.heap.io",
      description: "Product analytics platform for tracking user behavior and conversion funnels.",
    },
    {
      id: "fullstory",
      name: "Fullstory",
      url: "https://www.fullstory.com",
      description: "Digital experience analytics with session replay and heatmaps.",
    },
    {
      id: "tableau",
      name: "Tableau",
      url: "https://www.tableau.com",
      description: "Business intelligence platform for data visualization and reporting.",
    },
    {
      id: "looker",
      name: "Looker",
      url: "https://www.looker.com",
      description: "BI and analytics platform for exploring and sharing data insights.",
    },
    {
      id: "google-data-studio",
      name: "Google Data Studio",
      url: "https://datastudio.google.com",
      description: "Free dashboarding tool for creating interactive marketing reports.",
    },
    // Data Warehouses
    {
      id: "snowflake",
      name: "Snowflake",
      url: "https://www.snowflake.com",
      description: "Cloud data warehouse for storing and querying large datasets.",
    },
    {
      id: "redshift",
      name: "Amazon Redshift",
      url: "https://aws.amazon.com/redshift/",
      description: "AWS data warehouse for analytics and business intelligence workloads.",
    },
    // CMS Platforms
    {
      id: "wordpress",
      name: "WordPress",
      url: "https://www.wordpress.org",
      description: "Popular CMS for building and managing marketing websites and blogs.",
    },
    {
      id: "webflow",
      name: "Webflow",
      url: "https://www.webflow.com",
      description: "Visual web development platform for building marketing sites without code.",
    },
    {
      id: "shopify",
      name: "Shopify",
      url: "https://www.shopify.com",
      description: "E-commerce platform for building and managing online stores.",
    },
    {
      id: "squarespace",
      name: "Squarespace",
      url: "https://www.squarespace.com",
      description: "Website builder for creating professional marketing sites.",
    },
  ],

  certifications: [
    {
      name: "JavaScript Development Certificate",
      issuer: "General Assembly",
      date: "June 2019",
      url: "https://generalassemb.ly/education/javascript-development",
    },
    {
      name: "Google Ads Search Certification",
      issuer: "Google",
      url: "https://skillshop.exceedlms.com/student/award/43341677",
    },
    {
      name: "Google Analytics Individual Qualification",
      issuer: "Google",
      url: "https://skillshop.exceedlms.com/student/award/43340096",
    },
    {
      name: "HubSpot Inbound Certification",
      issuer: "HubSpot",
    },
  ],

  interests: ["Traveling", "Reading", "Cooking", "Golfing"],
};

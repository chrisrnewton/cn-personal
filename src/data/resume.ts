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
      "Data-driven Demand Generation & Growth Marketing leader with 10+ years of B2B tech/SaaS experience at startups and scaleups",
      "Proven record of driving significant growth through data-driven strategies, SEO, and PLG",
      "Expert in SEO audits, keyword research, competitive research, and technical SEO",
      "Strong programming skills: HTML, CSS, Ruby/Rails, JavaScript, Python, React",
      "Proficient in analytics tools: Google Analytics, Heap, Fullstory, Tableau, Looker, SQL",
      "Extensive CRM & ABM experience: Salesforce, HubSpot, Marketo, 6sense, Apollo",
    ],
  },

  experiences: [
    {
      id: "freelance",
      role: "Freelance Digital Marketing Consultant",
      company: "Self-Employed",
      location: "Remote",
      startDate: "May 2009",
      endDate: "Present",
      current: true,
      description: "Working with dozens of clients on improving their digital marketing performance.",
      details: [
        "Work with dozens of clients on improving their ads (Google, Meta, LinkedIn, Reddit, and more), websites, organic search visibility and rankings",
        "Conduct SEO audits and provide recommendations to help grow organic search traffic",
        "Implement strategic content campaigns and optimize sites to boost organic rankings",
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
      description: "Skedda is a workspace scheduling and booking platform helping organizations optimize their hybrid workplace.",
      details: [
        "Spearheaded Skedda product-led growth program to 6,000+ signups in first 6 months",
        "Managed all SEO, PPC, Meta & LinkedIn digital advertising, sponsorships, and social channels, decreasing CAC by 20% YoY",
        "Launched first ever hybrid-work grader interactive tool generating 50+ new leads in first month",
        "Built new competitive alternative pages with interactive cost savings calculator, leading to 5+ new customers & $1000+ in MRR in first 3 months",
        "Implemented an always-on A/B testing function, increasing page-level conversion rates by 5-10%",
        "Setup HubSpot & Heap analytics and reporting, providing better visibility for data-driven decisions",
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
      description: "Ketch is a privacy SaaS platform allowing customers to design and implement robust privacy programs and comply with privacy regulations globally.",
      details: [
        "Managed agency relationships, freelancers, and RevOps intern",
        "Led weekly marketing metrics meetings and pipe council meetings",
        "Quadrupled inbound demo requests YoY, 20x Ketch free signups YoY, increased MQL's by 10x YoY",
        "Managed $2m+ budget across all paid advertising, organic search, and demand-gen campaigns, generating $10m+ in pipeline and $3m+ in marketing sourced closed-won deals",
        "Oversaw revenue operations for the company, working closely with sales on operational needs",
        "Built reporting and KPIs for all marketing programs, serve as marketing ops and HubSpot admin",
        "Integrated HubSpot with Salesforce, setting up new processes, reporting, and pipeline management",
        "Trained sales and BDR team on HubSpot and Salesforce best practices",
        "Established marketing programs in EMEA and APAC",
        "Optimized and maximized ad spend, lowered CPL by 60% and Cost-per-Opportunity by 75%",
      ],
    },
    {
      id: "teikametrics",
      role: "Senior Manager, Demand Generation",
      company: "Teikametrics",
      location: "Boston, MA",
      startDate: "Nov 2020",
      endDate: "Jun 2021",
      current: false,
      description: "Teikametrics is an Amazon & Walmart advertising optimization platform, allowing brands to grow faster with automated campaign creation.",
      details: [
        "Achieved a 90% YoY growth in MQLs and SQLs",
        "Revised nurture flows, increasing conversion rates from Lead -> MQL and MQL -> SQL",
        "Successfully implemented the company's chatbot tool, improving lead gen and engagement by 30%",
        "Managed agency relationships and freelancers",
        "Served as HubSpot admin for the company, creating dashboards and providing weekly reports to CEO",
        "Developed robust lead scoring process to enable BDRs to focus on quality leads",
      ],
    },
    {
      id: "klaviyo",
      role: "Inbound Marketing Manager",
      company: "Klaviyo",
      location: "Boston, MA",
      startDate: "Dec 2018",
      endDate: "Nov 2020",
      current: false,
      description: "Klaviyo is a marketing automation platform allowing customers to send highly targeted and personalized communication via SMS and email.",
      details: [
        "Founding member of marketing team, responsible for organic product-led growth",
        "Managed all SEO and CRO campaigns across Klaviyo's marketing website",
        "Authored 15 blog posts to drive organic nonbrand search volume, 5,000+ organic pageviews a month",
        "Increased organic traffic by 110% YoY and organic marketing qualified leads by 105% YoY",
        "Increased closed-won MRR from organic search by 159.21% YoY ($3,254,821 increase)",
        "Implemented new Enterprise SEO tool, Conductor Searchlight, into daily workflow of marketing team",
        "Conducted full on-page, off-page, and technical SEO audit, improving page speed by 25%",
        "Launched website A/B tests, improving overall site conversion rate by 1.3% YoY",
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
      description: "HubSpot is an Inbound Marketing and Sales software platform, offering tools for companies to grow their businesses.",
      details: [
        "Managed 50+ enterprise level premier services accounts, took lead on projects across consulting team",
        "Grew net dollar retention to average of 120% for client portfolio & 95.55% retention rates",
        "Maintained consistently high Premier services NPS scores",
      ],
    },
    {
      id: "dealer",
      role: "Senior Digital Advisor",
      company: "Dealer.com",
      location: "Burlington, VT",
      startDate: "Jan 2013",
      endDate: "Sep 2016",
      current: false,
      description: "Dealer.com is a provider of website, digital marketing, and CRM software to the automotive industry.",
      details: [
        "Managed over $250,000 in monthly recurring ad spend across paid search, display, social and retargeting channels",
        "Grew advertising portfolio by 3% monthly",
        "Advised clients on digital marketing best practices, improved performance via proactive recommendations",
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

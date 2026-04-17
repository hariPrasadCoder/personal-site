import Arrow from "@/components/Arrow";
import Image from "next/image";

const roles = [
  {
    company: "Flax",
    role: "Founder",
    period: "Mar 2026 – Present",
    location: "London, UK",
    type: "Startup",
    description: "Building an autonomous AI chief-of-staff. Get a sneak peek at joinflax.com.",
    href: "https://joinflax.com",
    logo: "/images/logos/flax.png",
    badge: "Now",
    badgeActive: true,
  },
  {
    company: "Antler",
    role: "Entrepreneur in Residence",
    period: "Mar 2026 – Present",
    location: "London, UK",
    type: "VC Programme",
    description: "One of 80 selected from 5,000+ applicants. Less than 2% acceptance rate.",
    href: "https://antler.co",
    logo: "/images/logos/antler.png",
    badge: "Now",
    badgeActive: true,
  },
  {
    company: "Saturn",
    role: "Senior AI Engineer",
    period: "Oct 2025 – Mar 2026 · 6 months",
    location: "London, UK",
    type: "YC S24 · Series A · Fintech",
    description: "Built the flagship AI agent enabling financial advisors to query client data and compliance docs in plain English. Cut research time from 2+ hours to under 2 minutes. ~95% accuracy on financial queries.",
    href: "#",
    logo: "/images/logos/saturn.png",
    badge: "YC S24",
    badgeActive: false,
  },
  {
    company: "Take-Two Interactive",
    role: "Data Scientist",
    period: "Aug 2022 – Oct 2025 · 3 years 3 months",
    location: "New York, USA",
    type: "Public · $4B Gaming",
    description: "Built ML and AI systems across sales, marketing, finance, and audit. Agentic AI RAG for board meeting analytics, ML pipeline replacing 4h/day of manual work, financial audit dashboard unifying 5 data sources, reduced model deployment time by 80%.",
    href: "#",
    logo: "/images/logos/t2.webp",
    badge: "3 yrs",
    badgeActive: false,
  },
  {
    company: "Take-Two Interactive",
    role: "Data Science Intern",
    period: "May 2022 – Aug 2022 · 4 months",
    location: "New York, USA",
    type: "Internship",
    description: "Deployed price elasticity model outputs to production. Competitive analysis on 72 companies via Snowflake, SQL & Tableau. Optimised sales-forecasting model with ARIMA. 33% performance improvement.",
    href: "#",
    logo: "/images/logos/t2.webp",
    badge: "Intern",
    badgeActive: false,
  },
  {
    company: "JPMorganChase",
    role: "Data Scientist (Capstone)",
    period: "Sep 2022 – Dec 2022 · 4 months",
    location: "New York, USA",
    type: "Columbia Capstone",
    description: "Generated 1,024 NICFI satellite images of Kigali for land cover analysis. Built FCN semantic segmentation models classifying Tree Canopy, Buildings, and Water. 92% accuracy.",
    href: "#",
    logo: "/images/logos/jpmorgan.png",
    badge: "Capstone",
    badgeActive: false,
  },
  {
    company: "ask2.ai",
    role: "Financial Data Scientist Intern",
    period: "Jan 2022 – May 2022 · 5 months",
    location: "New York, USA",
    type: "Startup · Internship",
    description: "Forecasted future returns and volatility using 650-dimensional macroeconomic time-series data. Applied rolling window PCA and built predictive models using LSTM Neural Networks.",
    href: "#",
    logo: "/images/logos/ask2ai.png",
    badge: "Intern",
    badgeActive: false,
  },
  {
    company: "goTTR",
    role: "Founding Member & Data Engineer",
    period: "Jul 2021 – Dec 2021 · 6 months",
    location: "New York, USA",
    type: "Startup",
    description: "Regularised data-scraping and data-modelling for a 100 GB dataset. Reduced 4+ hours of manual work to seconds. Led a team of 5 to migrate data management to GCP and built an email-alert system that saved $7,000/month.",
    href: "#",
    logo: null,
    badge: "Founding",
    badgeActive: false,
  },
];

const education = [
  {
    school: "Columbia University in the City of New York",
    degree: "Master's degree, Data Science",
    period: "2021 – 2022",
    location: "New York, USA",
    note: "Ivy League · $88K investment · paid off within months of graduating",
    logo: "/images/logos/columbia.png",
    initials: "CU",
  },
  {
    school: "Kumaraguru College of Technology",
    degree: "B.E., Mechanical Engineering",
    period: "2017 – 2021",
    location: "Coimbatore, India",
    note: "Top 1% of class · Meritorious scholarship (3×)",
    logo: "/images/logos/kct.png",
    initials: "KCT",
  },
];

const mainRoles = roles.slice(0, 4);
const earlyRoles = roles.slice(4);

function RoleCard({ r }: { r: typeof roles[0] }) {
  return (
    <div className="card overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Logo panel */}
        <div className="col-span-1 bg-[#fafaf9] border-b md:border-b-0 md:border-r border-[#f0f0ed] p-5 flex flex-row md:flex-col items-center md:justify-center justify-between gap-3 md:min-h-[130px]">
          {r.logo ? (
            <div className="flex items-center justify-center w-full md:w-auto md:h-8 h-7">
              <Image
                src={r.logo}
                alt={r.company}
                width={80}
                height={32}
                className="max-h-7 w-auto object-contain"
              />
            </div>
          ) : (
            <span className="text-sm font-bold text-[#ccc]">{r.company.slice(0, 2).toUpperCase()}</span>
          )}
          <span className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
            r.badgeActive
              ? "bg-[#473ECE] text-white"
              : "bg-[#ebebea] text-[#999]"
          }`}>
            {r.badge}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-1 md:col-span-4 p-5 md:p-7">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
            <div>
              <h2 className="text-lg font-bold">{r.company}</h2>
              <p className="text-[#473ECE] text-sm font-semibold mt-0.5">{r.role}</p>
            </div>
            <div className="sm:text-right shrink-0 sm:ml-4">
              <p className="text-sm text-[#999]">{r.period}</p>
              <p className="text-xs text-[#bbb] mt-0.5">{r.location}</p>
            </div>
          </div>
          <p className="text-sm text-[#666] leading-relaxed mt-3">{r.description}</p>
          {r.href !== "#" && (
            <a href={r.href} target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#473ECE] hover:text-[#3830b0] font-semibold transition-colors">
              Visit <Arrow size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Career() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Career</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">experience.</h1>
        <p className="text-[#999] mt-3 text-[15px]">From Coimbatore to Columbia to YC to Antler.</p>
      </div>

      <div className="space-y-3">
        {mainRoles.map((r) => <RoleCard key={`${r.company}-${r.role}`} r={r} />)}
      </div>

      <div className="mt-8 mb-3 flex items-center gap-3">
        <p className="text-[10px] text-[#999] uppercase tracking-widest font-semibold shrink-0">Early Career</p>
        <div className="flex-1 h-px bg-[#e8e8e5]" />
      </div>

      <div className="space-y-3">
        {earlyRoles.map((r) => <RoleCard key={`${r.company}-${r.role}`} r={r} />)}
      </div>

      {/* Education */}
      <div className="mt-8 mb-3 flex items-center gap-3">
        <p className="text-[10px] text-[#999] uppercase tracking-widest font-semibold shrink-0">Education</p>
        <div className="flex-1 h-px bg-[#e8e8e5]" />
      </div>

      <div className="card-flat overflow-hidden">
        {education.map((e, i) => (
          <div key={e.school}
            className={`px-6 py-5 flex items-center gap-5 ${i !== education.length - 1 ? "border-b border-[#f0f0ed]" : ""}`}>
            <div className="w-12 h-12 rounded-xl bg-[#fafaf9] border border-[#f0f0ed] flex items-center justify-center shrink-0 p-1.5">
              <Image
                src={e.logo}
                alt={e.school}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <p className="text-sm font-bold">{e.school}</p>
                  <p className="text-sm text-[#473ECE] font-semibold mt-0.5">{e.degree}</p>
                </div>
                <div className="sm:text-right shrink-0 sm:ml-4">
                  <p className="text-xs text-[#999]">{e.period}</p>
                  <p className="text-xs text-[#bbb] mt-0.5">{e.location}</p>
                </div>
              </div>
              <p className="text-xs text-[#888] mt-1.5 italic">{e.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

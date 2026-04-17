const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const projects = [
  {
    name: "Flax",
    role: "Founder",
    status: "active",
    tagline: "An autonomous AI chief-of-staff that calls you with what matters.",
    description: "Flax analyzes your inbox and calendar, then delivers prioritized briefings via scheduled voice calls, so you spend time on decisions, not triage.",
    href: "https://joinflax.com",
    folder: "flax",
  },
  {
    name: "MyRealProduct",
    role: "Founder · Instructor",
    status: "active",
    tagline: "Where engineers stop reading tutorials and start shipping products.",
    description: "A 4-week cohort teaching AI engineers to build things people actually use: LLMs, RAG, agents, deployment, and getting users. 900+ learners.",
    href: "https://myrealproduct.com",
    folder: "myrealproduct",
  },
  {
    name: "Saturn · YC S24",
    role: "Senior AI Engineer",
    status: "past",
    tagline: "Cut advisor research time from 2+ hours to under 2 minutes.",
    description: "Built the flagship AI agent at a $70M B2B fintech, letting financial advisors query client data and compliance docs in plain English. Shipped in 4 weeks, ~95% accuracy.",
    href: "#",
    folder: "saturn",
  },
  {
    name: "JotterWolf",
    role: "Co-Founder & CTO",
    status: "past",
    tagline: "Job search as a sales pipeline. Columbia Startup Finalist.",
    description: "A productivity CRM that gave job seekers the same tracking tools a sales team uses. 2,000+ users, 50K+ monthly interactions, Top 5 at Columbia Startup Challenge 2024.",
    href: "#",
    folder: "jotterwolf",
  },
];

export default function Work() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">work.</h1>
        <p className="text-[#888884] mt-2">Real products. Real users. No toy projects.</p>
      </div>

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.name} className="bg-white border border-[#e5e5e3] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3">
              {/* Screenshot */}
              <div className="col-span-1 aspect-[4/3] bg-[#f5f5f3] border-r border-[#e5e5e3] flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-xs text-[#ccc]">public/images/projects/{p.folder}/</p>
                </div>
              </div>

              {/* Content */}
              <div className="col-span-2 p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {p.status === "active" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#473ECE] shrink-0" />
                    )}
                    <span className="text-xs text-[#888884]">{p.role}</span>
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    className="text-[#ccc] hover:text-[#473ECE] transition-colors">
                    <Arrow />
                  </a>
                </div>

                <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
                <p className="text-sm font-medium text-[#473ECE] mb-3">{p.tagline}</p>
                <p className="text-sm text-[#666] leading-relaxed">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experience strip */}
      <div className="mt-3 bg-white border border-[#e5e5e3] rounded-2xl p-6">
        <p className="text-xs text-[#888884] uppercase tracking-wider mb-4">Experience</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { org: "Take-Two Interactive", role: "Data Scientist", period: "2022 – 2025" },
            { org: "Columbia University", role: "M.S. Data Science", period: "2022" },
            { org: "JPMorgan Chase", role: "Data Science", period: "Earlier" },
          ].map((e) => (
            <div key={e.org} className="border-l-2 border-[#473ECE]/20 pl-3">
              <p className="text-sm font-medium">{e.org}</p>
              <p className="text-xs text-[#888884] mt-0.5">{e.role}</p>
              <p className="text-xs text-[#ccc] mt-0.5">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

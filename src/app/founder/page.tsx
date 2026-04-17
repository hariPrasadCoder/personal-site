import Arrow from "@/components/Arrow";
import Image from "next/image";

const ventures = [
  {
    name: "Flax",
    tagline: "Autonomous AI chief-of-staff. Built for people with too many inputs.",
    description: "Flax analyzes your inbox and calendar, then delivers prioritized briefings via scheduled outbound voice calls, so you spend time on decisions, not on triage. Built at Antler London with co-founder Sunjana Ramana Chintala.",
    status: "Active",
    stats: [{ n: "Antler '26", l: "cohort" }, { n: "<2%", l: "acceptance rate" }],
    tech: ["LangGraph", "Gemini", "ElevenLabs", "Twilio", "Supabase", "Pinecone"],
    href: "https://joinflax.com",
    logo: "/images/logos/flax.png",
    gradient: "from-[#473ECE] to-[#7B75E8]",
  },
  {
    name: "MyRealProduct",
    tagline: "Where engineers stop reading tutorials and start shipping products.",
    description: "A 4-week cohort program that teaches AI engineers the full stack of building: LLMs, RAG, agents, deployment, and go-to-market. Because knowing the theory and shipping something real are completely different skills.",
    status: "Active",
    stats: [{ n: "900+", l: "community members" }, { n: "700+", l: "graduates" }],
    tech: ["Education", "LLMs", "RAG", "Agents", "GTM"],
    href: "https://myrealproduct.com",
    logo: "/images/logos/myrealproduct.jpg",
    gradient: "from-[#059669] to-[#34d399]",
  },
  {
    name: "JotterWolf",
    tagline: "Job search as a sales pipeline. Columbia Startup Challenge Finalist.",
    description: "A productivity CRM that gave job seekers the same tracking tools a sales team uses. Treated job hunting like a funnel: track, follow up, convert. 1,600+ active users, 23,000+ job applications tracked, Top 5 at Columbia Startup Challenge 2024.",
    status: "Past",
    stats: [{ n: "1,600+", l: "users" }, { n: "23K+", l: "applications tracked" }],
    tech: ["FastAPI", "AWS EC2", "RAG", "GPT-3.5"],
    href: "#",
    logo: "/images/logos/jotterwolf.png",
    gradient: "from-[#1a1a1a] to-[#444]",
  },
  {
    name: "HeyClono",
    tagline: "AI clones for creators. Your audience, 24/7.",
    description: "Let creators build an AI version of themselves, trained on their content and voice, to engage with their audience around the clock. Built on LLMs, RAG, and agent systems. Co-founded with Sunjana Ramana Chintala.",
    status: "Past",
    stats: [{ n: "2023", l: "built" }, { n: "Co-founded", l: "" }],
    tech: ["LLMs", "RAG", "Agents"],
    href: "#",
    logo: "/images/logos/heyclono.jpeg",
    gradient: "from-[#dc2626] to-[#f87171]",
  },
];

export default function Founder() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Entrepreneurship</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">built.</h1>
        <p className="text-[#999] mt-3 text-[15px]">Real products. Real users. No toy projects.</p>
      </div>

      <div className="space-y-3">
        {ventures.map((v) => (
          <div key={v.name} className="card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Gradient visual */}
              <div className={`col-span-1 bg-gradient-to-br ${v.gradient} min-h-[100px] md:min-h-[200px] flex md:flex-col flex-row items-center md:items-start justify-between p-5 md:p-6`}>
                <span className={`self-start px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  v.status === "Active" ? "bg-white/20 text-white" : "bg-black/20 text-white/70"
                }`}>
                  {v.status}
                </span>
                <div className="space-y-2 mt-auto">
                  {v.stats.map((s) => (
                    <div key={s.l}>
                      <p className="text-white font-bold text-lg leading-none">{s.n}</p>
                      <p className="text-white/60 text-xs">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="col-span-1 md:col-span-2 p-6 md:p-8 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {v.logo && (
                      <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-[#f0f0ed] bg-white flex items-center justify-center">
                        <Image src={v.logo} alt={v.name} width={36} height={36} className="w-7 h-7 object-contain" />
                      </div>
                    )}
                    <h2 className="font-serif text-2xl">{v.name}</h2>
                  </div>
                  {v.href !== "#" ? (
                    <a href={v.href} target="_blank" rel="noopener noreferrer"
                      className="text-[#999] hover:text-[#473ECE] transition-colors mt-1">
                      <Arrow />
                    </a>
                  ) : (
                    <div className="mt-1 text-[#ddd]"><Arrow /></div>
                  )}
                </div>
                <p className="text-[#473ECE] text-sm font-semibold mb-4">{v.tagline}</p>
                <p className="text-sm text-[#666] leading-[1.75] flex-1">{v.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {v.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

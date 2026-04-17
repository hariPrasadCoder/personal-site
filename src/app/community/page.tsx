import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Arrow";

const events = [
  {
    name: "The AI Innovators Summit",
    role: "Host & Organizer",
    date: "Dec 21, 2025",
    description: "LinkedIn Top Voices, TEDx speakers, and industry leaders on agents, LLMs, and software engineering.",
    href: "https://events.myrealproduct.com/summit",
    image: "/images/AI Innovators Summit.png",
  },
  {
    name: "The Immigrant Summit",
    role: "Host & Organizer",
    date: "Feb 7, 2026",
    description: "Employment, visas, finances, and professional advancement for international students and immigrants.",
    href: "https://events.myrealproduct.com/immigrant-summit",
    image: "/images/Immigrant Summit.png",
  },
  {
    name: "Future Founders Hackathon",
    role: "Co-host · London",
    date: "May 9, 2026",
    description: "Co-hosted with Founders Factory, sponsored by AWS. A hackathon for early-stage founders building with AI.",
    href: "https://lu.ma/user/hariprasad20",
    image: "/images/Future Founders Hackathon.png",
    color: null,
  },
];

export default function Community() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Community</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">building in public.</h1>
        <p className="text-[#999] mt-3 text-[15px]">Running a community, hosting events, and producing a podcast.</p>
      </div>

      {/* MyRealProduct + Podcast */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <a href="https://myrealproduct.com" target="_blank" rel="noopener noreferrer"
          className="col-span-1 md:col-span-2 card overflow-hidden block group">
          <div className="relative h-44 overflow-hidden">
            <Image
              src="/images/MyRealProduct.png"
              alt="MyRealProduct"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="p-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1 font-semibold">Community · Active</p>
              <h2 className="font-serif text-xl mb-1 group-hover:text-[#473ECE] transition-colors">MyRealProduct</h2>
              <p className="text-sm text-[#666] leading-relaxed">4-week cohort. LLMs, RAG, agents, deployment, GTM. 700+ graduates, 900+ community members.</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-2xl font-bold">900+</p>
              <p className="text-xs text-[#999]">members</p>
            </div>
          </div>
        </a>

        {/* Podcast */}
        <a href="https://myrealproduct.com/podcast" target="_blank" rel="noopener noreferrer"
          className="col-span-1 md:col-span-1 card overflow-hidden block group">
          <div className="relative h-44 overflow-hidden">
            <Image
              src="/images/Reality Show.png"
              alt="The Reality Show"
              fill
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1 font-semibold">Podcast Series</p>
            <p className="font-serif text-lg mb-1 group-hover:text-[#473ECE] transition-colors">The Reality Show</p>
            <p className="text-xs text-[#888] leading-relaxed">Real conversations with founders and engineers on what building AI actually looks like.</p>
            <p className="text-xs text-[#473ECE] font-semibold mt-3">Listen →</p>
          </div>
        </a>
      </div>

      {/* Events */}
      <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold px-1">Events</p>

      <div className="card-flat p-5 mb-3">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-4 font-semibold">Event impact: across both summits</p>
        <div className="flex items-center gap-8">
          {[
            { n: "1,555+", l: "people registered" },
            { n: "260+", l: "peak concurrent viewers" },
            { n: "1,675+", l: "recording views" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-2">
              <span className="text-xl font-bold">{s.n}</span>
              <span className="text-xs text-[#999]">{s.l}</span>
            </div>
          ))}
          <a href="https://lu.ma/user/hariprasad20" target="_blank" rel="noopener noreferrer"
            className="ml-auto text-xs text-[#473ECE] font-semibold hover:text-[#3830b0] transition-colors flex items-center gap-1">
            All events on Luma <Arrow size={11} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        {events.map((e) => (
          <a key={e.name} href={e.href} target="_blank" rel="noopener noreferrer"
            className="card overflow-hidden block group">
            {e.image ? (
              <div className="relative h-36 overflow-hidden bg-[#f5f4f0]">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ) : (
              <div className={`h-36 bg-gradient-to-br ${e.color} flex items-end px-5 pb-4`}>
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{e.date}</span>
              </div>
            )}
            <div className="p-5">
              <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1 font-semibold">{e.role} · {e.date}</p>
              <h3 className="font-serif text-lg mb-2 group-hover:text-[#473ECE] transition-colors">{e.name}</h3>
              <p className="text-xs text-[#888] leading-relaxed">{e.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Teaser → Content page */}
      <Link href="/content"
        className="card block p-6 flex items-center justify-between group hover:border-[#473ECE]/30">
        <div>
          <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1 font-semibold">Content</p>
          <p className="font-serif text-xl">LinkedIn · Substack · YouTube · Instagram · Towards Data Science</p>
          <p className="text-sm text-[#999] mt-1">50K+ followers · 10M+ impressions · 5 platforms</p>
        </div>
        <span className="text-[#999] group-hover:text-[#473ECE] transition-colors ml-6 shrink-0">
          <Arrow size={16} />
        </span>
      </Link>
    </div>
  );
}

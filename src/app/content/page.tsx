import Arrow from "@/components/Arrow";
import Image from "next/image";

const platforms = [
  {
    name: "LinkedIn",
    handle: "@hariprasad20",
    description: "Where I think out loud about AI, building products, careers, and the journey from India to London. Posts that have landed on Times Square, Fox News, and BBC.",
    stat1: { n: "50K+", l: "followers" },
    stat2: { n: "10M+", l: "impressions" },
    logo: "/images/logos/linkedin.webp",
    href: "https://linkedin.com/in/hariprasad20",
    featured: true,
  },
  {
    name: "Substack",
    handle: "Data & AI with Hari",
    description: "Weekly AI insights and practical tutorials. 85+ consecutive weeks, 2.2K+ subscribers. No fluff.",
    logo: "/images/logos/substack.png",
    href: "https://hariprasad00.substack.com/",
    featured: false,
  },
  {
    name: "Towards Data Science",
    handle: "hari-prasad.medium.com",
    description: "Published on Towards Data Science. 828K+ followers. Deep dives on AI, ML, and building real systems.",
    logo: "/images/logos/tds.jpeg",
    href: "https://hari-prasad.medium.com/",
    featured: false,
  },
  {
    name: "YouTube",
    handle: "@hari.prasad_",
    description: "AI tutorials, build-alongs, and walkthroughs. Watch me build real AI products from scratch.",
    logo: "/images/logos/youtube.png",
    href: "https://www.youtube.com/@hari.prasad_",
    featured: false,
  },
  {
    name: "Instagram",
    handle: "@hari.prasad_",
    description: "Behind the build: founder life, events, and what building actually looks like day to day.",
    logo: "/images/logos/instagram.png",
    href: "https://www.instagram.com/hari.prasad_/",
    featured: false,
  },
];

export default function Content() {
  const linkedin = platforms[0]!;
  const rest = platforms.slice(1);

  return (
    <div>
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Content</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">creating.</h1>
        <p className="text-[#999] mt-3 text-[15px]">Writing and creating for people who build with AI, across 5 platforms.</p>
      </div>

      {/* LinkedIn — featured large */}
      <a href={linkedin.href} target="_blank" rel="noopener noreferrer"
        className="card block mb-3 p-6 md:p-8 hover:border-[#0A66C2]/30 group">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shrink-0 overflow-hidden border border-[#f0f0ed]">
            <Image src={linkedin.logo} alt="LinkedIn" width={56} height={56} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1 font-semibold">Primary platform</p>
                <h2 className="font-serif text-2xl mb-0.5 group-hover:text-[#0A66C2] transition-colors">{linkedin.name}</h2>
                <p className="text-xs text-[#999]">{linkedin.handle}</p>
              </div>
              <div className="flex gap-6 sm:gap-8 shrink-0">
                {linkedin.stat1 && (
                  <div className="sm:text-right">
                    <p className="text-2xl font-bold">{linkedin.stat1.n}</p>
                    <p className="text-xs text-[#999]">{linkedin.stat1.l}</p>
                  </div>
                )}
                {linkedin.stat2 && (
                  <div className="sm:text-right">
                    <p className="text-2xl font-bold">{linkedin.stat2.n}</p>
                    <p className="text-xs text-[#999]">{linkedin.stat2.l}</p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-4">{linkedin.description}</p>
          </div>
        </div>
      </a>

      {/* Other platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {rest.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
            className="card p-6 flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-xl shrink-0 overflow-hidden border border-[#f0f0ed] bg-white flex items-center justify-center">
              <Image src={p.logo} alt={p.name} width={40} height={40} className="w-8 h-8 object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold text-sm group-hover:text-[#473ECE] transition-colors">{p.name}</p>
                <Arrow size={12} />
              </div>
              <p className="text-xs text-[#999] mb-2">{p.handle}</p>
              <p className="text-xs text-[#888] leading-relaxed">{p.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* TEDx talk */}
      <a href="https://www.youtube.com/watch?v=2sNFbypMQYw&t=2756s" target="_blank" rel="noopener noreferrer"
        className="card block p-6 md:p-7 hover:border-[#e62117]/30 group">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#f0f0ed] bg-white flex items-center justify-center">
              <Image src="/images/logos/tedx.png" alt="TEDx" width={40} height={20} className="w-8 object-contain" />
            </div>
            <div>
              <p className="text-[10px] text-[#999] uppercase tracking-widest mb-1 font-semibold">Talk · TEDx Binghamton</p>
              <h2 className="font-serif text-xl mb-1 group-hover:text-[#e62117] transition-colors">Being an entrepreneur at your full-time job</h2>
              <p className="text-sm text-[#999]">Watch the full talk on YouTube →</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

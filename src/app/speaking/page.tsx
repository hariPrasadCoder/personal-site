import Image from "next/image";

const talks = [
  {
    event: "TEDx Binghamton",
    topic: "Being an entrepreneur at your full-time job",
    type: "Talk",
    year: "2025",
    href: "https://www.youtube.com/watch?v=2sNFbypMQYw&t=2756s",
    featured: true,
    logo: "/images/logos/tedx.png",
    logoBg: "bg-[#e62117]",
    cta: "Watch talk →",
  },
  {
    event: "BBC News",
    topic: "Featured coverage · 495K+ views on YouTube",
    type: "Media",
    year: "2025",
    href: "https://youtu.be/Kz51pybDnKw",
    featured: true,
    logo: null,
    logoText: "BBC",
    logoBg: "bg-[#cc0000]",
    cta: "Watch coverage →",
  },
  {
    event: "Google · AICamp",
    topic: "AI content creation: making AI writing sound human. Hosted at Microsoft NYC, sponsored by Google.",
    type: "Talk",
    year: "Feb 2025",
    href: "#",
    featured: false,
    logo: "/images/logos/google.png",
  },
  {
    event: "NYC Women in ML & Data Science",
    topic: "Three-part AI workshop bootcamp",
    type: "Talk",
    year: "Sep 2025",
    href: "#",
    featured: false,
    logo: null,
  },
  {
    event: "The College of Westchester",
    topic: "Guest speaker",
    type: "Talk",
    year: "Aug 2025",
    href: "#",
    featured: false,
    logo: null,
  },
  {
    event: "BrowserStack",
    topic: "ML Model Testing & Validation: incorporating business context into model testing.",
    type: "Talk",
    year: "Oct 2024",
    href: "#",
    featured: false,
    logo: null,
  },
  {
    event: "UNITAR",
    topic: "Pathway to Prosperity: AI in careers. Selangor, Malaysia.",
    type: "Talk",
    year: "2025",
    href: "#",
    featured: false,
    logo: "/images/logos/unitar.jpg",
  },
  {
    event: "ElevenLabs · Quru AI",
    topic: "Technical judge, Voice AI Hackathon",
    type: "Judge",
    year: "Jul 2025",
    href: "#",
    featured: false,
    logo: null,
  },
  {
    event: "Globee Awards",
    topic: "Industry judge (twice)",
    type: "Judge",
    year: "2024 · 2025",
    href: "#",
    featured: false,
    logo: null,
  },
];

const press = [
  { outlet: "BBC News", detail: "495K+ YouTube views", href: "https://youtu.be/Kz51pybDnKw", logo: "/images/logos/bbc.png" },
  { outlet: "Times Square · HiCounselor", detail: "Featured on Times Square billboard", href: "https://www.linkedin.com/posts/hariprasad20_okay-let-me-be-honest-this-is-something-activity-7182830661106315264-UEkz", logo: null },
  { outlet: "The Quint", detail: "H-1B visa fee hike: Indian workers react", href: "https://www.thequint.com/news/world/h-1b-visa-fee-hike-indian-workers-employers-react", logo: null },
  { outlet: "Study International", detail: "Hunting for jobs in the US", href: "https://studyinternational.com/news/hunting-for-jobs-in-the-us-hari/", logo: null },
  { outlet: "India Abroad", detail: "YouTube feature", href: "https://youtu.be/SJlfXgyFrCk", logo: null },
  { outlet: "AP News · Fox · NBC · ABC", detail: "MyRealProduct press releases", href: "#", logo: null },
];

const typeColor: Record<string, string> = {
  Talk: "bg-[#473ECE]/10 text-[#473ECE]",
  Media: "bg-[#1a1a1a]/10 text-[#1a1a1a]",
  Judge: "bg-amber-50 text-amber-700",
  Host: "bg-emerald-50 text-emerald-700",
};

const featured = talks.filter((t) => t.featured);
const rest = talks.filter((t) => !t.featured);

export default function Speaking() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Speaking & Press</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">on stage.</h1>
        <p className="text-[#999] mt-3 text-[15px]">Talks, panels, media appearances, and press coverage.</p>
      </div>

      {/* Featured */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {featured.map((t) => (
          <a key={t.event} href={t.href} target="_blank" rel="noopener noreferrer"
            className="card overflow-hidden block group">
            <div className={`h-28 ${t.logoBg} flex items-center justify-center`}>
              {t.logo ? (
                <Image
                  src={t.logo}
                  alt={t.event}
                  width={120}
                  height={60}
                  className="max-h-10 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <span className="text-white font-black text-4xl tracking-tight">{(t as { logoText?: string }).logoText}</span>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs text-[#999] mb-1">{t.year} · {t.type}</p>
              <h3 className="font-serif text-xl mb-2 group-hover:text-[#473ECE] transition-colors">{t.event}</h3>
              <p className="text-sm text-[#888]">{t.topic}</p>
              <p className="text-xs text-[#473ECE] font-semibold mt-3">{t.cta}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Talks list */}
      <div className="card-flat overflow-hidden mb-3">
        {rest.map((t, i) => (
          <a key={t.event} href={t.href !== "#" ? t.href : (undefined as unknown as string)}
            target={t.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-5 py-4 ${i !== rest.length - 1 ? "border-b border-[#f0f0ed]" : ""} hover:bg-[#fafaf9] transition-colors`}>
            <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${typeColor[t.type]}`}>
              {t.type}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{t.event}</p>
              <p className="text-xs text-[#999] mt-0.5 truncate">{t.topic}</p>
            </div>
            <span className="text-xs text-[#bbb] shrink-0">{t.year}</span>
          </a>
        ))}
      </div>

      {/* Press & Media */}
      <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold px-1">Press & Media</p>
      <div className="card-flat overflow-hidden">
        {press.map((p, i) => (
          <a key={p.outlet}
            href={p.href !== "#" ? p.href : (undefined as unknown as string)}
            target={p.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-5 py-4 ${i !== press.length - 1 ? "border-b border-[#f0f0ed]" : ""} hover:bg-[#fafaf9] transition-colors group`}>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold group-hover:text-[#473ECE] transition-colors truncate">{p.outlet}</p>
              <p className="text-xs text-[#999] mt-0.5">{p.detail}</p>
            </div>
            {p.href !== "#" && (
              <span className="text-xs text-[#473ECE] font-semibold shrink-0">View →</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Arrow";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* Hero — 2 cols */}
      <div className="col-span-1 md:col-span-2 card p-7 md:p-9 flex flex-col">
        <p className="text-xs text-[#999] uppercase tracking-widest mb-6 font-medium">🇮🇳 India → 🇺🇸 New York → 🇬🇧 London</p>
        <h1 className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.15] tracking-tight mb-7">
          Hi, I&apos;m Hari. I&apos;m building{" "}
          <a href="https://joinflax.com" target="_blank" rel="noopener noreferrer"
            className="italic underline underline-offset-4 decoration-[#473ECE]/50 hover:decoration-[#473ECE] transition-all">
            Flax
          </a>
          .
        </h1>
        <div className="space-y-4 text-[15px] text-[#666] leading-[1.75]">
          <p>I build <strong className="text-[#1a1a1a] font-semibold">AI systems</strong> that work in <strong className="text-[#1a1a1a] font-semibold">production</strong>. Not demos, not side projects. Systems that stay in the ground.</p>
          <p>Senior AI Engineer at a <strong className="text-[#1a1a1a] font-semibold">YC-backed fintech</strong>. Data Scientist at <strong className="text-[#1a1a1a] font-semibold">Take-Two Interactive</strong>. Now a founder at <strong className="text-[#1a1a1a] font-semibold">Antler London</strong>, building an autonomous AI chief-of-staff that gives executives their time back.</p>
          <p>
            I also teach. <strong className="text-[#1a1a1a] font-semibold">900+ engineers</strong> have gone through{" "}
            <a href="https://myrealproduct.com" target="_blank" rel="noopener noreferrer"
              className="text-[#1a1a1a] font-semibold hover:text-[#473ECE] transition-colors">
              MyRealProduct
            </a>
            , learning to ship real AI, not read about it.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Link href="/founder"
            className="px-5 py-2.5 bg-[#473ECE] text-white text-sm font-semibold rounded-full hover:bg-[#3830b0] transition-colors shadow-[0_4px_14px_rgba(71,62,206,0.3)]">
            What I&apos;ve built
          </Link>
          <Link href="/career" className="text-sm font-medium text-[#999] hover:text-[#1a1a1a] transition-colors">
            Career →
          </Link>
        </div>
      </div>

      {/* Profile card */}
      <div className="card overflow-hidden">
        <div className="relative">
          <Image
            src="/images/profile/my_profile.png"
            alt="Hari Prasad Renganathan"
            width={400}
            height={400}
            className="w-full aspect-square object-cover object-top"
          />
          <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#1a1a1a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            Open to collabs
          </span>
        </div>
        <div className="p-4">
          <p className="font-semibold text-sm">Hari Prasad Renganathan</p>
          <p className="text-xs text-[#999] mt-0.5">Founder · Antler London · London, UK</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Columbia", "YC Engineer", "Take-Two"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Flax card */}
      <a href="https://joinflax.com" target="_blank" rel="noopener noreferrer" className="col-span-1 card overflow-hidden block group">
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#f0f0ed]">
          <span className="text-[10px] text-[#999] font-semibold uppercase tracking-widest">Founder · Active</span>
          <span className="text-[#ccc] group-hover:text-[#473ECE] transition-colors"><Arrow size={11} /></span>
        </div>
        <div className="p-5 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#f0f0ed]">
            <Image src="/images/logos/flax.png" alt="Flax" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-xl mb-1 group-hover:text-[#473ECE] transition-colors">Flax</h3>
            <p className="text-sm text-[#888] leading-relaxed">AI chief-of-staff that calls you with what matters.</p>
          </div>
        </div>
      </a>

      {/* Saturn card */}
      <div className="col-span-1 card overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#f0f0ed]">
          <span className="text-[10px] text-[#999] font-semibold uppercase tracking-widest">Engineer · YC S24</span>
          <span className="text-[#e0e0e0]"><Arrow size={11} /></span>
        </div>
        <div className="p-5 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-black flex items-center justify-center border border-[#f0f0ed]">
            <Image src="/images/logos/saturn.png" alt="Saturn" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-xl mb-1">Saturn</h3>
            <p className="text-sm text-[#888] leading-relaxed">Senior AI Engineer. YC S24 fintech. Cut advisor research time from 2h to 2 min.</p>
          </div>
        </div>
      </div>

      {/* Numbers card */}
      <div className="card p-5">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-4 font-semibold">Impact</p>
        <div className="space-y-4">
          {[
            { n: "50K+", l: "LinkedIn followers" },
            { n: "10M+", l: "content impressions" },
            { n: "900+", l: "students taught" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline justify-between">
              <span className="text-[22px] font-bold tracking-tight">{s.n}</span>
              <span className="text-xs text-[#999]">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MyRealProduct card */}
      <a href="https://myrealproduct.com" target="_blank" rel="noopener noreferrer" className="col-span-1 card overflow-hidden block group">
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#f0f0ed]">
          <span className="text-[10px] text-[#999] font-semibold uppercase tracking-widest">Community · Active</span>
          <span className="text-[#ccc] group-hover:text-[#473ECE] transition-colors"><Arrow size={11} /></span>
        </div>
        <div className="p-5 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#f0f0ed] bg-white">
            <Image src="/images/logos/myrealproduct.jpg" alt="MyRealProduct" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-xl mb-1 group-hover:text-[#473ECE] transition-colors">MyRealProduct</h3>
            <p className="text-sm text-[#888] leading-relaxed">900+ engineers shipping real AI.</p>
          </div>
        </div>
      </a>

      {/* UNITAR card */}
      <div className="col-span-1 card overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#f0f0ed]">
          <span className="text-[10px] text-[#999] font-semibold uppercase tracking-widest">United Nations · Active</span>
        </div>
        <div className="p-5 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#f0f0ed] bg-white flex items-center justify-center">
            <Image src="/images/logos/unitar.jpg" alt="UNITAR" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="font-serif text-xl mb-1">UNITAR</h3>
            <p className="text-sm text-[#888] leading-relaxed">Guest AI instructor for the UN. Taught AI to professionals in Malaysia.</p>
          </div>
        </div>
      </div>

      {/* Speaking strip */}
      <div className="col-span-1 card overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#f0f0ed]">
          <span className="text-[10px] text-[#999] font-semibold uppercase tracking-widest">Speaking & Press</span>
          <Link href="/speaking" className="text-[#ccc] hover:text-[#473ECE] transition-colors"><Arrow size={11} /></Link>
        </div>
        <div className="p-5">
          <p className="font-serif text-lg mb-3 leading-snug">TEDx · BBC · Google · Microsoft</p>
          <div className="flex flex-wrap gap-1.5">
            {["TEDx", "BBC News", "Google", "Microsoft"].map((v) => (
              <span key={v} className="tag">{v}</span>
            ))}
            <Link href="/speaking" className="accent-tag">+ more →</Link>
          </div>
        </div>
      </div>

      {/* Clicks / Photography — full width */}
      <Link href="/clicks" className="col-span-1 md:col-span-3 bg-[#1a1a1a] text-white rounded-[20px] overflow-hidden border border-[#333] group block">
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/10">
          <span className="text-[10px] text-white/40 font-semibold uppercase tracking-widest">Photography</span>
          <span className="text-white/30 group-hover:text-white/70 transition-colors"><Arrow size={11} /></span>
        </div>
        <div className="p-5 flex items-center justify-between">
          <p className="font-serif text-xl leading-snug">Shooting events, one frame at a time</p>
          <span className="inline-flex items-center gap-2 text-sm text-white/50 group-hover:text-white/80 transition-colors shrink-0 ml-6">
            View all photos <Arrow />
          </span>
        </div>
      </Link>

    </div>
  );
}

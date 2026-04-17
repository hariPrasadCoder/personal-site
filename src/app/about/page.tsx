import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-3 gap-3">

      {/* Main story */}
      <div className="col-span-2 card p-9">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">About</p>
        <h1 className="font-serif text-4xl tracking-tight mb-9">What I&apos;m about.</h1>

        <div className="space-y-9 text-[15px]">
          <div>
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Where I&apos;m from</p>
            <p className="text-[#555] leading-[1.8]">
              Coimbatore, Tamil Nadu. Mechanical Engineering degree. No CS background.
              English wasn&apos;t my first language. I sat in practice classes repeating the same sentences.
              Then I gave a TEDx talk.
            </p>
          </div>

          <div>
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">How I got here</p>
            <p className="text-[#555] leading-[1.8]">
              I took on $88,000 in debt to do a Master&apos;s in Data Science at Columbia. My relatives thought it
              was a terrible idea. My parents said:{" "}
              <span className="font-serif italic text-[#1a1a1a] text-lg">&ldquo;This is our all-in game. Do it right.&rdquo;</span>
            </p>
            <p className="text-[#555] leading-[1.8] mt-4">
              1,000+ job applications. Part-time jobs to afford food. Five months with no interviews.
              Then one offer. The loans were paid off within months.
            </p>
            <p className="text-[#555] leading-[1.8] mt-4">
              Three years at Take-Two. Then a YC fintech in London as Senior AI Engineer.
              Then the H1B lottery said no, three times. So I texted 10 YC startups,
              got four callbacks, and figured out the UK work visa takes three weeks.
            </p>
          </div>

          <div>
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Now</p>
            <p className="text-[#555] leading-[1.8]">
              At{" "}
              <a href="https://antler.co" target="_blank" rel="noopener noreferrer"
                className="text-[#1a1a1a] underline underline-offset-4 decoration-[#473ECE]/40 hover:decoration-[#473ECE] transition-all">
                Antler London
              </a>
              , one of 80 selected from 5,000 applicants. Building{" "}
              <a href="https://joinflax.com" target="_blank" rel="noopener noreferrer"
                className="text-[#1a1a1a] underline underline-offset-4 decoration-[#473ECE]/40 hover:decoration-[#473ECE] transition-all">
                Flax
              </a>{" "}
              with my co-founder Sunjana. And running{" "}
              <a href="https://myrealproduct.com" target="_blank" rel="noopener noreferrer"
                className="text-[#1a1a1a] underline underline-offset-4 decoration-[#473ECE]/40 hover:decoration-[#473ECE] transition-all">
                MyRealProduct
              </a>{" "}
              Because the gap between &ldquo;I know the theory&rdquo; and &ldquo;I shipped something people use&rdquo; is enormous.
            </p>
          </div>

          <div>
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">What I believe</p>
            <div className="space-y-2 text-[#555] leading-[1.8]">
              <p>Distribution beats building. A great product nobody finds is a hobby project.</p>
              <p>Titles limit you. Building doesn&apos;t.</p>
              <p>Sometimes rejection is just redirection. The H1B lottery sent me to London.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-span-1 flex flex-col gap-3">

        {/* Profile photo */}
        <div className="card-flat overflow-hidden rounded-[20px]">
          <Image
            src="/images/profile/my_profile.png"
            alt="Hari Prasad Renganathan"
            width={400}
            height={400}
            className="w-full object-cover object-top"
          />
        </div>

        {/* Education */}
        <div className="card-flat p-5">
          <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Education</p>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-bold">Columbia University</p>
              <p className="text-xs text-[#999] mt-0.5">M.S. Data Science · 2022</p>
              <p className="text-xs text-[#bbb]">New York, USA</p>
            </div>
            <div className="border-t border-[#f5f5f3] pt-3">
              <p className="text-sm font-bold">Kumaraguru College of Technology</p>
              <p className="text-xs text-[#999] mt-0.5">B.E. Mechanical Engineering</p>
              <p className="text-xs text-[#bbb]">Top 1% · India</p>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/hariprasad20" target="_blank" rel="noopener noreferrer"
          className="bg-[#0A66C2] text-white rounded-[20px] p-5 hover:opacity-90 transition-opacity">
          <p className="text-[10px] text-white/50 uppercase tracking-widest mb-2 font-semibold">LinkedIn</p>
          <p className="font-bold">@hariprasad20</p>
          <p className="text-sm text-white/70 mt-1">50K+ followers</p>
        </a>

        {/* Quick links */}
        <div className="card-flat p-5">
          <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Explore</p>
          <div className="space-y-2">
            {[
              { label: "Career timeline", href: "/career" },
              { label: "What I've built", href: "/founder" },
              { label: "Speaking", href: "/speaking" },
              { label: "Community & content", href: "/community" },
              { label: "Photography", href: "/clicks" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="flex justify-between items-center text-sm text-[#555] hover:text-[#473ECE] transition-colors">
                {l.label}
                <span className="text-[#ddd]">→</span>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

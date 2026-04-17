export default function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Contact</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">say hi.</h1>
        <p className="text-[#999] mt-3 text-[15px]">Building something? Want to collaborate? Just want to chat?</p>
      </div>

      <div className="space-y-3">

        <a href="mailto:hr2514@columbia.edu"
          className="card block p-7 group">
          <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Email</p>
          <p className="font-serif text-2xl group-hover:text-[#473ECE] transition-colors">hr2514@columbia.edu</p>
          <p className="text-sm text-[#999] mt-2">Best for work, collabs, and interesting ideas</p>
        </a>

        <a href="https://linkedin.com/in/hariprasad20" target="_blank" rel="noopener noreferrer"
          className="block bg-[#0A66C2] text-white rounded-[20px] p-7 hover:opacity-90 transition-opacity border border-transparent">
          <p className="text-[10px] text-white/50 uppercase tracking-widest mb-3 font-semibold">LinkedIn</p>
          <p className="font-serif text-2xl">linkedin.com/in/hariprasad20</p>
          <p className="text-sm text-white/70 mt-2">DMs are open · 50K+ followers</p>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="https://joinflax.com" target="_blank" rel="noopener noreferrer"
            className="card block p-6 group">
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-2 font-semibold">Current build</p>
            <p className="font-semibold group-hover:text-[#473ECE] transition-colors">joinflax.com</p>
            <p className="text-xs text-[#999] mt-1">AI chief-of-staff</p>
          </a>
          <a href="https://myrealproduct.com" target="_blank" rel="noopener noreferrer"
            className="card block p-6 group">
            <p className="text-[10px] text-[#999] uppercase tracking-widest mb-2 font-semibold">Community</p>
            <p className="font-semibold group-hover:text-[#473ECE] transition-colors">myrealproduct.com</p>
            <p className="text-xs text-[#999] mt-1">Learn to build real AI</p>
          </a>
        </div>

      </div>
    </div>
  );
}

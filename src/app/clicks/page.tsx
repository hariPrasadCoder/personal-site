import LazyImage from "@/components/LazyImage";

const BASE = "https://raw.githubusercontent.com/hariPrasadCoder/personal-site/main/public/images/photography";

const events = [
  {
    name: "2023 HPM Healthcare Conference",
    location: "Columbia University · New York",
    year: "2023",
    description: "Annual health policy and management conference at Columbia University. Portraits, panels, and the quiet moments between sessions.",
    photos: [
      "A7400972-1.jpg","A7400974-1.jpg","A7400982-1.jpg","A7400983-1.jpg",
      "A7400985-1.jpg","A7400995-1.jpg","A7401008-1.jpg","A7401016-1.jpg",
      "A7401020-1.jpg","A7401038-1.jpg","A7401039-1.jpg","A7401045-1.jpg",
      "A7401072-1.jpg","A7401080-1.jpg","A7401104.jpg","A7401126.jpg",
      "A7401140.jpg","A7401147.jpg","A7401154.jpg","A7401158.jpg",
      "A7401164.jpg","A7401181.jpg","A7401184.jpg","A7401186.jpg",
      "A7401204.jpg","A7401215.jpg","A7401251.jpg","A7401263.jpg",
      "A7401291.jpg","A7401301.jpg","A7401314.jpg","A7401320.jpg",
      "A7401369.jpg","A7401381.jpg","A7401383.jpg","A7401412.jpg",
      "A7401417.jpg","A7401421.jpg","A7401459.jpg","A7401469.jpg",
      "A7401486.jpg","A7401507.jpg","A7401509.jpg","A7401511.jpg",
      "A7401546.jpg",
    ],
    folder: "columbia-healthcare-conference-2023",
  },
  {
    name: "Graduation Pictures",
    location: "New York City",
    year: "2023",
    description: "Graduation day portraits. The cap, the gown, the moment it all became real.",
    photos: [
      "1760188492254.jpeg","1771251821283.jpeg","1772718530155.jpeg",
      "1773929554601.jpeg","1774531305233.jpeg",
      "WhatsApp-Image-2026-04-18-at-12.16.48-AM-1.jpeg",
      "WhatsApp-Image-2026-04-18-at-12.16.48-AM.jpeg",
      "WhatsApp-Image-2026-04-18-at-12.16.49-AM.jpeg",
      "WhatsApp-Image-2026-04-18-at-12.16.50-AM-1.jpeg",
      "WhatsApp-Image-2026-04-18-at-12.16.50-AM.jpeg",
    ],
    folder: "columbia-graduation-2023",
  },
  {
    name: "Shaker + Columbia Business School",
    location: "New York City",
    year: "2023",
    description: "A startup social hosted at Shaker NYC for Columbia Business School students and founders. The energy in the room was real.",
    photos: [
      "1664817227486.jpeg","1664817227513.jpeg","1664817227636-1.jpeg",
      "1664817227636.jpeg","1678388177439.jpeg",
    ],
    folder: "shaker-columbia-business-school-2022",
  },
];

export default function Clicks() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3 font-semibold">Photography</p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">clicks.</h1>
        <p className="text-[#999] mt-3 text-[15px] max-w-lg">
          Professional event photography for corporate conferences, university events, and startup socials.
          Candid moments, clean portraits, and the energy of a room. Documented properly.
        </p>
      </div>

      <div className="space-y-12">
        {events.map((e) => (
          <div key={e.folder}>
            <div className="mb-5">
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-2xl">{e.name}</h2>
                <span className="text-xs text-[#bbb]">{e.year}</span>
              </div>
              <p className="text-xs text-[#999] mt-1">{e.location}</p>
              <p className="text-sm text-[#888] mt-2 leading-relaxed">{e.description}</p>
            </div>

            <div className="columns-2 md:columns-3 gap-3 space-y-3">
              {e.photos.map((photo) => (
                <div key={photo} className="break-inside-avoid mb-3">
                  <LazyImage
                    src={`${BASE}/${e.folder}/${photo}`}
                    alt={`${e.name} · ${photo}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 card-flat p-6 text-center">
        <p className="text-[#999] text-sm">More events coming soon.</p>
      </div>
    </div>
  );
}

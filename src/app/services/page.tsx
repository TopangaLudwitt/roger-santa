import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Roger The Real Bearded Santa",
  description: "Home visits, corporate events, community events, mall appearances, private parties, and virtual visits. Premium real-bearded Santa experiences.",
};

const services = [
  {
    icon: "🏠", title: "Home Visits", price: "From $300/hr",
    desc: "Santa arrives at your door for a personal visit. Story time, present delivery, photo opportunities, and one-on-one time with each child. Perfect for families who want an intimate, unforgettable Christmas Eve experience.",
    includes: ["Grand entrance in full premium attire", "Story time with the children", "Present delivery from Santa's sack", "Photo opportunities", "One-on-one time with each child"],
  },
  {
    icon: "🏢", title: "Corporate Events", price: "From $400/hr",
    desc: "Bring the holiday spirit to your workplace. Photo ops, meet-and-greet, gift distribution, and seasonal cheer for your team and clients. Multi-hour packages available.",
    includes: ["Professional meet-and-greet", "Photo opportunities for all guests", "Gift distribution", "Holiday toast or speech", "Multi-hour packages available"],
  },
  {
    icon: "🎄", title: "Community & Church Events", price: "From $250/hr",
    desc: "Tree lightings, parades, holiday festivals, breakfasts with Santa. Experienced with crowds large and small.",
    includes: ["Tree lighting ceremonies", "Parade appearances", "Breakfast/lunch with Santa", "Holiday festival walkarounds", "Stage appearances"],
  },
  {
    icon: "🏬", title: "Mall & Retail Appearances", price: "Custom Quote",
    desc: "Multi-day and multi-week residencies for shopping centers and retail locations. Professional, reliable, and experienced with high-volume photo sessions.",
    includes: ["Multi-day/week residencies", "High-volume photo sessions", "Consistent schedule reliability", "Professional interaction with all ages", "Custom packages available"],
  },
  {
    icon: "🎉", title: "Private Parties", price: "From $300/hr",
    desc: "Birthday parties, holiday gatherings, surprise appearances. Customize the experience to fit your celebration.",
    includes: ["Surprise or scheduled arrival", "Customized interaction", "Photo opportunities", "Gift delivery", "Flexible timing"],
  },
  {
    icon: "💻", title: "Virtual Visits", price: "From $150",
    desc: "Video call Santa visits for families who can't meet in person. Full costume, full character, full magic — just through a screen.",
    includes: ["Live video call (Zoom/FaceTime)", "Full costume and character", "Story time and conversation", "Personalized details", "Recording-friendly"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-santa-red text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-serif)]">Services & Pricing</h1>
        <p className="text-santa-gold mt-3 text-lg">Premium Santa experiences for every occasion</p>
      </section>

      <section className="bg-santa-cream py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl shadow-md p-8 border border-santa-gold/10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-4xl">{s.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h2 className="text-2xl font-bold text-santa-green font-[family-name:var(--font-serif)]">{s.title}</h2>
                    <span className="text-santa-gold font-bold text-lg">{s.price}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{s.desc}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-santa-red mb-2">What&apos;s Included:</h4>
                    <ul className="grid sm:grid-cols-2 gap-1 text-sm text-gray-600">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-santa-green">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/book" className="inline-block bg-santa-red text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-santa-red-light transition-colors shadow-lg">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

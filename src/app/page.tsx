import Link from "next/link";

const services = [
  { icon: "🏠", title: "Home Visits", price: "From $300/hr", desc: "Personal visits with story time, present delivery, and photo opportunities." },
  { icon: "🏢", title: "Corporate Events", price: "From $400/hr", desc: "Holiday spirit for your workplace with photo ops and seasonal cheer." },
  { icon: "🎄", title: "Community Events", price: "From $250/hr", desc: "Tree lightings, parades, festivals, and breakfasts with Santa." },
  { icon: "🏬", title: "Mall & Retail", price: "Custom Quote", desc: "Multi-day residencies for shopping centers and retail locations." },
  { icon: "🎉", title: "Private Parties", price: "From $300/hr", desc: "Birthday parties, holiday gatherings, and surprise appearances." },
  { icon: "💻", title: "Virtual Visits", price: "From $150", desc: "Video call Santa visits for families who can't meet in person." },
];

const testimonials = [
  { quote: "The most magical Christmas Eve our family has ever had. The children were absolutely spellbound.", author: "The Johnson Family" },
  { quote: "Professional, warm, and absolutely authentic. Our corporate event was transformed.", author: "Sarah M., Event Director" },
  { quote: "The real beard made all the difference. Even the adults believed!", author: "Community Events Committee" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-santa-red text-white py-24 md:py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-serif)] mb-6 leading-tight">
            Roger The Real<br />Bearded Santa
          </h1>
          <p className="text-xl md:text-2xl text-santa-gold font-medium mb-4 tracking-wide">
            Authentic. Magical. Unforgettable.
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            A premium, real-bearded Santa Claus for your holiday celebration. CWH Santa School certified. Available nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-santa-gold text-santa-red font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors shadow-lg">
              Book Santa Now
            </Link>
            <Link href="/about" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Placeholder */}
      <section className="bg-santa-cream py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-md p-12 border-2 border-dashed border-santa-gold/40">
            <p className="text-santa-green text-lg font-medium">📸 Professional photos coming Fall 2026</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-santa-red mb-6 font-[family-name:var(--font-serif)]">
            Real Beard. Real Magic. Real Memories.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            With a genuine natural beard and professional training from the Charles W. Howard Santa Claus School — 
            the world&apos;s oldest and most prestigious Santa school — every appearance is crafted to create 
            lasting memories for children and adults alike.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm font-medium text-santa-green">
            {["Authentic natural beard", "CWH Santa School certified", "Fully insured", "Travel anywhere", "Background checked"].map((item) => (
              <span key={item} className="flex items-center gap-2 bg-santa-cream px-4 py-2 rounded-full">
                ✅ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-santa-cream py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-santa-red text-center mb-12 font-[family-name:var(--font-serif)]">
            Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-santa-gold/10">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-santa-green mb-1 font-[family-name:var(--font-serif)]">{s.title}</h3>
                <p className="text-santa-gold font-semibold text-sm mb-3">{s.price}</p>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-santa-red font-semibold hover:underline">
              View all services & details →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-santa-green text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-serif)]">
            What People Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-white/90 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-santa-gold font-medium text-sm">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm mt-8">* Placeholder testimonials — real testimonials coming soon</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-santa-red text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-serif)]">
            Ready to Make This Holiday Unforgettable?
          </h2>
          <p className="text-lg text-white/80 mb-8">The holiday season fills up fast. Book early to secure your date.</p>
          <Link href="/book" className="inline-block bg-santa-gold text-santa-red font-bold px-10 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors shadow-lg">
            Book Santa Now
          </Link>
        </div>
      </section>
    </>
  );
}

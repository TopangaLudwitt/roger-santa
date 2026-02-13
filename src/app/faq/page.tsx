import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Roger The Real Bearded Santa",
  description: "Frequently asked questions about booking Roger The Real Bearded Santa for your holiday event.",
};

const faqs = [
  {
    q: "Is your beard real?",
    a: "Yes! Roger is a natural-bearded Santa — no wigs, no spirit gum, no costume pieces. The beard is grown and maintained year-round. When a child reaches up to touch it, they discover exactly what they hoped — it's the real thing.",
  },
  {
    q: "How far in advance should I book?",
    a: "The earlier the better! The holiday season fills up fast, especially weekends in December. Booking by October is strongly recommended for December dates. Some clients book a year in advance to secure their preferred date and time.",
  },
  {
    q: "Do you travel?",
    a: "Yes — Roger is available nationwide. Based in the Boston metro area, local events have no travel fee. For events outside the area, travel fees may apply depending on distance. Contact us for a custom quote.",
  },
  {
    q: "Are you insured?",
    a: "Absolutely. Roger carries full general liability insurance for every appearance. A certificate of insurance can be provided upon request for venues or organizations that require it.",
  },
  {
    q: "What's included in a visit?",
    a: "Every visit includes arrival in full premium attire, warm and authentic interaction with all guests, story time (for children's events), photo opportunities, and a magical, memorable experience. Specific activities can be customized to fit your event.",
  },
  {
    q: "Do you do video calls?",
    a: "Yes! Virtual Santa visits are available via Zoom, FaceTime, or other video platforms. These are perfect for families who can't meet in person, long-distance grandchildren, or as a fun addition to virtual holiday parties. Starting at $150.",
  },
  {
    q: "What should we tell the children?",
    a: "Nothing special — just that Santa is coming! Roger is fully in character from the moment he arrives. He's trained in child psychology and knows how to make every child feel special and comfortable, including shy or nervous children.",
  },
  {
    q: "Can you deliver presents?",
    a: "Yes! Many families provide wrapped gifts for Santa to deliver from his sack during home visits. Simply have the presents ready and labeled before Santa arrives, and the magic happens naturally.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-santa-red text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-serif)]">Frequently Asked Questions</h1>
        <p className="text-santa-gold mt-3 text-lg">Everything you need to know</p>
      </section>

      <section className="bg-santa-cream py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl shadow-md p-6 border border-santa-gold/10">
              <h3 className="text-lg font-bold text-santa-green font-[family-name:var(--font-serif)] mb-3">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have another question?</p>
          <Link href="/book" className="inline-block bg-santa-red text-white font-bold px-8 py-4 rounded-lg hover:bg-santa-red-light transition-colors shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

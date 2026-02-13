import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Santa | Roger The Real Bearded Santa",
  description: "Meet Roger — a CWH Santa School certified, real-bearded Santa bringing authentic holiday magic to every appearance.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-santa-red text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-serif)]">Meet Santa</h1>
        <p className="text-santa-gold mt-3 text-lg">The story behind the beard</p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-lg text-gray-700 leading-relaxed">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
            <Image src="/images/santa-portrait.jpg" alt="Roger The Real Bearded Santa" width={400} height={400} className="w-full h-auto" priority />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-santa-red font-[family-name:var(--font-serif)]">
            A Calling, Not Just a Costume
          </h2>
          <p>
            For Roger, being Santa isn&apos;t something he puts on — it&apos;s something he lives. With a genuine, 
            year-round natural beard and a heart full of Christmas spirit, he brings an authenticity to every 
            appearance that children and adults can feel the moment he walks through the door.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-santa-red font-[family-name:var(--font-serif)]">
            Trained by the Best
          </h2>
          <p>
            Roger is a graduate of the prestigious <strong>Charles W. Howard Santa Claus School</strong> in Midland, 
            Michigan — the world&apos;s oldest Santa school, established in 1937. This intensive program covers 
            everything from the history and traditions of Santa Claus to child psychology, sign language, working 
            with special needs children, and the art of creating genuine magical moments.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-santa-red font-[family-name:var(--font-serif)]">
            Yes, the Beard is Real
          </h2>
          <p>
            No costume pieces. No spirit gum. No wigs. Roger grows his beard naturally year-round, maintaining it 
            with care so that every child who reaches up to touch it discovers what they hoped — it&apos;s the real thing. 
            That moment of wonder is priceless.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-santa-red font-[family-name:var(--font-serif)]">
            What Santa Believes In
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Authenticity", desc: "Every detail matters — from the real beard to the handcrafted suit to the genuine warmth in every interaction." },
              { title: "Magic", desc: "Creating moments of wonder that transcend age. When Santa is real, the magic is real." },
              { title: "Memories", desc: "A great Santa visit becomes a family story told for generations. That's the goal of every appearance." },
              { title: "Professionalism", desc: "Fully insured, background checked, always on time, and always in character. Your event is in good hands." },
            ].map((v) => (
              <div key={v.title} className="bg-santa-cream rounded-xl p-5">
                <h3 className="font-bold text-santa-green text-lg font-[family-name:var(--font-serif)] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/book" className="inline-block bg-santa-red text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-santa-red-light transition-colors shadow-lg">
              Book Santa for Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

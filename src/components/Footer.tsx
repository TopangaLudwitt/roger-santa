import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-santa-green text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-serif)] mb-3">🎅 Santa Clause</h3>
          <p className="text-white/80 text-sm">Real Bearded Santa for Hire<br />Based in Boston, MA — Available Nationwide</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <Link href="/about" className="hover:text-santa-gold transition-colors">About Santa</Link>
            <Link href="/services" className="hover:text-santa-gold transition-colors">Services & Pricing</Link>
            <Link href="/faq" className="hover:text-santa-gold transition-colors">FAQ</Link>
            <Link href="/book" className="hover:text-santa-gold transition-colors">Book Santa</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">Connect</h4>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <a href="mailto:roger@rogertherealbeardedsanta.com" className="hover:text-santa-gold transition-colors">Email Santa</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-santa-gold transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-santa-gold transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Santa Clause. All rights reserved.
      </div>
    </footer>
  );
}

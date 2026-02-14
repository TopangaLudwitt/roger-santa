"use client";

const eventTypes = [
  "Home Visit",
  "Corporate Event",
  "Community / Church Event",
  "Mall / Retail Appearance",
  "Private Party",
  "Virtual Visit",
  "Other",
];

export default function BookPage() {
  return (
    <>
      <section className="bg-santa-red text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-serif)]">Book Santa</h1>
        <p className="text-santa-gold mt-3 text-lg">Fill out the form and I&apos;ll get back to you within 24 hours</p>
      </section>

      <section className="bg-santa-cream py-16">
        <div className="max-w-2xl mx-auto px-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Santa Booking Request — ${data.get('eventType')} on ${data.get('eventDate')}`);
              const body = encodeURIComponent(
                `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'N/A'}\nEvent Type: ${data.get('eventType')}\nEvent Date: ${data.get('eventDate')}\nDuration: ${data.get('duration') || 'N/A'}\nLocation: ${data.get('location')}\n\nSpecial Requests:\n${data.get('message') || 'None'}`
              );
              window.location.href = `mailto:roger@rogertherealbeardedsanta.com?subject=${subject}&body=${body}`;
            }}
            className="bg-white rounded-xl shadow-md p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
              <input type="text" name="name" id="name" required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" id="email" required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                <input type="tel" name="phone" id="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
              </div>
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-1">Event Type *</label>
              <select name="eventType" id="eventType" required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent bg-white">
                <option value="">Select event type...</option>
                {eventTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-1">Event Date *</label>
                <input type="date" name="eventDate" id="eventDate" required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-1">Duration</label>
                <input type="text" name="duration" id="duration" placeholder="e.g., 2 hours"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Event Location *</label>
              <input type="text" name="location" id="location" required placeholder="City, State or full address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Special Requests / Notes</label>
              <textarea name="message" id="message" rows={4} placeholder="Tell us about your event, any special details, children's names, etc."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-santa-red focus:border-transparent" />
            </div>

            <button type="submit"
              className="w-full bg-santa-red text-white font-bold py-4 rounded-lg text-lg hover:bg-santa-red-light transition-colors shadow-lg cursor-pointer">
              Submit Booking Request 🎅
            </button>

            <p className="text-center text-sm text-gray-500">
              You&apos;ll receive a response within 24 hours with availability and a custom quote.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

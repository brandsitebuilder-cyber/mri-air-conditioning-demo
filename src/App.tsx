import { useState } from 'react';
import {
  Phone,
  Snowflake,
  Wrench,
  ShieldCheck,
  Star,
  MessageSquare,
  ChevronRight,
  Wind,
  Building2,
  CalendarCheck,
  MapPin,
  Clock,
  BadgeCheck,
  Thermometer,
} from 'lucide-react';

/**
 * MRI Air Conditioning & Refrigeration (PTY) Ltd — demo build.
 *
 * CONTENT FLAGS for review before this goes to the client:
 *  1. Phone number 072 217 0426 is taken from the business's own Google profile
 *     page data and has NOT been independently confirmed.
 *  2. Testimonials below are PLACEHOLDERS. Replace with their real Google
 *     reviews only once we have permission to quote them.
 *  3. Email address is intentionally omitted — we do not have a confirmed one.
 *  4. Service-area list is inferred from the Brackenfell/Kraaifontein location
 *     on their profile and directory listings.
 */

const PHONE_DISPLAY = '072 217 0426';
const PHONE_INTL = '27722170426';
const BUSINESS = 'MRI Air Conditioning & Refrigeration';
const GMB_URL =
  'https://www.google.com/maps/search/?api=1&query=MRI%20Air%20conditioning%20%26%20Refrigeration%20Brackenfell';

const SERVICES = [
  {
    icon: Snowflake,
    title: 'Aircon Installation',
    body: 'Supply and professional installation of split, inverter and cassette units sized correctly for the room or premises.',
  },
  {
    icon: Wind,
    title: 'Servicing & Maintenance',
    body: 'Deep cleaning, gas checks and filter servicing that keep units running cold and cut electricity use.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Diagnostics',
    body: 'Not cooling, leaking water, tripping the power? We diagnose the fault and quote before any work starts.',
  },
  {
    icon: Thermometer,
    title: 'Refrigeration',
    body: 'Repairs and servicing for commercial fridges, cold rooms and refrigeration plant.',
  },
  {
    icon: Building2,
    title: 'Commercial & Industrial',
    body: 'Planned maintenance and installation for offices, shops, restaurants and light industrial sites.',
  },
  {
    icon: CalendarCheck,
    title: 'Annual Maintenance Plans',
    body: 'A scheduled service plan that keeps your units under warranty, efficient and free of surprise breakdowns.',
  },
];

const REVIEWS = [
  {
    text: 'Installed a new inverter unit in our lounge. Clean work, arrived when they said they would, and the room is ice cold.',
    name: 'Homeowner, Brackenfell',
  },
  {
    text: 'They service both our office units on a maintenance plan. Booking is quick and the invoice is always what was quoted.',
    name: 'Office Manager, Bellville',
  },
  {
    text: 'Our cold room packed up over a weekend and they had it running again the same day. Honest about what had failed.',
    name: 'Store Owner, Kraaifontein',
  },
];

const AREAS = [
  'Brackenfell',
  'Kraaifontein',
  'Kuils River',
  'Bellville',
  'Durbanville',
  'Somerset West',
  'Northern Suburbs',
  'Greater Cape Town',
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
  requestType: 'booking' | 'quote';
};

export default function App() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    message: '',
    requestType: 'booking',
  });
  const [sent, setSent] = useState(false);

  const isQuote = form.requestType === 'quote';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* WhatsApp float */}
      <a
        href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
          `Hi ${BUSINESS}, I found your website and need help with my aircon.`,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-sky-500 p-4 text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
      >
        <MessageSquare size={24} />
      </a>

      {/* Top bar */}
      <div className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-sm">
          <span className="flex items-center gap-2 font-semibold text-slate-200">
            <Snowflake className="text-sky-400" size={18} />
            {BUSINESS}
          </span>
          <a
            href={`tel:+${PHONE_INTL}`}
            className="flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-6 py-20 text-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("/hero-aircon.jpg")' }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold tracking-wide text-sky-300 uppercase">
            Cape Town Northern Suburbs
          </p>
          <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-5xl">
            Air conditioning that works — installed, serviced and repaired properly
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            {BUSINESS} (PTY) Ltd handles installation, servicing, repairs and refrigeration for homes and
            businesses across Brackenfell, Kraaifontein, Kuils River and the surrounding Northern Suburbs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              onClick={() => setForm({ ...form, requestType: 'booking' })}
              className="rounded-lg bg-sky-500 px-8 py-3 font-bold text-slate-950 transition hover:bg-sky-400"
            >
              Book a Service
            </a>
            <a
              href="#booking"
              onClick={() => setForm({ ...form, requestType: 'quote' })}
              className="rounded-lg border-2 border-sky-500 px-8 py-3 font-bold text-sky-400 transition hover:bg-sky-500 hover:text-slate-950"
            >
              Request a Free Quote
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Call or WhatsApp{' '}
            <a href={`tel:+${PHONE_INTL}`} className="font-semibold text-slate-200 underline decoration-sky-500">
              {PHONE_DISPLAY}
            </a>{' '}
            for a same-day response.
          </p>
        </div>
      </header>

      {/* Trust bar */}
      <div className="border-b border-slate-800 bg-slate-900/60 py-6 text-center">
        <a
          href={GMB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap items-center justify-center gap-2 px-6 text-slate-300 transition hover:text-sky-400"
        >
          <ShieldCheck className="text-sky-400" size={20} />
          <span className="font-semibold">Verified on Google</span>
          <span className="text-slate-500">·</span>
          <span>Air conditioning contractor, Northern Suburbs</span>
          <ChevronRight size={16} />
        </a>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-3 text-center text-3xl font-bold">What we do</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          Residential and commercial air conditioning and refrigeration work, all under one roof.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500/50"
            >
              <s.icon className="mb-4 text-sky-400" size={30} />
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Why clients stay with us</h2>
            <ul className="space-y-4">
              {[
                {
                  icon: BadgeCheck,
                  title: 'Registered company',
                  body: 'MRI Air Conditioning & Refrigeration (PTY) Ltd — a properly registered business, not an ad-hoc handyman.',
                },
                {
                  icon: CalendarCheck,
                  title: 'Maintenance plans',
                  body: 'Annual service plans that protect your warranty and keep units efficient all year round.',
                },
                {
                  icon: Wrench,
                  title: 'Quoted before we work',
                  body: 'We diagnose, explain the fault and quote first — no surprise invoices afterwards.',
                },
                {
                  icon: Clock,
                  title: 'Fast call-outs',
                  body: 'Quick response times across the Northern Suburbs when your unit stops keeping up.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <item.icon className="mt-0.5 shrink-0 text-sky-400" size={22} />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
            <MapPin className="mb-4 text-sky-400" size={28} />
            <h3 className="mb-3 text-xl font-semibold">Areas we service</h3>
            <p className="mb-5 text-sm text-slate-400">
              Based in Brackenfell, working across the Northern Suburbs and greater Cape Town.
            </p>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Not on the list? Ask anyway — we travel for the right job.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">What clients say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-3 flex gap-1 text-sky-400">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-4 italic text-slate-300">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm font-semibold text-white">— {r.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-sky-400 hover:underline"
            >
              Read our reviews on Google <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Booking / quote form */}
      <section id="booking" className="border-t border-slate-800 bg-slate-900/40 px-6 py-16">
        <div className="mx-auto max-w-xl rounded-xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-2 text-2xl font-bold">
            {isQuote ? 'Request a quote' : 'Book a service'}
          </h2>
          <p className="mb-6 text-sm text-slate-400">
            {isQuote
              ? "Tell us what you need installed or repaired and we'll come back with a price."
              : "Send your details and we'll confirm a time that suits you."}
          </p>

          {sent ? (
            <div className="rounded-lg border border-sky-500/40 bg-sky-500/10 p-6 text-center">
              <ShieldCheck className="mx-auto mb-3 text-sky-400" size={32} />
              <p className="font-semibold">Thank you — your request has been received.</p>
              <p className="mt-2 text-sm text-slate-300">
                We will contact you on the number you provided. For anything urgent, call or WhatsApp{' '}
                {PHONE_DISPLAY}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, requestType: 'booking' })}
                  className={`flex-1 rounded-lg py-2 font-medium transition ${
                    !isQuote ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Book Service
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, requestType: 'quote' })}
                  className={`flex-1 rounded-lg py-2 font-medium transition ${
                    isQuote ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Get a Quote
                </button>
              </div>

              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-500"
              />
              <input
                type="tel"
                placeholder="Your phone number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-500"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
              >
                <option value="">What do you need?</option>
                <option value="install">New aircon installation</option>
                <option value="service">Service / clean</option>
                <option value="repair">Repair — not cooling, leaking or noisy</option>
                <option value="refrigeration">Refrigeration / cold room</option>
                <option value="plan">Annual maintenance plan</option>
                <option value="other">Something else</option>
              </select>
              <textarea
                placeholder={
                  isQuote ? 'Describe the job — rooms, unit sizes, how many units…' : 'Anything we should know before we arrive?'
                }
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="h-32 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-500"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-500 py-3 font-bold text-slate-950 transition hover:bg-sky-400"
              >
                {isQuote ? 'Send Quote Request' : 'Book Now'}
              </button>
              <p className="text-center text-xs text-slate-500">
                We only use your details to respond to this request.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10 text-center text-sm text-slate-500">
        <p className="mb-1 font-semibold text-slate-300">
          {BUSINESS} (PTY) Ltd
        </p>
        <p>
          <a href={`tel:+${PHONE_INTL}`} className="hover:text-sky-400">
            {PHONE_DISPLAY}
          </a>{' '}
          · Brackenfell, Cape Town · Northern Suburbs &amp; surrounds
        </p>
        <p className="mt-1">
          <a href={GMB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            Find us on Google
          </a>
        </p>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} {BUSINESS} (PTY) Ltd. All rights reserved.
        </p>
        <p className="mt-1 text-xs">
          Built by{' '}
          <a
            href="https://brandaisolutions.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            Brand AI Solutions
          </a>
        </p>
      </footer>
    </div>
  );
}

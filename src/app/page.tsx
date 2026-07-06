"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Heart, Users, Globe, Menu, X, CheckCircle, Mail } from "lucide-react";

const GREEN = "#1A7A4A";
const SAGE = "#F0F7F4";
const DARK = "#0D1F18";
const AMBER = "#D97706";

const programs = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Clean Water Initiative",
    desc: "Bringing sustainable water access to 47 rural communities across Central Moldova. 12,000 people served.",
    stat: "12,400 beneficiaries",
    color: "#1B4F72",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Youth Leadership Academy",
    desc: "6-month programme training young people aged 16–24 in civic engagement, project management, and leadership.",
    stat: "380 graduates",
    color: "#1A7A4A",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Elder Care Network",
    desc: "Volunteer network providing social support, meals, and medical transport for isolated elderly residents.",
    stat: "1,200 families",
    color: "#7C3AED",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Urban Green Spaces",
    desc: "Transforming abandoned lots into community gardens and parks. 14 spaces planted in Chișinău and Bălți.",
    stat: "14 spaces created",
    color: "#D97706",
  },
];

const team = [
  { name: "Maria Popescu", role: "Executive Director", years: "Since 2014" },
  { name: "Ion Cojocaru", role: "Programs Manager", years: "Since 2017" },
  { name: "Elena Botnaru", role: "Fundraising Lead", years: "Since 2019" },
  { name: "Andrei Lungu", role: "Field Coordinator", years: "Since 2020" },
];

const partners = ["USAID", "EU Delegation", "UNDP Moldova", "Open Society", "Soros Foundation", "City of Chișinău"];

const impact = [
  { n: "23,000+", l: "Lives impacted directly" },
  { n: "47", l: "Communities reached" },
  { n: "€2.1M", l: "Grants managed in 2025" },
  { n: "680+", l: "Active volunteers" },
];

export default function NGODemo() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white", fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b bg-white/95" style={{ borderColor: `${DARK}12`, backdropFilter: "blur(8px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm" style={{ backgroundColor: GREEN }}>
              LC
            </div>
            <div>
              <div className="font-black text-base leading-tight" style={{ color: DARK }}>Lumina Civic</div>
              <div className="text-xs" style={{ color: `${DARK}50` }}>Non-profit · Moldova</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: `${DARK}60` }}>
            {["Programs", "Impact", "About Us", "Partners"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-gray-900 transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="#volunteer" className="hidden md:inline-flex items-center gap-1.5 border text-sm font-semibold h-10 px-4 rounded-xl transition-colors" style={{ borderColor: GREEN, color: GREEN }}>
              Volunteer
            </a>
            <a href="#donate" className="inline-flex items-center gap-2 text-sm font-semibold h-10 px-5 rounded-xl text-white" style={{ backgroundColor: GREEN }}>
              <Heart className="w-4 h-4" /> Donate
            </a>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b" style={{ borderColor: `${DARK}12` }}>
            <span className="font-black text-lg" style={{ color: DARK }}>Lumina Civic</span>
            <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6">
            {["Programs", "Impact", "About Us", "Partners"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold py-4 border-b" style={{ color: DARK, borderColor: `${DARK}10` }}>{l}</a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8 flex flex-col gap-3">
            <a href="#volunteer" className="flex items-center justify-center h-12 rounded-xl font-semibold text-sm border-2" style={{ borderColor: GREEN, color: GREEN }}>Volunteer</a>
            <a href="#donate" className="flex items-center justify-center h-12 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>Donate</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-16 relative overflow-hidden" style={{ backgroundColor: DARK, minHeight: "92vh" }}>
        <div className="absolute inset-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=85" alt="Community" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Active in Moldova since 2014
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Building stronger<br />
              <span style={{ color: "#4ADE80" }}>communities</span>,<br />
              one project at a time.
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-lg mb-10">
              Lumina Civic works with local communities across Moldova to address social, environmental, and educational challenges through citizen-led programmes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center gap-2 font-semibold h-12 px-8 rounded-xl text-sm text-white" style={{ backgroundColor: GREEN }}>
                Our Programs <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#donate" className="inline-flex items-center gap-2 font-semibold h-12 px-8 rounded-xl text-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
                <Heart className="w-4 h-4" /> Support Us
              </a>
            </div>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-2 gap-4">
            {impact.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                <div className="text-3xl font-black mb-1" style={{ color: "#4ADE80" }}>{s.n}</div>
                <div className="text-xs text-white/50 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>By the numbers</p>
            <h2 className="text-4xl font-black" style={{ color: DARK }}>Our impact since 2014</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 border border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100 mb-14">
            {[
              { n: "23,000+", l: "Lives impacted directly" },
              { n: "47", l: "Communities reached" },
              { n: "€2.1M", l: "Grants managed in 2025" },
              { n: "680+", l: "Active volunteers" },
            ].map((s, i) => (
              <div key={i} className="p-10 text-center">
                <div className="text-4xl font-black mb-2" style={{ color: GREEN }}>{s.n}</div>
                <div className="text-sm text-gray-500">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { year: "2014–2016", title: "Water access for 3,200 people", desc: "First project: solar-powered well in 4 communities in Nisporeni district. Zero maintenance costs after year 2." },
              { year: "2017–2020", title: "Youth programme scales to 12 raions", desc: "Youth Leadership Academy expanded. 180 graduates went on to found their own NGOs or community initiatives." },
              { year: "2021–present", title: "Urban greening & elder care", desc: "14 community gardens planted. Elder care network now active in Chișinău, Bălți, and Cahul with 320 volunteers." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 border border-gray-100" style={{ backgroundColor: SAGE }}>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: `${GREEN}15`, color: GREEN }}>{item.year}</span>
                <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: `${DARK}60` }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6" style={{ backgroundColor: SAGE }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>What we do</p>
            <h2 className="text-4xl font-black" style={{ color: DARK }}>Our programmes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: p.color }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: DARK }}>{p.title}</h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style={{ backgroundColor: p.color }}>
                      {p.stat}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: `${DARK}65` }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about-us" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=85" alt="Team" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN }}>Who we are</p>
            <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: DARK }}>A team of 14 people<br />and 680 volunteers.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: `${DARK}65` }}>
              Founded in 2014 by a group of former Peace Corps volunteers and local activists, Lumina Civic started with a single rural water project and €18,000 in funding.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: `${DARK}65` }}>
              Today we manage a portfolio of four active programmes, work with 11 international donors, and have directly improved conditions for over 23,000 people across Moldova.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {team.map((m, i) => (
                <div key={i} className="rounded-xl p-4 border border-gray-100 bg-gray-50">
                  <div className="font-bold text-sm" style={{ color: DARK }}>{m.name}</div>
                  <div className="text-xs" style={{ color: `${DARK}55` }}>{m.role}</div>
                  <div className="text-xs mt-1" style={{ color: GREEN }}>{m.years}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 px-6 border-y" style={{ borderColor: `${DARK}08` }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-8" style={{ color: `${DARK}40` }}>Funded by & partnered with</p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <div key={p} className="px-5 py-2.5 rounded-xl border text-sm font-semibold" style={{ borderColor: `${DARK}15`, color: `${DARK}55` }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>Join us</p>
            <h2 className="text-4xl font-black mb-4" style={{ color: DARK }}>Volunteer with Lumina Civic.</h2>
            <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: `${DARK}60` }}>
              No experience required — just willingness to help. We'll match you with a programme that fits your time and skills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "🌱", role: "Field volunteer", time: "Weekends", desc: "Help with planting days, water access projects, and community events. Physical work, great impact." },
              { icon: "🧑‍💻", role: "Digital support", time: "Remote, flexible", desc: "Social media, translation, grant writing, data analysis. Contribute from anywhere in the world." },
              { icon: "🧓", role: "Elder care visitor", time: "2–4h/week", desc: "Visit isolated elderly residents, assist with transport, share a meal. Deeply rewarding." },
            ].map((v, i) => (
              <div key={i} className="rounded-2xl border p-6" style={{ borderColor: `${DARK}08` }}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-base mb-1" style={{ color: DARK }}>{v.role}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-3" style={{ backgroundColor: `${GREEN}12`, color: GREEN }}>{v.time}</span>
                <p className="text-sm leading-relaxed" style={{ color: `${DARK}60` }}>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8 border max-w-xl mx-auto" style={{ backgroundColor: SAGE, borderColor: `${GREEN}15` }}>
            <h3 className="font-black text-base mb-5" style={{ color: DARK }}>Register as a volunteer</h3>
            <div className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input placeholder="First name" className="h-11 rounded-xl border px-3 text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }} />
                <input placeholder="Last name" className="h-11 rounded-xl border px-3 text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }} />
              </div>
              <input placeholder="Email address" className="w-full h-11 rounded-xl border px-3 text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }} />
              <select className="w-full h-11 rounded-xl border px-3 text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }}>
                <option>Choose a volunteer role</option>
                <option>Field volunteer</option>
                <option>Digital support</option>
                <option>Elder care visitor</option>
              </select>
              <button className="w-full h-11 rounded-xl text-sm font-bold text-white" style={{ backgroundColor: GREEN }}>
                Apply to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section id="donate" className="py-24 px-6" style={{ backgroundColor: GREEN }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/60">Support our work</p>
          <h2 className="text-4xl font-black text-white mb-5">Every lei matters.</h2>
          <p className="text-white/70 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            100% of donations go directly to programme activities. Our operational costs are covered by institutional grants.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#donate" className="inline-flex items-center justify-center gap-2 font-semibold h-12 px-10 rounded-xl text-sm bg-white" style={{ color: GREEN }}>
              <Heart className="w-4 h-4" /> Donate Now
            </a>
            <a href="#volunteer" className="inline-flex items-center justify-center gap-2 font-semibold h-12 px-10 rounded-xl text-sm text-white border border-white/30 hover:bg-white/10 transition-colors">
              <Users className="w-4 h-4" /> Volunteer
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-white/50">
            {["Registered NGO · Moldova", "Annual audit published", "Tax-deductible donations"].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-white/40" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-12 px-6 bg-white border-t" style={{ borderColor: `${DARK}08` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-black text-lg mb-1" style={{ color: DARK }}>Lumina Civic</div>
            <div className="text-sm flex items-center gap-2" style={{ color: `${DARK}50` }}>
              <Mail className="w-4 h-4" /> contact@luminacivic.md · +373 22 123 456
            </div>
          </div>
          <span className="text-xs" style={{ color: `${DARK}35` }}>
            Demo site — <a href="/" className="hover:underline" style={{ color: `${DARK}55` }}>built by Vladimir Rusacov</a>
          </span>
          <span className="text-xs" style={{ color: `${DARK}35` }}>© 2026 Lumina Civic. Reg. 1014603000082</span>
        </div>
      </footer>
    </div>
  );
}

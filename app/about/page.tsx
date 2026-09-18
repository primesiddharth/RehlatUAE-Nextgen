'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Plane,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Target,
  Heart,
  Award,
  Send,
  ChevronDown,
  MessageSquare,
  Globe,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { faqs, stats } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We partner with only the finest hotels, airlines, and tour operators to deliver uncompromising quality.',
  },
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Every itinerary is crafted with attention to your preferences. Your journey is as unique as you are.',
  },
  {
    icon: Target,
    title: 'Local Expertise',
    description: 'Our team of Dubai locals knows every hidden gem and must-see attraction to create the perfect trip.',
  },
  {
    icon: Globe,
    title: '24/7 Support',
    description: 'From booking to your return flight, our concierge team is available around the clock to assist you.',
  },
];

const team = [
  {
    name: 'Ahmed Al Rashid',
    role: 'Founder & CEO',
    initials: 'AR',
    bio: 'Born and raised in Dubai, Ahmed founded Desert Luxe in 2011 with a vision to share his city with the world.',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Operations',
    initials: 'SC',
    bio: 'Former luxury hotel manager with 12 years of experience crafting seamless travel experiences across the UAE.',
  },
  {
    name: 'Omar Hassan',
    role: 'Lead Tour Guide',
    initials: 'OH',
    bio: 'Certified cultural guide with deep knowledge of Dubai\'s history, architecture, and hidden treasures.',
  },
  {
    name: 'Layla Mansoor',
    role: 'Customer Experience',
    initials: 'LM',
    bio: 'Dedicated to making every traveler feel special, Layla leads our concierge and support team.',
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/19180974/pexels-photo-19180974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Dubai skyline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-white">About & Contact</span>
          </nav>
          <div className="mt-4 max-w-2xl">
            <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              About Desert Luxe
            </h1>
            <p className="mt-3 text-base text-white/80 sm:text-lg">
              For over 15 years, we&apos;ve been crafting extraordinary Dubai experiences for travelers
              from around the globe. We&apos;re more than a travel agency — we&apos;re your local connection
              to the heart of this remarkable city.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="font-serif text-2xl font-bold text-accent sm:text-3xl">{stat.value}</div>
                <div className="mt-0.5 text-xs uppercase tracking-wider text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Values</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => (
              <div key={val.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <val.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-primary">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Team</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
              Meet the Experts
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              The people behind your unforgettable Dubai experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gold-gradient text-xl font-bold text-white shadow-md">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-serif text-base font-bold text-primary">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + FAQ */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Get in Touch</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Have a question or ready to plan your Dubai adventure? Send us a message and
                our team will get back to you within 24 hours.
              </p>

              {/* Contact info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">Sheikh Zayed Road, Downtown Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">+971 4 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">hello@desertluxe.ae</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">Available 24/7 — we never sleep</span>
                </div>
              </div>

              {/* Form */}
              {submitted ? (
                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-green-800">Message Sent!</h3>
                  <p className="mt-2 text-sm text-green-700">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-green-300 text-green-700 hover:bg-green-100"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField label="Full Name" required>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </FormField>
                    <FormField label="Email" required>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </FormField>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField label="Phone">
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 234 567 890"
                        className="form-input"
                      />
                    </FormField>
                    <FormField label="Subject" required>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="form-input"
                      >
                        <option>General Inquiry</option>
                        <option>Booking Question</option>
                        <option>Custom Itinerary</option>
                        <option>Visa Assistance</option>
                        <option>Feedback</option>
                      </select>
                    </FormField>
                  </div>
                  <FormField label="Message" required>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your dream Dubai trip..."
                      className="form-input resize-none"
                    />
                  </FormField>
                  <Button type="submit" size="lg" className="w-full gold-gradient border-0 text-white shadow-md hover:shadow-lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div id="visa">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Questions?</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Everything you need to know about traveling to Dubai with Desert Luxe.
              </p>

              <div className="mt-6 space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={cn(
                      'overflow-hidden rounded-xl border bg-card transition-all',
                      openFaq === i ? 'border-primary/30 shadow-md' : 'border-border'
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <MessageSquare className={cn('h-4 w-4 shrink-0', openFaq === i ? 'text-accent' : 'text-muted-foreground')} />
                        <span className="text-sm font-semibold text-foreground">{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 text-muted-foreground transition-transform',
                          openFaq === i && 'rotate-180 text-accent'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-300',
                        openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 pl-11 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .form-input {
          height: 2.75rem;
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--muted) / 0.3);
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          font-size: 0.875rem;
          color: hsl(var(--foreground));
          transition: all 0.15s;
        }
        .form-input:focus {
          border-color: hsl(var(--primary));
          outline: none;
          box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2);
        }
        textarea.form-input {
          height: auto;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        select.form-input {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}

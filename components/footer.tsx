'use client';

import Link from 'next/link';
import {
  Plane,
  Hotel,
  Package,
  Compass,
  FileText,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Clock,
} from 'lucide-react';

const footerSections = [
  {
    title: 'Book',
    links: [
      { label: 'Flights', href: '/flights', icon: Plane },
      { label: 'Hotels', href: '/hotels', icon: Hotel },
      { label: 'Packages', href: '/packages', icon: Package },
      { label: 'Activities', href: '/activities', icon: Compass },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Visa Assistance', href: '/about#visa', icon: FileText },
      { label: 'Travel Insurance', href: '/about#contact', icon: FileText },
      { label: 'Airport Transfer', href: '/activities', icon: Plane },
      { label: 'Concierge', href: '/about#contact', icon: Phone },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', icon: Compass },
      { label: 'Contact', href: '/about#contact', icon: Mail },
      { label: 'FAQ', href: '/about#visa', icon: FileText },
      { label: 'Blog', href: '/', icon: FileText },
    ],
  },
];

const socialIcons = [Facebook, Twitter, Instagram, Youtube];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top decorative line */}
      <div className="h-1 gold-gradient" />

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-serif text-xl font-bold sm:text-2xl">
                Get Exclusive Dubai Deals
              </h3>
              <p className="mt-1 text-sm text-white/70">
                Subscribe to our newsletter and never miss a special offer.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md items-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="submit"
                className="gold-gradient h-11 shrink-0 rounded-lg px-5 text-sm font-semibold text-white shadow-md transition-shadow hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-white">
                  Desert Luxe
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Dubai Travel
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Your trusted partner for luxury Dubai travel. We craft unforgettable
              experiences with meticulous attention to every detail.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Sheikh Zayed Road, Downtown Dubai, UAE
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +971 4 123 4567
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                hello@desertluxe.ae
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Available 24/7
              </div>
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent"
                    >
                      <link.icon className="h-3.5 w-3.5 text-accent/60 transition-colors group-hover:text-accent" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Desert Luxe. All rights reserved.
            Crafted with care in Dubai.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-primary"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Plane } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Flights', href: '/flights' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Packages', href: '/packages' },
  { label: 'Activities', href: '/activities' },
  { label: 'Visa', href: '/about#visa' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient shadow-md transition-transform group-hover:scale-105">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-xl font-bold tracking-tight transition-colors',
                scrolled ? 'text-primary' : 'text-white'
              )}
            >
              Desert Luxe
            </span>
            <span
              className={cn(
                'text-[10px] uppercase tracking-[0.2em] transition-colors',
                scrolled ? 'text-muted-foreground' : 'text-white/70'
              )}
            >
              Dubai Travel
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            className={cn(
              'text-sm font-medium transition-colors',
              scrolled
                ? 'text-foreground/70 hover:text-primary'
                : 'text-white/80 hover:text-white'
            )}
          >
            Sign In
          </button>
          <Button
            className="gold-gradient text-white shadow-md hover:shadow-lg transition-shadow border-0"
            size="default"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden',
            scrolled ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-white/98 backdrop-blur-md lg:hidden animate-fade-in">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground/70">
                Sign In
              </button>
              <Button className="gold-gradient flex-1 text-white border-0">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

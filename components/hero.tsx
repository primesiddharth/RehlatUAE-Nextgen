'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plane,
  Hotel,
  Package,
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { heroImage, stats } from '@/lib/data';

const tabs = [
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'hotels', label: 'Hotels', icon: Hotel },
  { id: 'packages', label: 'Packages', icon: Package },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function Hero() {
  const [activeTab, setActiveTab] = useState<TabId>('flights');
  const router = useRouter();

  const handleSearch = () => {
    if (activeTab === 'flights') router.push('/flights');
    else if (activeTab === 'hotels') router.push('/hotels');
    else router.push('/packages');
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dubai skyline at sunset with Burj Khalifa"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-xs font-medium tracking-wide text-white">
              Rated #1 Dubai Travel Agency 2026
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Experience the
            <br />
            <span className="gold-text">Extraordinary</span> in Dubai
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            From the towering Burj Khalifa to golden desert sunsets, book luxury
            flights, five-star stays, and curated experiences — all in one place.
          </p>
        </div>

        {/* Search card */}
        <div className="mt-8 w-full max-w-4xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {/* Tabs */}
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2 rounded-t-xl px-5 py-3 text-sm font-semibold transition-all',
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)]'
                    : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search fields */}
          <div className="rounded-r-2xl rounded-b-2xl bg-white p-4 shadow-2xl sm:p-6">
            {activeTab === 'flights' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SearchField icon={MapPin} label="From" placeholder="Departure city" />
                <SearchField icon={MapPin} label="To" placeholder="Dubai (DXB)" />
                <SearchField icon={Calendar} label="Departure" placeholder="Select date" type="date" />
                <SearchField icon={Users} label="Travelers" placeholder="2 adults" />
              </div>
            )}
            {activeTab === 'hotels' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SearchField icon={MapPin} label="Destination" placeholder="Dubai" />
                <SearchField icon={Calendar} label="Check-in" placeholder="Select date" type="date" />
                <SearchField icon={Calendar} label="Check-out" placeholder="Select date" type="date" />
                <SearchField icon={Users} label="Guests" placeholder="2 adults, 1 room" />
              </div>
            )}
            {activeTab === 'packages' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SearchField icon={MapPin} label="Destination" placeholder="Dubai" />
                <SearchField icon={Calendar} label="Start Date" placeholder="Select date" type="date" />
                <SearchField icon={Users} label="Travelers" placeholder="2 adults" />
                <SearchField icon={Package} label="Duration" placeholder="5 days" />
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <Button
                size="lg"
                onClick={handleSearch}
                className="gold-gradient w-full text-white shadow-md transition-all hover:shadow-lg border-0 sm:w-auto"
              >
                <Search className="mr-2 h-4 w-4" />
                Search {activeTab === 'flights' ? 'Flights' : activeTab === 'hotels' ? 'Hotels' : 'Packages'}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="font-serif text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs uppercase tracking-wider text-white/70 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-10 flex items-center gap-2 text-white/60 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowRight className="h-3.5 w-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function SearchField({
  icon: Icon,
  label,
  placeholder,
  type = 'text',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="group flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
        <input
          type={type}
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Star,
  Clock,
  Check,
  ArrowDownUp,
  Compass,
  Plane,
  Waves,
  Ship,
  Building,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { activities, activityCategories, type Activity } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type SortKey = 'price' | 'rating' | 'reviews';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Adventure: Compass,
  Sightseeing: Building,
  Cruise: Ship,
  'Water Sports': Waves,
  Cultural: Plane,
};

export default function ActivitiesPage() {
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(400);
  const [sortBy, setSortBy] = useState<SortKey>('rating');

  const filtered = useMemo(() => {
    let result = [...activities];
    if (category !== 'All') result = result.filter((a) => a.category === category);
    result = result.filter((a) => a.price <= maxPrice);
    result.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviews - a.reviews;
    });
    return result;
  }, [category, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-24 pb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/12565188/pexels-photo-12565188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Desert safari"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-white">Activities</span>
          </nav>
          <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Things to Do in Dubai
          </h1>
          <p className="mt-1 text-sm text-white/70">
            From desert adventures to helicopter tours — book unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {activityCategories.map((cat) => {
              const Icon = categoryIcons[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors',
                    category === cat
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground/70 hover:bg-muted/70'
                  )}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Max Price</span>
              <input
                type="range"
                min={20}
                max={400}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-28 accent-primary"
              />
              <span className="text-sm font-bold text-primary">${maxPrice}</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium focus:border-primary focus:outline-none"
              >
                <option value="rating">Top rated</option>
                <option value="price">Price (low to high)</option>
                <option value="reviews">Most reviewed</option>
              </select>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">
          Showing <span className="font-bold text-primary">{filtered.length}</span> activities
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm">
            <Compass className="mx-auto h-10 w-10 text-muted-foreground/40" />
            <h3 className="mt-3 font-serif text-lg font-bold text-primary">No activities found</h3>
            <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((act) => (
              <ActivityCard key={act.id} activity={act} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {activity.category}
        </div>
        {activity.badge && (
          <div className="absolute top-3 right-3 rounded-full gold-gradient px-3 py-1 text-xs font-bold text-white shadow-md">
            {activity.badge}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {activity.duration}
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {activity.rating}
            <span className="font-normal text-muted-foreground">({activity.reviews})</span>
          </div>
        </div>

        <h3 className="mt-2 font-serif text-lg font-bold text-primary">{activity.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {activity.description}
        </p>

        {/* Includes */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {activity.includes.slice(0, 3).map((inc) => (
            <span
              key={inc}
              className="inline-flex items-center gap-1 rounded-md bg-muted/50 px-2 py-1 text-[11px] font-medium text-foreground/70"
            >
              <Check className="h-3 w-3 text-green-600" />
              {inc}
            </span>
          ))}
          {activity.includes.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-[11px] font-medium text-muted-foreground">
              +{activity.includes.length - 3} more
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-primary">${activity.price}</span>
              {activity.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">${activity.oldPrice}</span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">per person</span>
          </div>
          <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

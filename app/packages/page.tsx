'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Star,
  Clock,
  MapPin,
  Check,
  X,
  ArrowLeft,
  Calendar,
  Users,
  ArrowDownUp,
  Plane,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { packages, type Package } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type SortKey = 'price' | 'rating' | 'duration';
type TagFilter = 'All' | 'Best Seller' | 'Adventure' | 'Luxury' | 'Cultural' | 'Premium' | 'All-Inclusive';

export default function PackagesPage() {
  const [maxPrice, setMaxPrice] = useState(3000);
  const [tagFilter, setTagFilter] = useState<TagFilter>('All');
  const [sortBy, setSortBy] = useState<SortKey>('price');
  const [selected, setSelected] = useState<Package | null>(null);

  const filtered = useMemo(() => {
    let result = [...packages];
    result = result.filter((p) => p.price <= maxPrice);
    if (tagFilter !== 'All') result = result.filter((p) => p.tag === tagFilter);
    result.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return parseInt(a.duration) - parseInt(b.duration);
    });
    return result;
  }, [maxPrice, tagFilter, sortBy]);

  const tags: TagFilter[] = ['All', 'Best Seller', 'Adventure', 'Luxury', 'Cultural', 'Premium', 'All-Inclusive'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-24 pb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7662956/pexels-photo-7662956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Dubai at night"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-white">Packages</span>
          </nav>
          <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Holiday Packages
          </h1>
          <p className="mt-1 text-sm text-white/70">
            All-inclusive experiences with hotels, tours, and transfers — just pack your bags.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTagFilter(t)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors',
                  tagFilter === t
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground/70 hover:bg-muted/70'
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Price slider */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Max</span>
              <input
                type="range"
                min={100}
                max={3000}
                step={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-28 accent-primary"
              />
              <span className="text-sm font-bold text-primary">${maxPrice}</span>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-2">
              <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium focus:border-primary focus:outline-none"
              >
                <option value="price">Price (low to high)</option>
                <option value="rating">Top rated</option>
                <option value="duration">Shortest duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-muted-foreground">
          Showing <span className="font-bold text-primary">{filtered.length}</span> packages
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm">
            <Calendar className="mx-auto h-10 w-10 text-muted-foreground/40" />
            <h3 className="mt-3 font-serif text-lg font-bold text-primary">No packages found</h3>
            <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onClick={() => setSelected(pkg)} />
            ))}
          </div>
        )}
      </section>

      <Footer />

      {/* Detail modal */}
      {selected && <PackageDetail pkg={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function PackageCard({ pkg, onClick }: { pkg: Package; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {pkg.tag && (
          <div className="absolute top-3 left-3 rounded-full gold-gradient px-3 py-1 text-xs font-bold text-white shadow-md">
            {pkg.tag}
          </div>
        )}
        {pkg.oldPrice && (
          <div className="absolute top-3 right-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-md">
            -{Math.round((1 - pkg.price / pkg.oldPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {pkg.location}
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {pkg.rating}
            <span className="font-normal text-muted-foreground">({pkg.reviews})</span>
          </div>
        </div>

        <h3 className="mt-2 font-serif text-lg font-bold text-primary">{pkg.title}</h3>

        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {pkg.duration}
        </div>

        <ul className="mt-3 space-y-1.5">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-3.5 w-3.5 shrink-0 text-green-600" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-primary">${pkg.price}</span>
              {pkg.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">${pkg.oldPrice}</span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">per person</span>
          </div>
          <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

function PackageDetail({ pkg, onClose }: { pkg: Package; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const [travelers, setTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState('');

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="relative my-8 w-full max-w-4xl rounded-2xl bg-card shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img
            src={pkg.gallery[activeImage]}
            alt={pkg.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            <div className="flex flex-wrap items-center gap-2">
              {pkg.tag && (
                <span className="rounded-full gold-gradient px-3 py-1 text-xs font-bold text-white">
                  {pkg.tag}
                </span>
              )}
              <span className="flex items-center gap-1 text-sm text-white">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {pkg.location}
              </span>
            </div>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">{pkg.title}</h2>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-5 pt-4">
          {pkg.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={cn(
                'h-16 w-24 overflow-hidden rounded-lg border-2 transition-all',
                activeImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
              )}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 p-5 lg:grid-cols-[1fr_320px]">
          {/* Left: details */}
          <div>
            {/* Quick info */}
            <div className="mb-5 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-semibold text-foreground">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold text-foreground">{pkg.rating}</span>
                <span className="text-muted-foreground">({pkg.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <h3 className="font-serif text-lg font-bold text-primary">Overview</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{pkg.description}</p>

            {/* Itinerary */}
            <h3 className="mt-6 font-serif text-lg font-bold text-primary">Itinerary</h3>
            <div className="mt-3 space-y-3">
              {pkg.itinerary.map((item) => (
                <div key={item.day} className="flex gap-4 rounded-xl border border-border p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient font-bold text-white">
                    {item.day}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Day {item.day}: {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusions / Exclusions */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-base font-bold text-primary">Inclusions</h3>
                <ul className="space-y-2">
                  {pkg.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-serif text-base font-bold text-primary">Exclusions</h3>
                <ul className="space-y-2">
                  {pkg.exclusions.map((exc) => (
                    <li key={exc} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: booking sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-border p-5 shadow-md">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-primary">${pkg.price}</span>
                {pkg.oldPrice && (
                  <span className="text-base text-muted-foreground line-through">${pkg.oldPrice}</span>
                )}
              </div>
              <span className="text-xs text-muted-foreground">per person</span>

              {pkg.oldPrice && (
                <div className="mt-3 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                  You save ${pkg.oldPrice - pkg.price} per person
                </div>
              )}

              {/* Date */}
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Travel Date</label>
                <div className="relative mt-1.5">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="mt-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Travelers</label>
                <div className="mt-1.5 flex items-center gap-2">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="h-10 w-10 rounded-lg border border-border text-lg font-bold text-primary hover:bg-muted"
                  >
                    -
                  </button>
                  <div className="flex h-10 flex-1 items-center justify-center rounded-lg border border-border text-sm font-semibold">
                    {travelers} {travelers === 1 ? 'person' : 'people'}
                  </div>
                  <button
                    onClick={() => setTravelers(Math.min(10, travelers + 1))}
                    className="h-10 w-10 rounded-lg border border-border text-lg font-bold text-primary hover:bg-muted"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mt-4 border-t border-border pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${pkg.price * travelers}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Taxes & fees</span>
                  <span className="font-semibold">${Math.round(pkg.price * travelers * 0.1)}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-bold text-primary">Total</span>
                  <span className="font-serif text-xl font-bold text-primary">
                    ${pkg.price * travelers + Math.round(pkg.price * travelers * 0.1)}
                  </span>
                </div>
              </div>

              <Button className="mt-4 w-full gold-gradient border-0 text-white shadow-md hover:shadow-lg">
                Book Now
              </Button>
              <p className="mt-2 text-center text-[10px] text-muted-foreground">
                Free cancellation up to 14 days before departure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

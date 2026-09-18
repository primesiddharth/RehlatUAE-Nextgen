'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Hotel as HotelIcon,
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  Filter,
  X,
  ArrowDownUp,
  Check,
  Wifi,
  Waves,
  Dumbbell,
  Utensils,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { hotels, hotelAreas, allAmenities, type Hotel } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type SortKey = 'price' | 'rating' | 'stars';

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Free WiFi': Wifi,
  Pool: Waves,
  'Private beach': Waves,
  Gym: Dumbbell,
  Restaurant: Utensils,
  Spa: Sparkles,
};

export default function HotelsPage() {
  const [destination, setDestination] = useState('Dubai');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 adults, 1 room');

  const [maxPrice, setMaxPrice] = useState(1500);
  const [minRating, setMinRating] = useState(0);
  const [minStars, setMinStars] = useState(0);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('price');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    result = result.filter((h) => h.pricePerNight <= maxPrice);
    result = result.filter((h) => h.rating >= minRating);
    result = result.filter((h) => h.stars >= minStars);

    if (selectedAreas.length > 0) {
      result = result.filter((h) => selectedAreas.includes(h.area));
    }

    if (selectedAmenities.length > 0) {
      result = result.filter((h) =>
        selectedAmenities.every((a) => h.amenities.includes(a))
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'price') return a.pricePerNight - b.pricePerNight;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.stars - a.stars;
    });

    return result;
  }, [maxPrice, minRating, minStars, selectedAreas, selectedAmenities, sortBy]);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const toggleAmenity = (a: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  };

  const clearFilters = () => {
    setMaxPrice(1500);
    setMinRating(0);
    setMinStars(0);
    setSelectedAreas([]);
    setSelectedAmenities([]);
    setSortBy('price');
  };

  const activeFilterCount =
    (maxPrice < 1500 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (minStars > 0 ? 1 : 0) +
    (selectedAreas.length > 0 ? 1 : 0) +
    (selectedAmenities.length > 0 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero / search */}
      <section className="relative bg-primary pt-24 pb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7974841/pexels-photo-7974841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Luxury hotel pool"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-xs text-white/60">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-white">Hotels</span>
            </nav>
            <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Find Your Dubai Hotel
            </h1>
            <p className="mt-1 text-sm text-white/70">
              From five-star icons to hidden gems — book the perfect stay.
            </p>
          </div>

          {/* Search form */}
          <div className="rounded-2xl bg-white p-4 shadow-xl sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                size="lg"
                className="gold-gradient border-0 text-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Search className="mr-2 h-4 w-4" />
                Search Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results + filters */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Filters sidebar */}
          <aside className="lg:w-72 shrink-0">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold shadow-sm lg:hidden"
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-white">
                    {activeFilterCount}
                  </span>
                )}
              </span>
              <X className={cn('h-4 w-4 transition-transform', filtersOpen && 'rotate-45')} />
            </button>

            <div className={cn('mt-4 lg:mt-0', filtersOpen ? 'block' : 'hidden lg:block')}>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-primary">Filters</h3>
                  {activeFilterCount > 0 && (
                    <button onClick={clearFilters} className="text-xs font-medium text-accent hover:underline">
                      Clear all
                    </button>
                  )}
                </div>

                {/* Star rating */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hotel Stars</h4>
                  <div className="flex gap-2">
                    {[0, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        onClick={() => setMinStars(s)}
                        className={cn(
                          'flex-1 rounded-lg py-2 text-xs font-medium transition-colors',
                          minStars === s
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground/70 hover:bg-muted/70'
                        )}
                      >
                        {s === 0 ? 'Any' : `${s}+★`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest rating */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Guest Rating</h4>
                  <div className="flex gap-2">
                    {[0, 4, 4.5, 4.8].map((r) => (
                      <button
                        key={r}
                        onClick={() => setMinRating(r)}
                        className={cn(
                          'flex-1 rounded-lg py-2 text-xs font-medium transition-colors',
                          minRating === r
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground/70 hover:bg-muted/70'
                        )}
                      >
                        {r === 0 ? 'Any' : `${r}+`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Max price */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Max Price / Night</h4>
                    <span className="text-sm font-bold text-primary">${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={1500}
                    step={50}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Area */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Area</h4>
                  <div className="space-y-2">
                    {hotelAreas.map((area) => (
                      <label key={area} className="flex cursor-pointer items-center gap-2.5 text-sm">
                        <input
                          type="checkbox"
                          checked={selectedAreas.includes(area)}
                          onChange={() => toggleArea(area)}
                          className="h-4 w-4 rounded accent-primary"
                        />
                        {area}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amenities</h4>
                  <div className="space-y-2">
                    {allAmenities.map((a) => (
                      <label key={a} className="flex cursor-pointer items-center gap-2.5 text-sm">
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(a)}
                          onChange={() => toggleAmenity(a)}
                          className="h-4 w-4 rounded accent-primary"
                        />
                        {a}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-serif text-xl font-bold text-primary">
                  {filteredHotels.length} {filteredHotels.length === 1 ? 'hotel' : 'hotels'} in Dubai
                </h2>
                {destination && (
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {destination} · {guests}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium focus:border-primary focus:outline-none"
                >
                  <option value="price">Sort: Price (low to high)</option>
                  <option value="rating">Sort: Top rated</option>
                  <option value="stars">Sort: Star rating</option>
                </select>
              </div>
            </div>

            {filteredHotels.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm">
                <HotelIcon className="mx-auto h-10 w-10 text-muted-foreground/40" />
                <h3 className="mt-3 font-serif text-lg font-bold text-primary">No hotels found</h3>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters.</p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="group grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md sm:grid-cols-[280px_1fr]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:h-full">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {hotel.badge && (
          <div className="absolute top-3 left-3 rounded-full gold-gradient px-3 py-1 text-xs font-bold text-white shadow-md">
            {hotel.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 sm:p-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center gap-1">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-accent text-accent" />
              ))}
            </div>
            <h3 className="font-serif text-lg font-bold text-primary sm:text-xl">{hotel.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {hotel.area}
            </div>
          </div>
          <div className="flex flex-col items-end rounded-lg bg-muted/40 px-3 py-1.5">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="font-bold text-primary">{hotel.rating}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{hotel.reviews} reviews</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hotel.amenities.slice(0, 5).map((a) => {
            const Icon = amenityIcons[a];
            return (
              <span
                key={a}
                className="inline-flex items-center gap-1 rounded-md bg-muted/50 px-2 py-1 text-[11px] font-medium text-foreground/70"
              >
                {Icon && <Icon className="h-3 w-3 text-primary" />}
                {a}
              </span>
            );
          })}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-primary">${hotel.pricePerNight}</span>
              {hotel.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">${hotel.oldPrice}</span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">per night · taxes included</span>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            View Deal
          </Button>
        </div>
      </div>
    </div>
  );
}

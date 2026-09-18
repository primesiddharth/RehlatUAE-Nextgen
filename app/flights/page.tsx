'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Search,
  Clock,
  ArrowRight,
  Star,
  Filter,
  X,
  ArrowDownUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { flights, airlines, type Flight } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type SortKey = 'price' | 'duration' | 'departure';
type CabinFilter = 'All' | 'Economy' | 'Business' | 'First';

export default function FlightsPage() {
  const [fromCity, setFromCity] = useState('');
  const [toCity] = useState('Dubai');
  const [departDate, setDepartDate] = useState('');
  const [passengers, setPassengers] = useState('1 Adult');

  const [maxPrice, setMaxPrice] = useState(1500);
  const [maxStops, setMaxStops] = useState(2);
  const [cabinFilter, setCabinFilter] = useState<CabinFilter>('All');
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('price');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searched, setSearched] = useState(false);

  const filteredFlights = useMemo(() => {
    let result = [...flights];

    if (fromCity.trim()) {
      const q = fromCity.trim().toLowerCase();
      result = result.filter(
        (f) =>
          f.fromCity.toLowerCase().includes(q) ||
          f.fromCode.toLowerCase().includes(q)
      );
    }

    if (cabinFilter !== 'All') {
      result = result.filter((f) => f.cabin === cabinFilter);
    }

    result = result.filter((f) => f.price <= maxPrice);
    result = result.filter((f) => f.stops <= maxStops);

    if (selectedAirlines.length > 0) {
      result = result.filter((f) => selectedAirlines.includes(f.airline.code));
    }

    result.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'duration') return parseDuration(a.duration) - parseDuration(b.duration);
      return a.fromTime.localeCompare(b.fromTime);
    });

    return result;
  }, [fromCity, cabinFilter, maxPrice, maxStops, selectedAirlines, sortBy]);

  const toggleAirline = (code: string) => {
    setSelectedAirlines((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const clearFilters = () => {
    setMaxPrice(1500);
    setMaxStops(2);
    setCabinFilter('All');
    setSelectedAirlines([]);
    setSortBy('price');
  };

  const activeFilterCount =
    (cabinFilter !== 'All' ? 1 : 0) +
    (maxPrice < 1500 ? 1 : 0) +
    (maxStops < 2 ? 1 : 0) +
    (selectedAirlines.length > 0 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero / search */}
      <section className="relative bg-primary pt-24 pb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Dubai twilight"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-xs text-white/60">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-white">Flights</span>
            </nav>
            <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Search Flights to Dubai
            </h1>
            <p className="mt-1 text-sm text-white/70">
              Compare prices across top airlines and book your perfect flight.
            </p>
          </div>

          {/* Search form */}
          <div className="rounded-2xl bg-white p-4 shadow-xl sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    placeholder="City or airport"
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    value={toCity}
                    readOnly
                    className="h-11 w-full rounded-lg border border-border bg-muted/50 pl-9 pr-3 text-sm text-foreground"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Departure</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                  <input
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                size="lg"
                onClick={() => setSearched(true)}
                className="gold-gradient border-0 text-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Search className="mr-2 h-4 w-4" />
                Search Flights
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
            {/* Mobile filter toggle */}
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
                    <button
                      onClick={clearFilters}
                      className="text-xs font-medium text-accent hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Cabin class */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cabin Class</h4>
                  <div className="flex flex-wrap gap-2">
                    {(['All', 'Economy', 'Business', 'First'] as CabinFilter[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCabinFilter(c)}
                        className={cn(
                          'rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                          cabinFilter === c
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground/70 hover:bg-muted/70'
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Max stops */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stops</h4>
                  <div className="flex gap-2">
                    {[0, 1, 2].map((s) => (
                      <button
                        key={s}
                        onClick={() => setMaxStops(s)}
                        className={cn(
                          'flex-1 rounded-lg py-2 text-xs font-medium transition-colors',
                          maxStops === s
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground/70 hover:bg-muted/70'
                        )}
                      >
                        {s === 0 ? 'Nonstop' : `${s} stop${s > 1 ? 's' : ''}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Max price */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Max Price</h4>
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

                {/* Airlines */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Airlines</h4>
                  <div className="space-y-2">
                    {airlines.map((a) => (
                      <label
                        key={a.code}
                        className="flex cursor-pointer items-center gap-2.5 text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAirlines.includes(a.code)}
                          onChange={() => toggleAirline(a.code)}
                          className="h-4 w-4 rounded accent-primary"
                        />
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary">
                          {a.logo}
                        </span>
                        {a.name}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results header */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-serif text-xl font-bold text-primary">
                  {filteredFlights.length} {filteredFlights.length === 1 ? 'flight' : 'flights'} found
                </h2>
                {(fromCity || departDate) && (
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {fromCity && <span>{fromCity} → Dubai</span>}
                    {departDate && <span> · {departDate}</span>}
                  </p>
                )}
              </div>
              {/* Sort */}
              <div className="flex items-center gap-2">
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium focus:border-primary focus:outline-none"
                >
                  <option value="price">Sort: Price (low to high)</option>
                  <option value="duration">Sort: Duration (shortest)</option>
                  <option value="departure">Sort: Departure time</option>
                </select>
              </div>
            </div>

            {/* Flight list */}
            {filteredFlights.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm">
                <Plane className="mx-auto h-10 w-10 text-muted-foreground/40" />
                <h3 className="mt-3 font-serif text-lg font-bold text-primary">No flights found</h3>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters or search criteria.</p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredFlights.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
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

function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Airline */}
        <div className="flex items-center gap-3 sm:w-40 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
            {flight.airline.logo}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-foreground">{flight.airline.name}</div>
            <div className="text-xs text-muted-foreground">{flight.flightNo}</div>
          </div>
        </div>

        {/* Route */}
        <div className="flex flex-1 items-center gap-3">
          {/* Departure */}
          <div className="text-center">
            <div className="font-serif text-lg font-bold text-primary">{flight.fromTime}</div>
            <div className="text-xs font-medium text-foreground">{flight.fromCode}</div>
            <div className="text-[10px] text-muted-foreground">{flight.fromCity}</div>
          </div>

          {/* Path */}
          <div className="flex flex-1 flex-col items-center">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              {flight.duration}
            </div>
            <div className="relative my-1 h-px w-full bg-border">
              <div className="absolute -top-1 left-0 h-2 w-2 rounded-full border border-primary bg-card" />
              <div className="absolute -top-1 right-0 h-2 w-2 rounded-full border border-primary bg-card" />
              {flight.stops > 0 && (
                <div className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
              )}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop · ${flight.stopCities.join(', ')}`}
            </div>
          </div>

          {/* Arrival */}
          <div className="text-center">
            <div className="font-serif text-lg font-bold text-primary">{flight.toTime}</div>
            <div className="text-xs font-medium text-foreground">{flight.toCode}</div>
            <div className="text-[10px] text-muted-foreground">{flight.toCity}</div>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3 border-t border-border pt-3 sm:border-t-0 sm:pt-0 sm:w-44 sm:flex-col sm:items-end">
          <div className="sm:text-right">
            <div className="font-serif text-2xl font-bold text-primary">${flight.price}</div>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              {flight.cabin} · {flight.seatsLeft} seats left
            </div>
          </div>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90"
          >
            Select
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function parseDuration(d: string): number {
  const match = d.match(/(\d+)h\s*(\d+)?m?/);
  if (!match) return 0;
  return parseInt(match[1]) * 60 + (match[2] ? parseInt(match[2]) : 0);
}

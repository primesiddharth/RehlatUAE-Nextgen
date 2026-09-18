'use client';

import { ArrowUpRight } from 'lucide-react';
import { destinations } from '@/lib/data';

export function Destinations() {
  return (
    <section id="activities" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Discover Dubai
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              Popular Destinations
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              From record-breaking skyscrapers to golden dunes and historic creeks —
              explore the wonders that make Dubai unforgettable.
            </p>
          </div>
          <a
            href="#packages"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View all destinations
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, idx) => (
            <a
              key={dest.id}
              href="#packages"
              className="group relative block overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Tours badge */}
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  {dest.tours} tours
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                    {dest.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

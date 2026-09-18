'use client';

import { Star, Clock, MapPin, Check } from 'lucide-react';
import { packages } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Packages() {
  return (
    <section id="packages" className="bg-gradient-to-b from-muted/40 to-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Curated for You
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Featured Travel Packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Handpicked experiences with the best value. All packages include
            premium accommodation, guided tours, and 24/7 support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Location + rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    {pkg.rating}
                    <span className="font-normal text-muted-foreground">
                      ({pkg.reviews})
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-2 font-serif text-lg font-bold text-primary">
                  {pkg.title}
                </h3>

                {/* Duration */}
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {pkg.duration}
                </div>

                {/* Highlights */}
                <ul className="mt-3 space-y-1.5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-3.5 w-3.5 shrink-0 text-green-600" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-auto flex items-center justify-between pt-5">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl font-bold text-primary">
                        ${pkg.price}
                      </span>
                      {pkg.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${pkg.oldPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-primary px-6 py-10 text-center sm:px-12">
          <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="max-w-xl text-sm text-white/80 sm:text-base">
            Our travel experts will craft a personalized itinerary just for you.
            Tell us your preferences and we&apos;ll handle the rest.
          </p>
          <Button
            size="lg"
            className="gold-gradient border-0 text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

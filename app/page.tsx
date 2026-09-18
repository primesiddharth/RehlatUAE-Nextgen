import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Destinations } from '@/components/destinations';
import { Packages } from '@/components/packages';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="smooth-scroll min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
      </main>
      <Footer />
    </div>
  );
}

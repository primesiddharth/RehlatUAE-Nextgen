import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Desert Luxe — Dubai Luxury Travel & Booking',
  description:
    'Book luxury flights, five-star hotels, curated packages, desert safaris, and visa services for Dubai. Your gateway to the extraordinary.',
  openGraph: {
    title: 'Desert Luxe — Dubai Luxury Travel & Booking',
    description:
      'Book luxury flights, five-star hotels, curated packages, desert safaris, and visa services for Dubai.',
    images: [
      {
        url: 'https://images.pexels.com/photos/19960106/pexels-photo-19960106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.pexels.com/photos/19960106/pexels-photo-19960106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  tours: number;
}

export interface Package {
  id: string;
  title: string;
  location: string;
  image: string;
  gallery: string[];
  price: number;
  oldPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  tag?: string;
  highlights: string[];
  description: string;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
}

export const destinations: Destination[] = [
  {
    id: 'burj-khalifa',
    name: 'Burj Khalifa',
    description: 'Soar to the 148th floor of the world’s tallest building.',
    image:
      'https://images.pexels.com/photos/19960106/pexels-photo-19960106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tours: 24,
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    description: 'Iconic man-made island with Atlantis The Palm resort.',
    image:
      'https://images.pexels.com/photos/33710116/pexels-photo-33710116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tours: 18,
  },
  {
    id: 'desert-safari',
    name: 'Desert Safari',
    description: 'Dune bashing, camel rides & BBQ under the stars.',
    image:
      'https://images.pexels.com/photos/12565188/pexels-photo-12565188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tours: 32,
  },
  {
    id: 'burj-al-arab',
    name: 'Burj Al Arab',
    description: 'The world’s most luxurious sail-shaped hotel.',
    image:
      'https://images.pexels.com/photos/17865575/pexels-photo-17865575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tours: 12,
  },
  {
    id: 'dubai-marina',
    name: 'Dubai Marina',
    description: 'Stunning waterfront promenade & yacht cruises.',
    image:
      'https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tours: 21,
  },
  {
    id: 'dubai-creek',
    name: 'Dubai Creek',
    description: 'Historic abra rides through old Dubai’s heart.',
    image:
      'https://images.pexels.com/photos/33481935/pexels-photo-33481935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tours: 15,
  },
];

export const packages: Package[] = [
  {
    id: '1',
    title: 'Dubai Luxury Escape',
    location: 'Downtown Dubai',
    image:
      'https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19960106/pexels-photo-19960106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7662956/pexels-photo-7662956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14750447/pexels-photo-14750447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 1299,
    oldPrice: 1799,
    duration: '5 Days / 4 Nights',
    rating: 4.9,
    reviews: 342,
    tag: 'Best Seller',
    highlights: ['Burj Khalifa access', '5-star hotel stay', 'Dhow cruise dinner'],
    description:
      'Experience the pinnacle of Dubai luxury with a 5-star downtown stay, VIP access to the Burj Khalifa observation deck, a romantic Dhow cruise dinner on Dubai Marina, and a full-day Desert Safari with BBQ. Perfect for first-time visitors who want the very best.',
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', description: 'Airport pickup in luxury vehicle, check-in to 5-star downtown hotel, evening at leisure.' },
      { day: 2, title: 'Burj Khalifa & Dubai Mall', description: 'VIP access to Burj Khalifa At The Top SKY, explore Dubai Mall, Dubai Fountain show.' },
      { day: 3, title: 'Desert Safari', description: 'Morning dune bashing, camel ride, sandboarding. Evening Bedouin camp with BBQ dinner and belly dance show.' },
      { day: 4, title: 'Dhow Cruise & Marina', description: 'Day at leisure. Evening Dhow cruise dinner along Dubai Marina with live entertainment.' },
      { day: 5, title: 'Departure', description: 'Breakfast, checkout, and private transfer to airport.' },
    ],
    inclusions: ['4 nights 5-star hotel', 'Daily breakfast', 'Airport transfers', 'Burj Khalifa SKY tickets', 'Desert safari with BBQ', 'Dhow cruise dinner'],
    exclusions: ['International flights', 'Visa fees', 'Lunch & dinner (except BBQ & cruise)', 'Personal expenses', 'Travel insurance'],
  },
  {
    id: '2',
    title: 'Desert Safari Adventure',
    location: 'Dubai Desert Conservation Reserve',
    image:
      'https://images.pexels.com/photos/2417260/pexels-photo-2417260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/2417260/pexels-photo-2417260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12565188/pexels-photo-12565188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8003131/pexels-photo-8003131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7817185/pexels-photo-7817185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 349,
    oldPrice: 449,
    duration: '2 Days / 1 Night',
    rating: 4.8,
    reviews: 518,
    tag: 'Adventure',
    highlights: ['Dune bashing', 'Camel riding', 'Bedouin BBQ dinner'],
    description:
      'Escape the city for an authentic Arabian desert experience. Thrill through golden dunes in a 4x4, ride camels at sunset, and spend the night in a luxury desert camp under the stars with a traditional BBQ dinner and live entertainment.',
    itinerary: [
      { day: 1, title: 'Dune Bashing & Camp', description: 'Pickup from hotel, 45-min dune bashing session, camel ride at sunset, arrive at Bedouin camp. BBQ dinner with live Tanoura & belly dance.' },
      { day: 2, title: 'Sunrise & Return', description: 'Sunrise camel trek, breakfast at camp, sandboarding session, return to hotel by noon.' },
    ],
    inclusions: ['Desert camp overnight stay', '4x4 dune bashing', 'Camel ride', 'BBQ dinner & breakfast', 'Live entertainment', 'Sandboarding'],
    exclusions: ['Hotel stay in city', 'Visa fees', 'Personal expenses', 'Travel insurance'],
  },
  {
    id: '3',
    title: 'Palm Jumeirah Getaway',
    location: 'Palm Jumeirah',
    image:
      'https://images.pexels.com/photos/17865606/pexels-photo-17865606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/17865606/pexels-photo-17865606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33710116/pexels-photo-33710116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6178937/pexels-photo-6178937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14915303/pexels-photo-14915303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 899,
    oldPrice: 1199,
    duration: '4 Days / 3 Nights',
    rating: 4.9,
    reviews: 267,
    tag: 'Luxury',
    highlights: ['Atlantis Aquaventure', 'Private beach access', 'Fine dining'],
    description:
      'Indulge in the ultimate Palm Jumeirah experience with a stay at Atlantis The Palm, unlimited access to Aquaventure waterpark, private beach, and fine dining at award-winning restaurants. A tropical paradise in the heart of Dubai.',
    itinerary: [
      { day: 1, title: 'Arrival at Atlantis', description: 'Private transfer, check-in to Atlantis The Palm, evening at Aquaventure waterpark.' },
      { day: 2, title: 'Waterpark & Dolphin Bay', description: 'Full day at Aquaventure, dolphin encounter, lunch at Wavehouse.' },
      { day: 3, title: 'Spa & Fine Dining', description: 'Morning spa treatment, afternoon private beach, dinner at Nobu.' },
      { day: 4, title: 'Departure', description: 'Breakfast, checkout, transfer to airport.' },
    ],
    inclusions: ['3 nights at Atlantis The Palm', 'Daily breakfast', 'Aquaventure unlimited access', 'Dolphin encounter', 'Private beach access', 'Airport transfers'],
    exclusions: ['International flights', 'Visa fees', 'Dinners (except Nobu)', 'Personal expenses', 'Travel insurance'],
  },
  {
    id: '4',
    title: 'Old Dubai Cultural Tour',
    location: 'Dubai Creek & Al Fahidi',
    image:
      'https://images.pexels.com/photos/31146786/pexels-photo-31146786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/31146786/pexels-photo-31146786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33481935/pexels-photo-33481935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20542413/pexels-photo-20542413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33779634/pexels-photo-33779634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 199,
    duration: '1 Day',
    rating: 4.7,
    reviews: 401,
    tag: 'Cultural',
    highlights: ['Gold & Spice Souk', 'Abra boat ride', 'Museum visit'],
    description:
      'Step back in time and discover the rich heritage of old Dubai. Cross the historic Dubai Creek on a traditional abra boat, wander through the glittering Gold Souk and fragrant Spice Souk, and explore the Al Fahidi Historic District and Dubai Museum.',
    itinerary: [
      { day: 1, title: 'Old Dubai Explorer', description: 'Hotel pickup, abra boat crossing, Gold Souk visit, Spice Souk, Al Fahidi district, Dubai Museum, traditional Emirati lunch, drop-off.' },
    ],
    inclusions: ['Professional guide', 'Abra boat ride', 'Museum entry', 'Traditional lunch', 'Hotel pickup & drop-off'],
    exclusions: ['Personal purchases at souks', 'Gratuities', 'Travel insurance'],
  },
  {
    id: '5',
    title: 'Marina & Yacht Experience',
    location: 'Dubai Marina',
    image:
      'https://images.pexels.com/photos/4471207/pexels-photo-4471207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/4471207/pexels-photo-4471207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28350363/pexels-photo-28350363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 599,
    oldPrice: 749,
    duration: '3 Days / 2 Nights',
    rating: 4.8,
    reviews: 189,
    tag: 'Premium',
    highlights: ['Private yacht tour', 'Marina walk', 'Helipad dinner'],
    description:
      'Experience Dubai from the water with a private yacht tour through the Marina, a sunset cruise past the Ain Dubai, and an exclusive dinner at a helipad restaurant. Luxury accommodation at a Marina-front hotel included.',
    itinerary: [
      { day: 1, title: 'Marina Arrival', description: 'Check-in to Marina hotel, evening Marina Walk stroll, dinner at waterfront restaurant.' },
      { day: 2, title: 'Private Yacht & Helipad', description: 'Morning private yacht tour (3hrs), afternoon at leisure, evening helipad dinner experience.' },
      { day: 3, title: 'Departure', description: 'Breakfast, checkout, transfer to airport.' },
    ],
    inclusions: ['2 nights Marina hotel', 'Private yacht tour (3hrs)', 'Helipad dinner', 'Daily breakfast', 'Airport transfers'],
    exclusions: ['International flights', 'Visa fees', 'Lunches', 'Personal expenses', 'Travel insurance'],
  },
  {
    id: '6',
    title: 'Ultimate Dubai Combo',
    location: 'Multiple Locations',
    image:
      'https://images.pexels.com/photos/7662956/pexels-photo-7662956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/7662956/pexels-photo-7662956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2417260/pexels-photo-2417260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17865606/pexels-photo-17865606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    price: 2199,
    oldPrice: 2999,
    duration: '7 Days / 6 Nights',
    rating: 5.0,
    reviews: 156,
    tag: 'All-Inclusive',
    highlights: ['City + desert + sea', 'VIP airport transfers', 'Concierge service'],
    description:
      'The complete Dubai experience in one package. From the Burj Khalifa and Dubai Mall to a desert safari, Palm Jumeirah waterpark, private yacht, old Dubai cultural tour, and a Dhow cruise. Includes VIP transfers and a personal concierge throughout your stay.',
    itinerary: [
      { day: 1, title: 'VIP Arrival', description: 'VIP airport fast-track, luxury transfer, check-in to 5-star hotel, welcome dinner.' },
      { day: 2, title: 'Burj Khalifa & Dubai Mall', description: 'SKY lounge access, Dubai Mall, aquarium, evening fountain show.' },
      { day: 3, title: 'Desert Safari', description: 'Full-day desert safari with dune bashing, camel ride, sandboarding, BBQ dinner.' },
      { day: 4, title: 'Palm Jumeirah & Aquaventure', description: 'Atlantis Aquaventure, dolphin encounter, private beach, fine dining.' },
      { day: 5, title: 'Old Dubai & Creek', description: 'Abra boat, Gold Souk, Spice Souk, Dubai Museum, traditional lunch.' },
      { day: 6, title: 'Private Yacht & Dhow Cruise', description: 'Morning yacht tour, evening Dhow cruise dinner on the Marina.' },
      { day: 7, title: 'Departure', description: 'Breakfast, checkout, VIP airport transfer.' },
    ],
    inclusions: ['6 nights 5-star hotel', 'Daily breakfast + 3 dinners', 'VIP airport transfers', 'Personal concierge', 'All activities & tours', 'Burj Khalifa SKY tickets'],
    exclusions: ['International flights', 'Visa fees', 'Some lunches', 'Personal expenses', 'Travel insurance'],
  },
];

export const heroImage =
  'https://images.pexels.com/photos/36813102/pexels-photo-36813102.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export const stats = [
  { label: 'Happy Travelers', value: '50K+' },
  { label: 'Destinations', value: '120+' },
  { label: 'Years of Service', value: '15' },
  { label: 'Partner Hotels', value: '500+' },
];

// ─── Flights ──────────────────────────────────────────────

export interface Airline {
  code: string;
  name: string;
  logo: string;
}

export const airlines: Airline[] = [
  { code: 'EK', name: 'Emirates', logo: 'EK' },
  { code: 'EY', name: 'Etihad Airways', logo: 'EY' },
  { code: 'QR', name: 'Qatar Airways', logo: 'QR' },
  { code: 'TK', name: 'Turkish Airlines', logo: 'TK' },
  { code: 'LH', name: 'Lufthansa', logo: 'LH' },
  { code: 'BA', name: 'British Airways', logo: 'BA' },
];

export interface Flight {
  id: string;
  airline: Airline;
  flightNo: string;
  fromCity: string;
  fromCode: string;
  fromTime: string;
  toCity: string;
  toCode: string;
  toTime: string;
  duration: string;
  stops: number;
  stopCities: string[];
  price: number;
  cabin: 'Economy' | 'Business' | 'First';
  seatsLeft: number;
}

export const flights: Flight[] = [
  {
    id: 'f1',
    airline: airlines[0],
    flightNo: 'EK 002',
    fromCity: 'London',
    fromCode: 'LHR',
    fromTime: '08:30',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '19:45',
    duration: '7h 15m',
    stops: 0,
    stopCities: [],
    price: 489,
    cabin: 'Economy',
    seatsLeft: 12,
  },
  {
    id: 'f2',
    airline: airlines[0],
    flightNo: 'EK 004',
    fromCity: 'London',
    fromCode: 'LHR',
    fromTime: '13:15',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '00:30',
    duration: '7h 15m',
    stops: 0,
    stopCities: [],
    price: 525,
    cabin: 'Economy',
    seatsLeft: 8,
  },
  {
    id: 'f3',
    airline: airlines[1],
    flightNo: 'EY 020',
    fromCity: 'London',
    fromCode: 'LHR',
    fromTime: '09:00',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '20:10',
    duration: '8h 10m',
    stops: 1,
    stopCities: ['Abu Dhabi'],
    price: 412,
    cabin: 'Economy',
    seatsLeft: 24,
  },
  {
    id: 'f4',
    airline: airlines[2],
    flightNo: 'QR 008',
    fromCity: 'London',
    fromCode: 'LHR',
    fromTime: '14:45',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '02:15',
    duration: '9h 30m',
    stops: 1,
    stopCities: ['Doha'],
    price: 399,
    cabin: 'Economy',
    seatsLeft: 31,
  },
  {
    id: 'f5',
    airline: airlines[0],
    flightNo: 'EK 032',
    fromCity: 'New York',
    fromCode: 'JFK',
    fromTime: '22:20',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '19:10',
    duration: '12h 50m',
    stops: 0,
    stopCities: [],
    price: 899,
    cabin: 'Business',
    seatsLeft: 5,
  },
  {
    id: 'f6',
    airline: airlines[3],
    flightNo: 'TK 076',
    fromCity: 'New York',
    fromCode: 'JFK',
    fromTime: '16:30',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '17:45',
    duration: '15h 15m',
    stops: 1,
    stopCities: ['Istanbul'],
    price: 749,
    cabin: 'Business',
    seatsLeft: 9,
  },
  {
    id: 'f7',
    airline: airlines[0],
    flightNo: 'EK 056',
    fromCity: 'Mumbai',
    fromCode: 'BOM',
    fromTime: '10:15',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '11:45',
    duration: '3h 00m',
    stops: 0,
    stopCities: [],
    price: 189,
    cabin: 'Economy',
    seatsLeft: 42,
  },
  {
    id: 'f8',
    airline: airlines[1],
    flightNo: 'EY 234',
    fromCity: 'Mumbai',
    fromCode: 'BOM',
    fromTime: '04:05',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '07:20',
    duration: '5h 45m',
    stops: 1,
    stopCities: ['Abu Dhabi'],
    price: 165,
    cabin: 'Economy',
    seatsLeft: 18,
  },
  {
    id: 'f9',
    airline: airlines[4],
    flightNo: 'LH 630',
    fromCity: 'Frankfurt',
    fromCode: 'FRA',
    fromTime: '11:10',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '20:25',
    duration: '6h 15m',
    stops: 0,
    stopCities: [],
    price: 355,
    cabin: 'Economy',
    seatsLeft: 27,
  },
  {
    id: 'f10',
    airline: airlines[5],
    flightNo: 'BA 109',
    fromCity: 'London',
    fromCode: 'LHR',
    fromTime: '16:00',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '03:10',
    duration: '7h 10m',
    stops: 0,
    stopCities: [],
    price: 469,
    cabin: 'First',
    seatsLeft: 3,
  },
  {
    id: 'f11',
    airline: airlines[0],
    flightNo: 'EK 072',
    fromCity: 'Paris',
    fromCode: 'CDG',
    fromTime: '11:25',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '20:35',
    duration: '6h 10m',
    stops: 0,
    stopCities: [],
    price: 445,
    cabin: 'Business',
    seatsLeft: 7,
  },
  {
    id: 'f12',
    airline: airlines[2],
    flightNo: 'QR 116',
    fromCity: 'Frankfurt',
    fromCode: 'FRA',
    fromTime: '15:20',
    toCity: 'Dubai',
    toCode: 'DXB',
    toTime: '01:35',
    duration: '9h 15m',
    stops: 1,
    stopCities: ['Doha'],
    price: 338,
    cabin: 'Economy',
    seatsLeft: 35,
  },
];

// ─── Hotels ───────────────────────────────────────────────

export interface Hotel {
  id: string;
  name: string;
  area: string;
  image: string;
  stars: number;
  rating: number;
  reviews: number;
  pricePerNight: number;
  oldPrice?: number;
  amenities: string[];
  badge?: string;
}

export const hotels: Hotel[] = [
  {
    id: 'h1',
    name: 'Atlantis The Palm',
    area: 'Palm Jumeirah',
    image:
      'https://images.pexels.com/photos/6178937/pexels-photo-6178937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 5,
    rating: 4.9,
    reviews: 2841,
    pricePerNight: 680,
    oldPrice: 850,
    amenities: ['Private beach', 'Aquaventure waterpark', 'Spa', 'Free WiFi', 'Pool'],
    badge: 'Luxury',
  },
  {
    id: 'h2',
    name: 'Burj Al Arab',
    area: 'Jumeirah Beach',
    image:
      'https://images.pexels.com/photos/17865575/pexels-photo-17865575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 5,
    rating: 5.0,
    reviews: 1923,
    pricePerNight: 1200,
    amenities: ['Butler service', 'Private pool suite', 'Helipad', 'Spa', 'Free WiFi'],
    badge: 'Ultra Luxury',
  },
  {
    id: 'h3',
    name: 'Atlantis The Royal',
    area: 'Palm Jumeirah',
    image:
      'https://images.pexels.com/photos/14915303/pexels-photo-14915303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 5,
    rating: 4.9,
    reviews: 1567,
    pricePerNight: 950,
    oldPrice: 1100,
    amenities: ['Rooftop infinity pool', 'Michelin dining', 'Spa', 'Free WiFi', 'Beach'],
    badge: 'New',
  },
  {
    id: 'h4',
    name: 'Marina Bay Resort',
    area: 'Dubai Marina',
    image:
      'https://images.pexels.com/photos/14749931/pexels-photo-14749931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 4,
    rating: 4.6,
    reviews: 1102,
    pricePerNight: 320,
    oldPrice: 410,
    amenities: ['Marina view', 'Pool', 'Gym', 'Free WiFi', 'Restaurant'],
    badge: 'Best Value',
  },
  {
    id: 'h5',
    name: 'Grand Downtown Hotel',
    area: 'Downtown Dubai',
    image:
      'https://images.pexels.com/photos/14750447/pexels-photo-14750447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 5,
    rating: 4.8,
    reviews: 2045,
    pricePerNight: 540,
    amenities: ['Burj Khalifa view', 'Rooftop pool', 'Spa', 'Free WiFi', 'Gym'],
  },
  {
    id: 'h6',
    name: 'Creek Heritage Inn',
    area: 'Dubai Creek',
    image:
      'https://images.pexels.com/photos/7974841/pexels-photo-7974841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 4,
    rating: 4.5,
    reviews: 876,
    pricePerNight: 210,
    amenities: ['Creek view', 'Traditional decor', 'Restaurant', 'Free WiFi'],
  },
  {
    id: 'h7',
    name: 'Skyline Marina Suites',
    area: 'Dubai Marina',
    image:
      'https://images.pexels.com/photos/29080576/pexels-photo-29080576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 4,
    rating: 4.7,
    reviews: 943,
    pricePerNight: 285,
    oldPrice: 350,
    amenities: ['Marina view', 'Kitchenette', 'Pool', 'Gym', 'Free WiFi'],
  },
  {
    id: 'h8',
    name: 'Luxury Suite Collection',
    area: 'Downtown Dubai',
    image:
      'https://images.pexels.com/photos/14750392/pexels-photo-14750392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stars: 5,
    rating: 4.8,
    reviews: 654,
    pricePerNight: 720,
    amenities: ['City view', 'Lounge access', 'Spa', 'Free WiFi', 'Butler'],
  },
];

export const hotelAreas = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Dubai Marina',
  'Jumeirah Beach',
  'Dubai Creek',
];

export const allAmenities = [
  'Private beach',
  'Pool',
  'Spa',
  'Free WiFi',
  'Gym',
  'Restaurant',
  'Butler service',
  'Marina view',
];

// ─── Activities ────────────────────────────────────────────

export interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  includes: string[];
  badge?: string;
}

export const activities: Activity[] = [
  {
    id: 'a1',
    title: 'Desert Safari with BBQ Dinner',
    category: 'Adventure',
    image:
      'https://images.pexels.com/photos/12565188/pexels-photo-12565188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 45,
    oldPrice: 65,
    duration: '6 hours',
    rating: 4.9,
    reviews: 3241,
    description:
      'Thrilling 4x4 dune bashing in the Dubai Desert Conservation Reserve, followed by camel riding, sandboarding, and a traditional BBQ dinner at a Bedouin-style camp with live entertainment.',
    includes: ['4x4 dune bashing', 'Camel ride', 'Sandboarding', 'BBQ dinner', 'Live entertainment', 'Hotel transfers'],
    badge: 'Best Seller',
  },
  {
    id: 'a2',
    title: 'Burj Khalifa At The Top SKY',
    category: 'Sightseeing',
    image:
      'https://images.pexels.com/photos/19960106/pexels-photo-19960106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 169,
    oldPrice: 199,
    duration: '1.5 hours',
    rating: 4.8,
    reviews: 2156,
    description:
      'Access the 148th floor SKY lounge of the world\'s tallest building. Enjoy breathtaking 360-degree views of Dubai\'s skyline, the Arabian Gulf, and the desert from 555 meters above ground.',
    includes: ['SKY lounge access', 'Refreshments', 'Interactive exhibits', 'Fast-track entry'],
    badge: 'Iconic',
  },
  {
    id: 'a3',
    title: 'Dubai Marina Dhow Cruise Dinner',
    category: 'Cruise',
    image:
      'https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 55,
    oldPrice: 75,
    duration: '2 hours',
    rating: 4.7,
    reviews: 1893,
    description:
      'Glide through Dubai Marina on a traditional wooden Dhow boat. Enjoy a lavish international buffet dinner while taking in the illuminated skyline and iconic skyscrapers from the water.',
    includes: ['Buffet dinner', 'Live entertainment', 'Marina views', 'Hotel transfers'],
  },
  {
    id: 'a4',
    title: 'Palm Jumeirah Yacht Tour',
    category: 'Water Sports',
    image:
      'https://images.pexels.com/photos/33710116/pexels-photo-33710116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 120,
    duration: '3 hours',
    rating: 4.8,
    reviews: 967,
    description:
      'Sail around the iconic Palm Jumeirah on a luxury yacht. Swim in the turquoise waters, spot the Atlantis from the sea, and enjoy a BBQ lunch on deck with stunning views of the Dubai coastline.',
    includes: ['Luxury yacht', 'BBQ lunch', 'Swimming stop', 'ATLANTIS view', 'Soft drinks'],
    badge: 'Premium',
  },
  {
    id: 'a5',
    title: 'Old Dubai & Gold Souk Tour',
    category: 'Cultural',
    image:
      'https://images.pexels.com/photos/33481935/pexels-photo-33481935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 35,
    duration: '4 hours',
    rating: 4.6,
    reviews: 1432,
    description:
      'Discover the heritage of old Dubai. Cross Dubai Creek on a traditional abra, explore the Gold Souk and Spice Souk, and visit the Al Fahidi Historic District and Dubai Museum with an expert guide.',
    includes: ['Expert guide', 'Abra boat ride', 'Museum entry', 'Hotel transfers'],
  },
  {
    id: 'a6',
    title: 'Atlantis Aquaventure Waterpark',
    category: 'Water Sports',
    image:
      'https://images.pexels.com/photos/6178937/pexels-photo-6178937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 89,
    oldPrice: 105,
    duration: 'Full day',
    rating: 4.8,
    reviews: 2789,
    description:
      'Splash into fun at Aquaventure Waterpark with over 30 slides and attractions, a 700-meter private beach, and the Lost Chambers Aquarium. Thrill-seekers and families alike will love this world-class waterpark.',
    includes: ['Full-day access', '30+ water slides', 'Private beach', 'Aquarium access'],
    badge: 'Family Fun',
  },
  {
    id: 'a7',
    title: 'Helicopter Tour of Dubai',
    category: 'Sightseeing',
    image:
      'https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 250,
    duration: '25 minutes',
    rating: 4.9,
    reviews: 543,
    description:
      'See Dubai from above on a spectacular helicopter ride. Fly past the Burj Khalifa, Burj Al Arab, Palm Jumeirah, The World Islands, and Dubai Marina for unforgettable aerial views of the city.',
    includes: ['Helicopter flight', 'Headset commentary', 'Hotel transfers', 'Pre-flight briefing'],
    badge: 'Luxury',
  },
  {
    id: 'a8',
    title: 'Sunrise Hot Air Balloon',
    category: 'Adventure',
    image:
      'https://images.pexels.com/photos/7817185/pexels-photo-7817185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 320,
    oldPrice: 380,
    duration: '4 hours',
    rating: 5.0,
    reviews: 412,
    description:
      'Float above the Dubai desert at sunrise in a hot air balloon. Watch the golden dunes come alive as the sun rises over the Hajar Mountains, followed by a falconry show and breakfast at the camp.',
    includes: ['Hot air balloon flight', 'Falconry show', 'Breakfast', 'Hotel transfers', 'Flight certificate'],
    badge: 'Unforgettable',
  },
];

export const activityCategories = [
  'All',
  'Adventure',
  'Sightseeing',
  'Cruise',
  'Water Sports',
  'Cultural',
];

// ─── FAQ ───────────────────────────────────────────────────

export const faqs = [
  {
    question: 'Do I need a visa to visit Dubai?',
    answer:
      'Visa requirements depend on your nationality. Citizens of GCC countries do not need a visa. Many nationalities can get a visa on arrival or an e-visa before travel. We offer visa assistance as part of our packages — just select the visa add-on at checkout.',
  },
  {
    question: 'What is the best time to visit Dubai?',
    answer:
      'The best time to visit Dubai is from November to March when the weather is pleasant and ranges from 20°C to 30°C. Summers (June to September) can be extremely hot with temperatures exceeding 40°C, though indoor attractions and malls remain comfortable.',
  },
  {
    question: 'Are flights included in your packages?',
    answer:
      'Our packages do not include international flights by default. However, you can use our Flights page to search and book flights to Dubai separately. Some premium packages may include flight add-ons — check the inclusions list on each package for details.',
  },
  {
    question: 'Can I customize a package to fit my preferences?',
    answer:
      'Absolutely! We offer a custom quote service where our travel experts will tailor an itinerary to your exact needs — including hotel category, activities, duration, and budget. Use the "Get a Custom Quote" button on any page to get started.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made 14 or more days before departure receive a full refund. Cancellations 7-13 days before departure receive a 50% refund. Cancellations within 7 days of departure are non-refundable. Travel insurance is recommended to cover unexpected changes.',
  },
  {
    question: 'Is Dubai safe for tourists?',
    answer:
      'Dubai is one of the safest cities in the world for tourists, with extremely low crime rates. However, we recommend respecting local customs and laws, dressing modestly in public areas, and following guidance from your tour guide.',
  },
  {
    question: 'What currency is used in Dubai?',
    answer:
      'The currency used in Dubai is the UAE Dirham (AED). Credit cards are widely accepted, and ATMs are available throughout the city. All our prices are listed in USD for your convenience — you will be charged the equivalent in AED.',
  },
  {
    question: 'Do you provide airport transfers?',
    answer:
      'Yes, all our multi-day packages include complimentary airport transfers. You can also book standalone airport transfer services from our Activities page if you are arranging your own accommodation.',
  },
];

interface IDetails {
  key: string;
  pict: string | undefined;
  trips: Array<ITrips>;
  title: string;
  location: string;
}

interface IBookDetails {
  key: string;
  pict: string;
  title: string;
  location: string;
  activity?: string;
  terms?: string;
  itinerary?: Array<{ time: string; description: string }>;
  pricing?: {
    inclusion: Array<{ pax: number; price: number }>;
    regular: Array<{ car: string; price: number }>;
  };
  regular_items: string[];
  inclusion_items: string[];
}

interface ITrips {
  pict: string;
  title: string;
  activity: string;
  about: string;
  description: string;
  amenities: string;
}

export type { IDetails, ITrips, IBookDetails };

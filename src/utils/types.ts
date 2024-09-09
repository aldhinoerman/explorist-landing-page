interface TourPackagesProps {
  id: number;
  key?: string;
  title: string;
  pict: string;
  price?: number;
  status?: boolean;
  location?: string;
  sequence?: number;
  category?: { data?: Array<{ id?: number; attributes?: CategoryProps }> };
  itineraries?: {
    data?: Array<{ id?: number; attributes?: ItinerariesProps }>;
  };
  package_items?: {
    data?: Array<{ id?: number; attributes?: PackageItemProps }>;
  };
  terms_conditions?: {
    data?: Array<{ id?: number; attributes?: TermsProps }>;
  };
  pricings?: { data?: Array<{ id?: number; attributes?: PricingProps }> };
  inclusions?: {
    data?: Array<{ id?: number; attributes?: InclusionsProps }>;
  };
  regulars?: { data?: Array<{ id?: number; attributes?: RegularsProps }> };
}

interface CategoryProps {
  title: string;
  pict: string;
  description: string;
}

interface ItinerariesProps {}

interface PackageItemProps {
  id?: number;
  pict?: string;
  activity?: string;
  about?: string;
  amenities?: string;
  description?: string;
}

interface TermsProps {}

interface PricingProps {}

interface InclusionsProps {}

interface RegularsProps {}

export type {
  TourPackagesProps,
  CategoryProps,
  InclusionsProps,
  ItinerariesProps,
  PackageItemProps,
  TermsProps,
  PricingProps,
  RegularsProps,
};

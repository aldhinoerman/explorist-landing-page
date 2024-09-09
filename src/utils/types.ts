interface TourPackagesProps {
  key: string;
  title: string;
  pict: string;
  price: number;
  status: boolean;
  location: string;
  sequence?: number;
  category?: CategoryProps[];
  itineraries?: ItinerariesProps[];
  package_items?: PackageItemProps[];
  terms_conditions?: TermsProps[];
  pricings?: PricingProps[];
  inclusions?: InclusionsProps[];
  regulars?: RegularsProps[];
}

interface CategoryProps {}

interface ItinerariesProps {}

interface PackageItemProps {}

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

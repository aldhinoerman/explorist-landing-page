interface TourPackagesProps {
  id: number;
  key?: string;
  title: string;
  pict: string;
  price?: number;
  status?: boolean;
  location?: string;
  sequence?: number;
  categories?: { data?: Array<CategoryProps> };
  itineraries?: {
    data?: ItinerariesProps[];
  };
  package_items?: {
    data?: PackageItemProps[];
  };
  terms_conditions?: {
    data?: TermsProps[];
  };
  pricings?: PricingProps[];
  inclusions?: {
    data?: InclusionsProps[];
  };
  price_inclusions?: {
    data?: PriceItemProps[];
  };
  price_exclusions?: {
    data?: PriceItemProps[];
  };
  regular_inclusions?: {
    data?: PriceItemProps[];
  };
  regular_exclusions?: {
    data?: PriceItemProps[];
  };
  regulars?: RegularsProps[];
}

interface PriceItemProps {
  inclusion?: string;
  exclusion?: string;
}

interface CategoryProps {
  key: string;
  id: number;
  title: string;
  pict: string;
  description: string;
}

interface ItinerariesProps {}

interface PackageItemProps {
  id: number;
  title: string;
  caption: string;
  pict: string;
  activity: string;
  about: string;
  amenities?: string;
  description?: string;
  stories?: {
    data?: StoriesProps[];
  };
  tour_packages?: {
    data?: TourPackagesProps[];
  };
}

interface StoriesProps {
  title?: string;
  description?: string;
}

interface TermsProps {}

interface PricingProps {
  id: number;
  type: string;
  pax?: number;
  car?: number;
  price: number;
  sequence?: number;
  tour_package: TourPackagesProps;
}

interface InclusionsProps {
  id: number;
  name: string;
  tour_package: TourPackagesProps;
}

interface RegularsProps {
  id: number;
  name: string;
  tour_package: TourPackagesProps;
}

interface ITableColumns<T> {
  title: string;
  dataIndex: string;
  align?: string;
  render?: (value?: any, obj?: T, index?: number) => void | null;
}

interface IWelcomeMessage {
  title: string;
  Description: string;
}

export type {
  TourPackagesProps,
  CategoryProps,
  InclusionsProps,
  ItinerariesProps,
  PackageItemProps,
  TermsProps,
  PricingProps,
  RegularsProps,
  ITableColumns,
  PriceItemProps,
  IWelcomeMessage,
};

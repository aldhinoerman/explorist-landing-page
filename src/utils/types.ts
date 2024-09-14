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
    data?: Array<{ id?: number | undefined; attributes?: PackageItemProps }>;
  };
  terms_conditions?: {
    data?: Array<{ id?: number; attributes?: TermsProps }>;
  };
  pricings?: { data?: Array<{ id?: number; attributes?: PricingProps }> };
  inclusions?: {
    data?: Array<{ id?: number; attributes?: InclusionsProps }>;
  };
  price_inclusions?: {
    data?: Array<{ id?: number; attributes: PriceItemProps }>;
  };
  price_exclusions?: {
    data?: Array<{ id?: number; attributes: PriceItemProps }>;
  };
  regular_inclusions?: {
    data?: Array<{ id?: number; attributes: PriceItemProps }>;
  };
  regular_exclusions?: {
    data?: Array<{ id?: number; attributes: PriceItemProps }>;
  };
  regulars?: { data?: Array<{ id?: number; attributes?: RegularsProps }> };
}

interface PriceItemProps {
  inclusion?: string;
  exclusion?: string;
}

interface CategoryProps {
  id: number;
  title: string;
  pict: string;
  description: string;
}

interface ItinerariesProps {}

interface IPackageItem {
  id?: number;
  attributes?: PackageItemProps;
}

interface PackageItemProps {
  id?: number;
  title?: string;
  caption?: string;
  pict?: string;
  activity?: string;
  about?: string;
  amenities?: string;
  description?: string;
  stories?: {
    data?: Array<{ id?: number; attributes?: StoriesProps }>;
  };
  tour_packages?: {
    data?: Array<{ id?: number; attributes?: TourPackagesProps }>;
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
  render?: (value?: any, obj?: T, index?: number) => void;
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
  IPackageItem,
  PriceItemProps,
};

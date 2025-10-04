interface TourPackagesProps {
  id: number;
  documentId: string;
  key?: string;
  title: string;
  slug?: string;
  image?: StrapiImageProps;
  price?: number;
  status?: boolean;
  location?: string;
  sequence?: number;
  featured?: boolean;
  length?: string;
  description?: any[];
  terms?: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  categories?: Array<CategoryProps>;
  itineraries?: {
    data?: ItinerariesProps[];
  };
  package_items?: PackageItemProps[];
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
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  pict?: string;
  key?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

interface ItinerariesProps {}

interface PackageItemProps {
  id: number;
  documentId: string;
  title: string;
  slug?: string;
  caption?: string;
  image?: StrapiImageProps;
  activity?: string;
  about?: string;
  amenities?: string;
  description?: any[];
  price?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  stories?: {
    data?: StoriesProps[];
  };
  tour_packages?: {
    data?: TourPackagesProps[];
  };
}

interface StrapiImageProps {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
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
  siteName: string;
  siteDescription: string;
}

interface ICTAButton {
  id: number;
  label: string;
  asLink: boolean;
  href?: string;
  externalUrl?: boolean;
  variants: 'primary' | 'secondary' | 'outline' | 'ghost';
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
  StrapiImageProps,
  StrapiImageFormat,
  ICTAButton,
};

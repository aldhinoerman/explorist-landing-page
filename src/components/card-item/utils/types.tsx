import { PackageItemProps, StrapiImageProps } from "@/utils";

interface ICardItem {
  id?: number;
  title?: string;
  image?: StrapiImageProps;
  type?: string;
  category?: string;
  lengthTour?: string;
  date?: string;
  price?: number;
  link?: string;
  key?: string;
  package_items?: Array<PackageItemProps>;
}

export type { ICardItem };

import { PackageItemProps } from "@/utils";

interface ICardItem {
  id?: number;
  title?: string;
  pict?: string | undefined;
  type?: string;
  category?: string;
  lengthTour?: string;
  date?: string;
  price?: number;
  link?: string;
  key?: string;
  package_items?: {
    data?: Array<{ id?: number; attributes?: PackageItemProps }>;
  };
}

export type { ICardItem };

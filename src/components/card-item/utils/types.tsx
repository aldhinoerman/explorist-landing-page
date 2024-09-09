import { CategoryProps } from "@/utils";
import { Moment } from "moment";

interface ICardItem {
  id?: number;
  title: string;
  pict: string;
  type?: string;
  category?: string | CategoryProps[];
  lengthTour?: string;
  date?: string;
  price?: number;
  link?: string;
  key?: string;
}

export type { ICardItem };

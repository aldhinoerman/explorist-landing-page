import { Moment } from "moment";

interface ICardItem {
  title: string;
  pict: string;
  type?: string;
  category?: string;
  lengthTour?: string;
  date?: string;
  price: number;
  link: string;
}

export type { ICardItem };

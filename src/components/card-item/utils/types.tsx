import { Moment } from "moment";

interface ICardItem {
  title: string;
  pict: string;
  type: string;
  category: string;
  lengthTour: string;
  date: Moment;
  price: number;
}

export type { ICardItem };

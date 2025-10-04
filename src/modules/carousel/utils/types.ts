interface ICarouselItems {
  id?: number;
  title?: string;
  image?: {
    url?: string;
  } | string;
  link?: string;
  pict?: string;
  name?: string;
  description?: string;
  key?: string;
  slug?: string;
}

export type { ICarouselItems };

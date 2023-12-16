import { StaticImageData } from "next/image";

export interface ICard {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  price: number;
  discount: number | null;
  free: boolean;
  time: string;
  like: string;
  comment: string;
}

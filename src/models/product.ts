import { CategoryDTO } from "./category";

export type ProducDTO = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[];
};

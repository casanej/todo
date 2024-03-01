import { Item } from "./item";

export interface List {
  items: Item[];
}

export interface Progress {
  done: number;
  total: number;
  percentage: number;
}
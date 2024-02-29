import { Item } from "../../../service/to-do.service/models/item";

export interface ToDoProps {
  addItem: (description: string) => void;
  date: string;
  finishItem: (id: string) => void;
  items: Item[];
  removeItem: (id: string) => void;
  updateDescription: (id: string, description: string) => void;
}
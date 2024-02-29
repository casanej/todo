import { Item } from "../../../service/to-do.service/models/item";

export interface ToDoProps {
  addItem: (description: string) => void;
  date: string;
  items: Item[];
  updateDescription: (id: string, description: string) => void;
}
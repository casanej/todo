import { Item } from "../../../service/to-do.service/models/item";

export interface ToDoListItemProps {
  item: Item;
  removeItem: (id: string) => void;
  updateDescription: (id: string, description: string) => void;
}
import { Item } from "../../../service/to-do.service/models/item";

export interface ToDoListItemProps {
  item: Item;
  updateDescription: (id: string, description: string) => void;
}
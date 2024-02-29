import { ListFilter } from "./models/filter";
import { List } from "./models/list";

export class ToDoService {
  private list: List = {
    items: [],
  };

  public getList(): List {
    return this.list;
  }

  public addItem(description: string): List['items'] {
    this.list.items.push({
      id: String(this.list.items.length + 1),
      description,
      status: 'PENDING',
    });

    return this.list.items;
  }

  public removeItem(id: string): List['items'] {
    this.list.items = this.list.items.filter(item => item.id !== id);
    return this.list.items;
  }

  public finishItem(id: string): List['items'] {
    this.list.items = this.list.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: 'DONE',
        }
      }

      return item;
    });

    return this.list.items;
  }

  filterItems(filter: ListFilter): List['items'] {
    return this.list.items.filter(item => {
      if (filter.status && item.status !== filter.status) {
        return false;
      }

      if (filter.description && !item.description.includes(filter.description)) {
        return false;
      }

      return true;
    });
  }
}
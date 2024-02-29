import { ToDoServicePayloadActions } from "../models/todo";
import { ToDoService } from "../service/to-do.service";
import { Item } from "../service/to-do.service/models/item"

const todoApi = new ToDoService();

export interface ToDoServiceObject {
  items: Item[];
  addItem: (payload: ToDoServicePayloadActions['payload']) => void;
}

export const TODO_DEFAULT_STATE: ToDoServiceObject = {
  items: [],
  addItem: () => { },
}

export const todoServiceReducer = (state: ToDoServiceObject, action: ToDoServicePayloadActions): ToDoServiceObject => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: todoApi.addItem(action.payload.description),
      }
    /* case 'REMOVE_ITEM':
      return {
        ...state,
        items: todoApi.removeItem(action.payload),
      }
    case 'FINISH_ITEM':
      return {
        ...state,
        items: todoApi.finishItem(action.payload),
      }
    case 'FILTER_ITEMS':
      return {
        ...state,
        items: todoApi.filterItems(action.payload),
      } */
    default:
      return state;
  }
}
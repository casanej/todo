import { ToDoServiceActions, ToDoServiceActionsAddItem, ToDoServiceActionsEditDescription, ToDoServiceActionsRemoveItem, ToDoServicePayloadActions } from "../models/todo";
import { ToDoService } from "../service/to-do.service";
import { Item } from "../service/to-do.service/models/item"

const todoApi = new ToDoService();

export interface ToDoServiceObject {
  items: Item[];
  addItem: (payload: ToDoServiceActionsAddItem['payload']) => void;
  updateDescription: (payload: ToDoServiceActionsEditDescription['payload']) => void;
  removeItem: (payload: ToDoServiceActionsRemoveItem['payload']) => void;
}

export const TODO_DEFAULT_STATE: ToDoServiceObject = {
  items: [],
  addItem: () => { },
  updateDescription: () => { },
  removeItem: () => { },
}

export const todoServiceReducer = (state: ToDoServiceObject, action: ToDoServicePayloadActions): ToDoServiceObject => {
  if (action.type === ToDoServiceActions.ADD_ITEM) {
    return {
      ...state,
      items: todoApi.addItem(action.payload.description),
    }
  }

  if (action.type === ToDoServiceActions.EDIT_DESCRIPTION) {
    const { id, newDescription } = action.payload;
    return {
      ...state,
      items: todoApi.updateDescription(id, newDescription),
    }
  }

  if (action.type === ToDoServiceActions.REMOVE_ITEM) {
    const { id } = action.payload;
    return {
      ...state,
      items: todoApi.removeItem(id),
    }
  }

  return state;
}
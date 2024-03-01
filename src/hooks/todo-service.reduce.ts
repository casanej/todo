import { ToDoServiceActions, ToDoServiceActionsAddItem, ToDoServiceActionsEditDescription, ToDoServiceActionsFinishItem, ToDoServiceActionsRemoveItem, ToDoServiceActionsUpdateFilterDescription, ToDoServiceActionsUpdateFilterStatus, ToDoServicePayloadActions } from "../models/todo";
import { ToDoService } from "../service/to-do.service";
import { FilterOptions } from "../service/to-do.service/models/filter";
import { Item } from "../service/to-do.service/models/item"

const todoApi = new ToDoService();

export interface ToDoServiceObject {
  addItem: (payload: ToDoServiceActionsAddItem['payload']) => void;
  filterOptions: FilterOptions;
  finishItem: (payload: ToDoServiceActionsFinishItem['payload']) => void;
  items: Item[];
  removeItem: (payload: ToDoServiceActionsRemoveItem['payload']) => void;
  updateDescription: (payload: ToDoServiceActionsEditDescription['payload']) => void;
  updateFilterStatus: (payload: ToDoServiceActionsUpdateFilterStatus['payload']) => void;
  updateFilterDescription: (payload: ToDoServiceActionsUpdateFilterDescription['payload']) => void;
}

export const TODO_DEFAULT_STATE: ToDoServiceObject = {
  addItem: () => { },
  filterOptions: {
    byDescription: '',
    byStatus: 'ALL',
  },
  finishItem: () => { },
  items: [],
  removeItem: () => { },
  updateDescription: () => { },
  updateFilterStatus: () => { },
  updateFilterDescription: () => { },
}

export const todoServiceReducer = (state: ToDoServiceObject, action: ToDoServicePayloadActions): ToDoServiceObject => {
  if (action.type === ToDoServiceActions.ADD_ITEM) {
    return {
      ...state,
      items: todoApi.addItem(action.payload.description).getItems(),
    }
  }

  if (action.type === ToDoServiceActions.EDIT_DESCRIPTION) {
    const { id, newDescription } = action.payload;
    return {
      ...state,
      items: todoApi.updateDescription(id, newDescription).getItems(),
    }
  }

  if (action.type === ToDoServiceActions.REMOVE_ITEM) {
    const { id } = action.payload;
    return {
      ...state,
      items: todoApi.removeItem(id).getItems(),
    }
  }

  if (action.type === ToDoServiceActions.FINISH_ITEM) {
    const { id } = action.payload;
    return {
      ...state,
      items: todoApi.finishItem(id).getItems(),
    }
  }

  if (action.type === ToDoServiceActions.UPDATE_FILTER_STATUS) {
    return {
      ...state,
      items: todoApi.getItems({
        byDescription: state.filterOptions.byDescription,
        byStatus: action.payload.status,
      }),
      filterOptions: {
        ...state.filterOptions,
        byStatus: action.payload.status,
      }
    }
  }

  if (action.type === ToDoServiceActions.UPDATE_FILTER_DESCRIPTION) {
    return {
      ...state,
      items: todoApi.getItems({
        byDescription: action.payload.description,
        byStatus: state.filterOptions.byStatus,
      }),
      filterOptions: {
        ...state.filterOptions,
        byDescription: action.payload.description,
      }
    }
  }

  return state;
}
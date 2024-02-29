export enum ToDoServiceActions {
  ADD_ITEM = 'ADD_ITEM',
  EDIT_DESCRIPTION = 'EDIT_DESCRIPTION',
  REMOVE_ITEM = 'REMOVE_ITEM',
  FINISH_ITEM = 'FINISH_ITEM',
}

export type ToDoServicePayloadActions = ToDoServiceActionsAddItem | ToDoServiceActionsEditDescription | ToDoServiceActionsRemoveItem | ToDoServiceActionsFinishItem;

export interface ToDoServiceActionsAddItem {
  type: ToDoServiceActions.ADD_ITEM;
  payload: {
    description: string;
  };
}

export interface ToDoServiceActionsEditDescription {
  type: ToDoServiceActions.EDIT_DESCRIPTION;
  payload: {
    id: string;
    newDescription: string;
  };
}

export interface ToDoServiceActionsRemoveItem {
  type: ToDoServiceActions.REMOVE_ITEM;
  payload: {
    id: string;
  };
}

export interface ToDoServiceActionsFinishItem {
  type: ToDoServiceActions.FINISH_ITEM;
  payload: {
    id: string;
  };
}
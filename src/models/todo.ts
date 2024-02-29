export enum ToDoServiceActions {
  ADD_ITEM = 'ADD_ITEM',
  EDIT_DESCRIPTION = 'EDIT_DESCRIPTION',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export type ToDoServicePayloadActions = ToDoServiceActionsAddItem | ToDoServiceActionsEditDescription | ToDoServiceActionsRemoveItem;

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
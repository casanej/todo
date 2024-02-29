export enum ToDoServiceActions {
  ADD_ITEM = 'ADD_ITEM',
  EDIT_DESCRIPTION = 'EDIT_DESCRIPTION'
}

export type ToDoServicePayloadActions = ToDoServiceActionsAddItem | ToDoServiceActionsEditDescription;

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
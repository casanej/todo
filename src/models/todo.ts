export enum ToDoServiceActionsEnum {
  ADD_ITEM = 'ADD_ITEM'
}

export type ToDoServicePayloadActions = ToDoServiceActionsAddItem

export interface ToDoServiceActionsAddItem {
  type: ToDoServiceActionsEnum.ADD_ITEM;
  payload: {
    description: string;
  };
}
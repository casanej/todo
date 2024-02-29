import { ReactNode, createContext, useContext, useReducer } from 'react';
import { TODO_DEFAULT_STATE, ToDoServiceObject, todoServiceReducer } from './todo-service.reduce';
import { ToDoServiceActionsAddItem, ToDoServiceActionsEnum } from '../models/todo';

interface ToDoServiceProps {
    children: ReactNode;
}

const ToDoServiceContext = createContext<ToDoServiceObject>(TODO_DEFAULT_STATE);

export const useToDoService = () => useContext(ToDoServiceContext);

export const ToDoServiceProvider = ({ children }: ToDoServiceProps) => {
    const [state, dispatch] = useReducer(todoServiceReducer, TODO_DEFAULT_STATE);

    return <ToDoServiceContext.Provider value={{
        items: state.items,
        addItem: (payload: ToDoServiceActionsAddItem['payload']) => dispatch({ type: ToDoServiceActionsEnum.ADD_ITEM, payload }),
    }}>{children as any}</ToDoServiceContext.Provider>;
};
import { FC } from 'react';
import * as S from './index.style';
import { ToDo } from '../../components/templates/to-do';
import { ToDoServiceProvider, useToDoService } from '../../hooks/todo-service.provider';

const MainPageWrapped: FC = () => {
  const { items, addItem, updateDescription } = useToDoService();

  console.log('items', items)

  return <S.MainPage>
    <S.MainContainer>
      <ToDo
        date={new Date().toDateString()}
        items={items}
        addItem={(description) => addItem({ description })}
        updateDescription={(id, description) => updateDescription({ id, newDescription: description })}
      />
    </S.MainContainer>
  </S.MainPage>;
};

export const MainPage: FC = () => {
  return <ToDoServiceProvider>
    <MainPageWrapped />
  </ToDoServiceProvider>;
};

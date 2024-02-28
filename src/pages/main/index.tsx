import { FC } from 'react';
import * as S from './index.style';
import { ToDo } from '../../components/templates/to-do';

export const MainPage: FC = () => {

  return <S.MainPage>
    <S.MainContainer>
      <ToDo
        date={new Date().toDateString()}
      />
    </S.MainContainer>
  </S.MainPage>;
};

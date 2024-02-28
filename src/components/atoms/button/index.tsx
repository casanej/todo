import { FC } from 'react';
import * as S from './index.style';
import { ButtonProps } from './index.types';

export const Button: FC<ButtonProps> = ({ children, onClick, toggled }) => {

  return <S.Button onClick={onClick} toggled={toggled}>
    {toggled && `👍`}
    {children}
  </S.Button>;
};

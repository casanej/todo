import { FC } from 'react';
import * as S from './index.style';
import { ButtonProps } from './index.types';

export const Button: FC<ButtonProps> = ({ children, isIcon, onClick, toggled, variant }) => {

  return <S.Button
    isIcon={isIcon}
    onClick={onClick}
    toggled={toggled}
    variant={variant || 'primary'}
  >
    {toggled && `👍`}
    {children}
  </S.Button>;
};

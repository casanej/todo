import { FC } from 'react';
import * as S from './index.style';
import { ButtonProps } from './index.types';

export const Button: FC<ButtonProps> = ({ children, disabled, isIcon, onClick, size, toggled, variant }) => {

  return <S.Button
    isIcon={isIcon}
    onClick={onClick}
    size={size || 'normal'}
    toggled={toggled}
    variant={variant || 'primary'}
    disabled={disabled}
  >
    {toggled && `👍`}
    {children}
  </S.Button>;
};

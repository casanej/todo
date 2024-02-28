import { FC } from 'react';
import * as S from './index.style';
import { TextfieldProps } from './index.types';
import { Icon } from '..';

export const Textfield: FC<TextfieldProps> = ({ placeholder, iconSuffix, size }) => {

  return <S.Textfield>
    <S.TextfieldInput
      placeholder={placeholder}
      size={size || 'normal'}
    />

    {
      iconSuffix && <S.TextfieldIconSuffix> <Icon type={iconSuffix} /> </S.TextfieldIconSuffix>
    }
  </S.Textfield>;
};

import { FC, useMemo } from 'react';
import * as S from './index.style';
import { TextfieldProps } from './index.types';
import { Icon } from '..';

export const Textfield: FC<TextfieldProps> = ({ onChange, placeholder, iconSuffix, size, value }) => {

  const isControlled = useMemo(() => {
    return value ?? false;
  }, [value])

  const controllerValue = useMemo(() => {
    if (!isControlled) return undefined;

    return value || '';
  }, [isControlled, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const { value, name } = e.target;
      onChange(value, name);
    }
  }

  return <S.Textfield>
    <S.TextfieldInput
      placeholder={placeholder}
      size={size || 'normal'}
      onChange={handleChange}
      value={controllerValue}
    />

    {
      iconSuffix && <S.TextfieldIconSuffix> <Icon type={iconSuffix} /> </S.TextfieldIconSuffix>
    }
  </S.Textfield>;
};

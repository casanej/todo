import { FC } from 'react';
import * as S from './index.style';
import { ProgressBarProps } from './index.types';


export const ProgressBar: FC<ProgressBarProps> = ({ max, value }) => {

  return <S.ProgressBar
    max={max}
    value={value}
  />;
};

import { FC, useMemo } from 'react';
import * as S from './index.style';
import { Text } from '../../atoms';
import { monthName, weekDayName } from '../../../constants/date';

export const ToDo: FC<ToDoProps> = ({ date }) => {
  const { day, month, year, weekDay } = useMemo(() => {
    const currentDate = new Date(date);
    return {
      day: currentDate.getDate(),
      month: monthName[currentDate.getMonth()],
      year: currentDate.getFullYear(),
      weekDay: weekDayName[currentDate.getDay()],
    }
  }, [date]);

  return <S.ToDo>
    <S.ToDoCalendar>
      <S.ToDoCalendarDate>
        <div>
          <Text weight='bold' size={3.75}>{day}</Text>
        </div>
        <div>
          <Text weight='500' size={1.5}>{month}</Text>
          <Text weight='300' size={1.5}>{year}</Text>
        </div>
      </S.ToDoCalendarDate>

      <div>
        <Text size={1.5}> {weekDay}</Text>
      </div>
    </S.ToDoCalendar>
    <S.ToDoProgress></S.ToDoProgress>
    <S.ToDoFilter></S.ToDoFilter>
    <S.ToDoList></S.ToDoList>

  </S.ToDo >;
};

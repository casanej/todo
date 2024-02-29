import { FC, useMemo } from 'react';
import * as S from './index.style';
import { Button, Text, Textfield } from '../../atoms';
import { monthName, weekDayName } from '../../../constants/date';
import { ToDoListAddInput, ToDoListItem } from '../../organism';
import { ToDoProps } from './index.types';

export const ToDo: FC<ToDoProps> = ({ addItem, date, items, removeItem, updateDescription }) => {
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
          <Text weight='bold' size={5}>{day}</Text>
        </div>
        <div>
          <Text weight='500' size={2}>{month}</Text>
          <Text weight='300' size={2}>{year}</Text>
        </div>
      </S.ToDoCalendarDate>

      <div>
        <Text size={2}> {weekDay}</Text>
      </div>
    </S.ToDoCalendar>
    <S.ToDoProgress></S.ToDoProgress>
    <S.ToDoFilter>
      <div>
        <Button>Done</Button>
        <Button>Pending</Button>
      </div>

      <div>
        <Textfield
          placeholder='Search items'
          iconSuffix='search'
        />
      </div>
    </S.ToDoFilter>

    <div>
      <ToDoListAddInput addItem={addItem} />
    </div>

    <S.ToDoList>
      {
        items.map(item => {
          return <ToDoListItem key={item.id} item={item} updateDescription={updateDescription} removeItem={removeItem} />
        })
      }
    </S.ToDoList>

  </S.ToDo >;
};

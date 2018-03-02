import React from 'react';
import WeekdayBar from './WeekdayBar';
import Week from './Week';
import MonthControl from './MonthControl';
import { createMonth } from './dateUtils';

export default function Month(props) {
  let {date} = props;
  let month = createMonth(date);
  return (
    <div className='mindatepicker-month-container'>
      <MonthControl {...props} />
      <WeekdayBar />
      <div className='mindatepicker-month-picker' style={{border: '1px solid black'}}>
        {
          month.map((week, i) => {
            return <Week key={i} week={week} month={date.month()} />
          })
        }
      </div>
    </div>
  )
}

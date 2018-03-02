import React from 'react';
import Day from './Day';


export default function Week(props) {
  let {week, month} = props;
  return (
    <div style={{display: 'flex'}}>
      {
        week.map((day, i) => {
         return <Day key={i} day={day} month={month} {...props}/>
        })
      }
    </div>
  )
}

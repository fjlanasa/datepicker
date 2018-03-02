import React from 'react';
import moment from 'moment';

export default function WeekdayBar(props) {
  let style = {
    height: '2em',
    width: '2em',
    fontWeight: '600',
    padding: '0 1em',
    display: 'inline-block',
    textAlign: 'center'
  }

  return (
    <div className='mindatepicker-weekday-bar' style={{display: 'flex'}}>
      {
        moment.weekdaysMin().map((d, i) => {
          return <div style={style} key={i}>{d}</div>
        })
      }
    </div>
  );
}

import React from 'react';

export default function MonthControl(props) {
  let {decrementMonth, incrementMonth, date} = props;
  return (
    <div className='mindatepicker-month-control' style={{display: 'flex', justifyContent: 'space-between', padding: '1em'}}>
      { decrementMonth ? (
        <div style={{cursor: 'pointer'}} onClick={decrementMonth}>Back</div>
      ) : (
        <div style={{visibility: 'hidden'}}>Next</div>
      )
      }
      <div>{date.format('MMM YYYY')}</div>
      { incrementMonth ? (
        <div style={{cursor: 'pointer'}} onClick={incrementMonth}>Next</div>
      ) : (
        <div style={{visibility: 'hidden'}}>Back</div>
      )
      }
    </div>
  )
}

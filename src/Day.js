import React from 'react';
import moment from 'moment';

export default function Day(props) {
  let style = {
    cursor: 'pointer',
    height: '2em',
    width: '2em',
    padding: '1em',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }

  let {day, month, startDate, endDate, handleSelectDate} = props;
  if (day.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
    style.border = "1px solid #e6e6e6";
    style.borderRadius = '50%'
  }

  if (startDate && day.format('YYYY-MM-DD') === startDate.format('YYYY-MM-DD')) {
    style.color = 'white';
    style.backgroundColor = 'blue';
    style.borderTopLeftRadius = '50%';
    style.borderBottomLeftRadius = '50%';
  }

  if (endDate && day.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')) {
    style.color = 'white';
    style.backgroundColor = 'blue';
    style.borderTopRightRadius = '50%';
    style.borderBottomRightRadius = '50%';
  }

  if (startDate && endDate && day.isBetween(startDate, endDate)) {
    style.color = 'white';
    style.backgroundColor = 'lightblue';
  }

  if (day.month() !== month) {
    style.visibility = 'hidden';
  }

  return (
    <div style={style} onClick={(e) => { handleSelectDate(day, e)}}>{day.format('D')}</div>
  )
}

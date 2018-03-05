import React, { Component } from 'react';
import './Calendar.css';
import moment from 'moment';
import Month from './Month';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedDate: moment(),
      startDate: null,
      endDate: null
    }
    this.currentDate = moment();

    this.decrementMonth = this.decrementMonth.bind(this);
    this.incrementMonth = this.incrementMonth.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
  }

  incrementMonth() {
    let newDate = this.state.focusedDate.clone().add(1, 'months');
    this.setState({focusedDate: newDate})
  }

  decrementMonth() {
    let newDate = this.state.focusedDate.clone().add(-1, 'months');
    this.setState({focusedDate: newDate})
  }

  handleSelectDate(date, e) {
    let { startDate, endDate } = this.state;
    if (!startDate || date.isSameOrBefore(startDate)) {
      this.setState({
        startDate: date,
        endDate: date
      })
    } else {
      if (!endDate || date.isAfter(endDate)) {
        this.setState({ endDate: date })
      } else if (date.isSame(endDate)) {
        this.setState({
          startDate: date,
          endDate: date
        })
      } else if (date.diff(startDate) <= endDate.diff(date) || endDate.diff(startDate, 'days') <= 4) {
        this.setState({ startDate: date })
      } else {
        this.setState({ endDate: date })
      }
    }
  }

  render() {
    let currentDate = this.state.focusedDate,
        nextMonthDate = this.state.focusedDate.clone().add(1, 'months');

    return (
      <div className='mindatepicker-calendar' style={{display: 'flex'}}>
        <Month
          date={currentDate}
          decrementMonth={this.decrementMonth}
          handleSelectDate={this.handleSelectDate}
          showWeekdays={true}
          currentDate={this.currentDate}
          focusedDate={this.state.focusedDate}
          month={currentDate.month()}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <Month
          date={nextMonthDate}
          incrementMonth={this.incrementMonth}
          handleSelectDate={this.handleSelectDate}
          showWeekdays={true}
          currentDate={this.currentDate}
          focusedDate={this.state.focusedDate}
          month={nextMonthDate.month()}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    );
  }
}

export default Calendar;

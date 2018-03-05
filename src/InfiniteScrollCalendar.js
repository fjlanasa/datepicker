import React, { Component } from 'react';
import moment from 'moment';
import Month from './Month';

class InfiniteScrollCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedDate: moment(),
      startDate: null,
      endDate: null,
      months: [0,1]
    }
    this.currentDate = moment();

    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    let {startDate, endDate} = this.state;
    console.log(`Start date: ${startDate.format('M-D-YYYY')}, End date: ${endDate.format('M-D-YYYY')}`);
    this.setState({
      startDate: null,
      endDate: null
    })
  }

  componentDidMount() {
    let scrollContainer = document.getElementsByClassName('mindatepicker-calendar scrollable')[0];
    scrollContainer.addEventListener('scroll', (e) => {
      if (e.target.scrollHeight - e.target.scrollTop < 600) {
        let lastMonth = this.state.months[this.state.months.length - 1];
        let newMonths = [...this.state.months, lastMonth + 1, lastMonth + 2]
        this.setState({months: newMonths});
      }
    })
  }

  render() {
    let currentDate = this.state.focusedDate;

    let months = this.state.months.map((m, i) => {
      let thisMonthDate = currentDate.clone().add(m, 'months');
      return (
        <Month
          key={i}
          date={thisMonthDate}
          showWeekdays={i === 0}
          decrementMonth={this.decrementMonth}
          handleSelectDate={this.handleSelectDate}
          currentDate={this.currentDate}
          focusedDate={this.state.focusedDate}
          month={thisMonthDate.month()}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      )
    })
    return (
      <div>
        <div className='mindatepicker-calendar scrollable' style={{display: 'inline-block', height: '400px', overflowY: 'scroll'}}>
          {months}
        </div>
        <div>
          <button disabled={!this.state.startDate} onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default InfiniteScrollCalendar;

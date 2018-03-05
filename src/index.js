import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './Calendar';
import InfiniteScrollCalendar from './InfiniteScrollCalendar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <h1>Multiple Months</h1>
    <Calendar />
    <h2>Scroll Months</h2>
    <InfiniteScrollCalendar />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();

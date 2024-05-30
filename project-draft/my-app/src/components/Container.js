import React from 'react';

import { MyCalendar } from './Calendar';
import { Reminders } from './Reminders';



function TipSection(props) {
  return (
    <section className="tip">
        <header>
          <h3>Tips</h3>
        </header>
        <div className="info-shape">
          <div class="tips">
            <p><span className="star">&#9733;</span><a
                href="https://www.calm.com/blog/anxiety-before-period#:~:text=PMS%20anxiety%20typically%20begins%20in,subsides%20once%20your%20period%20starts."
                target="_blank">How to handle period anxiety</a></p>
            <p><span className="star">&#9733;</span><a
                href="https://www.healthline.com/health/period-cravings#chocolate" target="_blank">this article about
                period cravings</a></p>
          </div>
        </div>
      </section>
  );
};

function ReminderAndTipSection(props) {
  return (
    <div className="info-shape">
      <Reminders />
      <TipSection />
    </div>
  );
};

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ReminderAndTipSection />
    </div>
  );
};

export function Container(props) {
  return (
    <section className="container">
      <MyCalendar />
      <Sidebar />
    </section>
  );
};

import React from 'react';
import Calendar from './Calendar';
import Reminders from './Reminders';



const TipSection = () => {
  return (
    <section class="tip">
        <header>
          <h3>Tips</h3>
        </header>
        <div class="info-shape">
          <div class="tips">
            <p><span class="star">&#9733;</span><a
                href="https://www.calm.com/blog/anxiety-before-period#:~:text=PMS%20anxiety%20typically%20begins%20in,subsides%20once%20your%20period%20starts."
                target="_blank">How to handle period anxiety</a></p>
            <p><span class="star">&#9733;</span><a
                href="https://www.healthline.com/health/period-cravings#chocolate" target="_blank">this article about
                period cravings</a></p>
          </div>
        </div>
      </section>
  );
};

const ReminderAndTipSection = () => {
  return (
    <div className="info-shape">
      <Reminders />
      <TipSection />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ReminderAndTipSection />
    </div>
  );
};

const Container = () => {
  return (
    <section className="container">
      <Calendar />
      <Sidebar />
    </section>
  );
};

export default Container;
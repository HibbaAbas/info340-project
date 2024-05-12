import React, { useState } from 'react';

const Reminders = () => {
  // State to manage the reminders
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  // Function to handle adding a new reminder
  const handleAddReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, newReminder]);
      setNewReminder('');
    }
  };

  return (
    <div className="sidebar">
      <h2>Reminders</h2>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newReminder}
        onChange={(e) => setNewReminder(e.target.value)}
      />
      <button onClick={handleAddReminder}>Add Reminder</button>
    </div>
  );
};

export default Reminders;

import React, { useState } from 'react';

const Reminders = () => {
  // State to manage the reminders
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(null);

  // Function to handle adding a new reminder
  const handleAddReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, { text: newReminder, checked: false}]);
      setNewReminder('');
      setShowTextBox(false);
    }
  };

  // function to make the reminders checkable
  const handleCheckReminder = (index) => {
    const newReminders = [...reminders];
    newReminders[index].checked = !newReminders[index].checked;
    setReminders(newReminders);
  };

  // Function to handle deleting a reminder
  const handleDeleteReminder = (index) => {
    const newReminders = [...reminders];
    newReminders.splice(index, 1);
    setReminders(newReminders);
  };

  return (
    <section className="reminder">
      <h3>Reminders</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li 
            key={index}
            className="reminder-item"
            onMouseEnter={() => setShowDeleteButton(index)}
            onMouseLeave={() => setShowDeleteButton(null)}
          >
            <input
              type="checkbox"
              checked={reminder.checked}
              onChange={() => handleCheckReminder(index)}
            />
            <span
              className="reminder-text"
              style={{
                textDecoration: reminder.checked ? 'line-through' : 'none',
              }}
            >
              {reminder.text}
            </span>
            {showDeleteButton === index && (
              <button
                className="delete-button"
                onClick={() => handleDeleteReminder(index)}
              >
                x
              </button>
            )}
          </li>
        ))}
      </ul>
      {showTextBox && (
        <div>
          <input
            type="text"
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
          />
          <button onClick={handleAddReminder}>Add Reminder</button>
        </div>
      )}
      {!showTextBox && <button onClick={() => setShowTextBox(true)}>Add Reminder</button>}
    </section>
  );
};

export default Reminders;

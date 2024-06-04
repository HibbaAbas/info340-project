import React, { useState } from 'react';

export function Reminders(props) {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(null);


  // function to add a new reminder
  // adds a new reminder to the reminders array, then clears the input field
  // and hides the input field
  function handleAddReminder(props) {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, { text: newReminder, checked: false }]);
      setNewReminder('');
      setShowTextBox(false);
    }
  };

  // function to check off a reminder
  // toggles the checked property of the reminder at the given index
  // by creating a new array with the reminder checked property toggled
  function handleCheckReminder(index) {
    const newReminders = [...reminders];
    newReminders[index].checked = !newReminders[index].checked;
    setReminders(newReminders);
  };

  // function to delete a reminder
  // removes the reminder at the given index from the reminders array
  // by creating a new array with the reminder removed
  function handleDeleteReminder(index) {
    const newReminders = [...reminders];
    newReminders.splice(index, 1);
    setReminders(newReminders);
  };

  // map over the reminders array and render a ReminderItem component for each reminder
  // pass the reminder, index, handleCheckReminder, handleDeleteReminder, setShowDeleteButton, and showDeleteButton
  // as props to the ReminderItem component. Renders button. When clicked, it shows the input field
  return (
    <div className="reminder">
      <header>
        <h3>Reminders</h3>
      </header>
      <div className="info-shape">
        <div className="reminders">
          {reminders.map((reminder, index) => (
            <ReminderItem
              key={index}
              reminder={reminder}
              index={index}
              handleCheckReminder={handleCheckReminder}
              handleDeleteReminder={handleDeleteReminder}
              setShowDeleteButton={setShowDeleteButton}
              showDeleteButton={showDeleteButton}
            />
          ))}
        </div>
      </div>
      {showTextBox && (
        <div>
          <input
            type="text"
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
          />
          <button onClick={handleAddReminder}> Add </button>
        </div>
      )}
      {!showTextBox && <button onClick={() => setShowTextBox(true)}> + Add Reminder</button>}
    </div>
  );
}

// ReminderItem component
// renders a div with a checkbox input, a span with the reminder text, and a delete button
function ReminderItem(props) {
  const {
    reminder,
    index,
    handleCheckReminder,
    handleDeleteReminder,
    setShowDeleteButton,
    showDeleteButton
  } = props;

  return (
    <div
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
    </div>
  );
}
// src/admin/EventForm.jsx
import React from 'react';

const EventForm = ({ newEvent, handleInputChange, handleAddOrUpdateEvent }) => {
  return (
    <div>
      <h1>Create New Event</h1>
      {['name', 'date', 'time', 'location', 'description', 'speakers'].map((field) => (
        <input
          key={field}
          type={field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={newEvent[field]}
          onChange={handleInputChange}
        />
      ))}
      <button onClick={handleAddOrUpdateEvent}>Add Event</button>
    </div>
  );
};

export default EventForm;

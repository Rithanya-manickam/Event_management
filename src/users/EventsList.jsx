// src/users/EventsList.jsx
import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';

const EventsList = ({ events, enrolledEvents, onEnroll }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    onEnroll(formData);          // Should be object: { id, name, date, ..., department, dietaryPreferences }
    setShowForm(false);
  };

  return (
    <div className="events-section">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => {
          const isEnrolled = enrolledEvents.some(e => e.id === event.id);
          const seatsLeft = event.maxSeats - enrolledEvents.filter(e => e.id === event.id).length;

          return (
            <li key={event.id} className="event-card">
              <strong>{event.name}</strong> – {event.date} @ {event.location}
              <p>{event.description}</p>
              <p>Seats Available: {seatsLeft}</p>
              <div className="event-actions">
                {isEnrolled ? (
                  <button disabled className="disabled-btn">Already Enrolled</button>
                ) : (
                  <button onClick={() => handleClick(event)} className="enroll-btn">
                    Enroll
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {showForm && selectedEvent && (
        <EnrollmentForm
          event={selectedEvent}
          onSubmit={(formData) => handleFormSubmit({ ...selectedEvent, ...formData })}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default EventsList;

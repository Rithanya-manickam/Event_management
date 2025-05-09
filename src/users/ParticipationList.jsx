// src/users/ParticipationList.jsx
import React from 'react';

const ParticipationList = ({ enrolledEvents }) => (
  <div className="participation-section">
    <h2>Your Enrolled Events</h2>
    {enrolledEvents.length === 0 ? (
      <p>No events enrolled yet.</p>
    ) : (
      <ul>
        {enrolledEvents.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong> – {event.date} @ {event.location}
            <div>Department: {event.department}</div>
            {event.dietaryPreferences && <div>Dietary: {event.dietaryPreferences}</div>}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ParticipationList;

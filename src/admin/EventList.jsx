// src/admin/EventList.jsx
import React from 'react';

const EventList = ({ events, onEditEvent, onDeleteEvent }) => {
  return (
    <div>
      <h2>Event List</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Speakers:</strong> {event.speakers}</p>
            <div className="event-buttons">
              <button onClick={() => onEditEvent(event)}>Edit</button>
              <button onClick={() => onDeleteEvent(event.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventList;

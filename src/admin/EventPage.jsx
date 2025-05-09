// src/admin/EventPage.jsx
import React, { useState } from 'react';
import { useAdminData } from './AdminDashboard'; // UPDATED IMPORT
import EventForm from './EventForm';
import EventList from './EventList';

const EventPage = () => {
  const { events, deleteEvent } = useAdminData();
  const [editingEvent, setEditingEvent] = useState(null);

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleFormSubmit = () => {
    setEditingEvent(null);
  };

  return (
    <div>
      <EventForm editingEvent={editingEvent} onFormSubmit={handleFormSubmit} />
      <EventList events={events} onEdit={handleEdit} onDelete={deleteEvent} />
    </div>
  );
};

export default EventPage;

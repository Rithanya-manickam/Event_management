// src/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import Sidebar
import EventForm from './EventForm';
import RSVPDashboard from './RSVPDashboard';
import FeedbackCollection from './FeedbackCollection';
import SendEventUpdates from './SendEventUpdates';
import EventList from './EventList';
import AnalyticsDashboard from './AnalyticsDashboard';
import WelcomeBanner from './WelcomeBanner';

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <h1>Admin Dashboard</h1>
    </div>
  );
};

const AdminDashboard = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Tech Conference 2025',
      date: '2025-06-10',
      time: '09:00 AM',
      location: 'Tech City Hall',
      description: 'An amazing tech conference.',
      speakers: 'John Doe, Jane Smith',
      rsvps: [
        { id: 1, department: 'Engineering' },
        { id: 2, department: 'Marketing' },
      ],
      feedbacks: [
        { rating: 5, comment: 'Great event!' },
        { rating: 4, comment: 'Very informative.' },
      ],
    },
    {
      id: 2,
      name: 'Marketing Summit 2025',
      date: '2025-07-15',
      time: '10:00 AM',
      location: 'Marketing Center',
      description: 'A summit to discuss marketing strategies.',
      speakers: 'Alice Cooper, Bob Williams',
      rsvps: [
        { id: 3, department: 'Marketing' },
        { id: 4, department: 'Sales' },
      ],
      feedbacks: [
        { rating: 3, comment: 'Could be more interactive.' },
        { rating: 4, comment: 'Good content.' },
      ],
    },
    {
      id: 3,
      name: 'Sales Training Workshop',
      date: '2025-08-20',
      time: '02:00 PM',
      location: 'Sales Office',
      description: 'Sales training for the new recruits.',
      speakers: 'Samantha Lee, George Brown',
      rsvps: [
        { id: 5, department: 'Sales' },
        { id: 6, department: 'HR' },
      ],
      feedbacks: [
        { rating: 4, comment: 'Useful workshop.' },
        { rating: 5, comment: 'Great speakers!' },
      ],
    },
  ]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', location: '', description: '', speakers: '' });
  const [editingEventId, setEditingEventId] = useState(null);
  const [filterDept, setFilterDept] = useState('');

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setNewEvent({ name: '', date: '', time: '', location: '', description: '', speakers: '' });
  };

  const handleAddOrUpdateEvent = () => {
    if (!newEvent.name || !newEvent.date || !newEvent.time || !newEvent.location || !newEvent.description || !newEvent.speakers) {
      alert('Please fill out all fields.');
      return;
    }

    if (editingEventId) {
      setEvents(events.map(ev => ev.id === editingEventId ? { ...ev, ...newEvent } : ev));
      setEditingEventId(null);
    } else {
      const newId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
      setEvents([...events, { ...newEvent, id: newId, rsvps: [], feedbacks: [] }]);
    }
    resetForm();
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  const handleEditEvent = (ev) => {
    setEditingEventId(ev.id);
    setNewEvent({ ...ev });
  };

  const handleCancelRSVP = (eventId, rsvpId) => {
    setEvents(events.map(event =>
      event.id === eventId
        ? { ...event, rsvps: event.rsvps.filter(r => r.id !== rsvpId) }
        : event
    ));
  };

  return (
    <div className="admin-dashboard">
      {/* Pass sidebarOpen and setSidebarOpen to Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex relative min-h-screen">
        <button
          className="sidebar-toggle-btn md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      <div className="main-content">
        <HeaderMenu />
        {location.pathname === "/admin" && <WelcomeBanner />}
        <Routes>
          <Route path="events" element={
            <div>
              <EventForm
                newEvent={newEvent}
                handleInputChange={handleInputChange}
                handleAddOrUpdateEvent={handleAddOrUpdateEvent}
                editingEventId={editingEventId}
              />
              <EventList
                events={events}
                onEditEvent={handleEditEvent}
                onDeleteEvent={handleDeleteEvent}
              />
            </div>
          } />
          <Route path="rsvps" element={
            <RSVPDashboard
              events={events}
              filterDept={filterDept}
              setFilterDept={setFilterDept}
              handleCancelRSVP={handleCancelRSVP}
            />
          } />
          <Route path="feedback" element={
            <FeedbackCollection
              events={events}
            />
          } />
          <Route path="updates" element={
            <SendEventUpdates
              events={events}
            />
          } />
          <Route path="analytics" element={<AnalyticsDashboard events={events} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;

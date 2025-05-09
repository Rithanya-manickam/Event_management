// src/users/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import EventsList from './EventsList';
import ParticipationList from './ParticipationList';
import ProfileManagement from './ProfileManagement';
import EventSuggestion from './EventSuggestion';
import EnrollmentForm from './EnrollmentForm';
import WelcomeBanner from './WelcomeBanner';

const UserDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [enrolledEvents, setEnrolledEvents] = useState([]);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('feedbacks');
    if (stored) {
      setFeedbacks(JSON.parse(stored));
    }
  }, []);

  const events = [
    { id: 1, name: 'Tech Conference', date: '2025-06-01', location: 'New York', description: 'A tech gathering', maxSeats: 100 },
    { id: 2, name: 'Design Workshop', date: '2025-06-15', location: 'San Francisco', description: 'Hands-on design learning', maxSeats: 50 },
    { id: 3, name: 'Startup Meetup', date: '2025-07-10', location: 'Chicago', description: 'Networking for startups', maxSeats: 75 },
  ];

  const handleEnrollClick = (event) => {
    setCurrentEvent(event);
    setIsEnrollmentOpen(true);
  };

  const handleEnrollmentSubmit = (formData) => {
    if (!enrolledEvents.find(e => e.id === currentEvent.id)) {
      setEnrolledEvents([...enrolledEvents, { ...currentEvent, ...formData }]);
    }
    setIsEnrollmentOpen(false);
  };

  const addFeedback = (name, message) => {
    const newFeedback = { id: Date.now(), name, message };
    const updated = [...feedbacks, newFeedback];
    setFeedbacks(updated);
    localStorage.setItem('feedbacks', JSON.stringify(updated));
  };

  return (
    <div className="user-dashboard-container">
      <button className="sidebar-toggle-btn md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="main-content">
        {location.pathname === "/user" && <WelcomeBanner />}

        <Routes>
          <Route
            path="events"
            element={
              <EventsList
                events={events}
                enrolledEvents={enrolledEvents}
                onEnroll={handleEnrollClick}
              />
            }
          />
          <Route
            path="participation"
            element={<ParticipationList enrolledEvents={enrolledEvents} />}
          />
          <Route
            path="suggestion"
            element={<EventSuggestion addFeedback={addFeedback} />}
          />
          <Route
            path="profile"
            element={<ProfileManagement />}
          />
        </Routes>

        {isEnrollmentOpen && currentEvent && (
          <EnrollmentForm
            event={currentEvent}
            onSubmit={handleEnrollmentSubmit}
            onClose={() => setIsEnrollmentOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

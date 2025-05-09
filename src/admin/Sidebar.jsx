// src/admin/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={() => setSidebarOpen(false)}>
        ✖
      </button>
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/admin/events" onClick={() => setSidebarOpen(false)}>Events</Link>
          </li>
          <li>
            <Link to="/admin/rsvps" onClick={() => setSidebarOpen(false)}>RSVPs</Link>
          </li>
          <li>
            <Link to="/admin/feedback" onClick={() => setSidebarOpen(false)}>Feedback</Link>
          </li>
          <li>
            <Link to="/admin/updates" onClick={() => setSidebarOpen(false)}>Send Updates</Link>
          </li>
          <li>
            <Link to="/admin/analytics" onClick={() => setSidebarOpen(false)}>Analytics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

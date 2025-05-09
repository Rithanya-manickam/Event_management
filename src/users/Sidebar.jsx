import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`sidebar fixed top-0 left-0 h-full w-64 bg-indigo-600 text-white p-4 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <button
        className="close-btn md:hidden text-white"
        onClick={() => setSidebarOpen(false)}
      >
        ✖
      </button>

      <ul className="menu">
        <li>
          <Link to="/user/events" onClick={() => setSidebarOpen(false)}>
            Upcoming Events
          </Link>
        </li>
        <li>
          <Link to="/user/participation" onClick={() => setSidebarOpen(false)}>
            Track Participation
          </Link>
        </li>
        <li>
          <Link to="/user/suggestion" onClick={() => setSidebarOpen(false)}>
            Suggest Event
          </Link>
        </li>
        <li>
          <Link to="/user/profile" onClick={() => setSidebarOpen(false)}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

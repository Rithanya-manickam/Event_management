// src/admin/RSVPDashboard.jsx
import React from 'react';

const RSVPDashboard = ({ events, filterDept, setFilterDept, handleCancelRSVP }) => {
  return (
    <div>
      <h2>RSVP Dashboard</h2>
      <input
        type="text"
        placeholder="Filter by department"
        value={filterDept}
        onChange={(e) => setFilterDept(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      {events.map((event) => (
        <div key={event.id} className="mb-6">
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <ul>
            {event.rsvps
              .filter((rsvp) => !filterDept || rsvp.department.includes(filterDept))
              .map((rsvp) => (
                <li key={rsvp.id} className="flex items-center justify-between mb-2">
                  <span>
                    <strong>{rsvp.name}</strong> ({rsvp.department})
                  </span>
                  <button
                    onClick={() => handleCancelRSVP(event.id, rsvp.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Cancel RSVP
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RSVPDashboard;

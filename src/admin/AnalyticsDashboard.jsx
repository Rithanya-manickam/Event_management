// src/admin/AnalyticsDashboard.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f'];

const AnalyticsDashboard = ({ events }) => {
  // Log the events data to check if it's passed correctly
  console.log(events);

  // Ensure events data exists and is in the correct format
  if (!events || events.length === 0) {
    return <div>No events data available.</div>;
  }

  // RSVPs per event
  const rsvpsPerEvent = events.map(event => ({
    name: event.name,
    rsvps: event.rsvps ? event.rsvps.length : 0,
  }));

  // Department participation
  const departmentCount = {};
  events.forEach(event => {
    event.rsvps.forEach(rsvp => {
      departmentCount[rsvp.department] = (departmentCount[rsvp.department] || 0) + 1;
    });
  });

  const departmentData = Object.entries(departmentCount).map(([dept, count]) => ({
    name: dept,
    value: count
  }));

  // Feedback summary
  const feedbackData = events.map(event => ({
    name: event.name,
    feedbacks: event.feedbacks ? event.feedbacks.length : 0,
  }));

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Analytics Dashboard</h2>

      {/* RSVPs per Event */}
      <div>
        <h3 className="text-lg font-semibold mb-2">RSVPs per Event</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={rsvpsPerEvent}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rsvps" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Department Participation */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Department Participation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={departmentData} dataKey="value" nameKey="name" outerRadius={100} label>
              {departmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Feedback Summary */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Feedback Summary</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={feedbackData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="feedbacks" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

// src/admin/FeedbackCollection.jsx
import React, { useState, useEffect } from 'react';

const FeedbackCollection = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('feedbacks');
    if (stored) {
      setFeedbacks(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Feedback Collection</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="space-y-3">
          {feedbacks.map((fb) => (
            <li key={fb.id} className="p-3 border rounded shadow-sm">
              <p><strong>Name:</strong> {fb.name}</p>
              <p><strong>Event:</strong> {fb.eventName}</p>
              <p><strong>Suggestion:</strong> {fb.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackCollection;

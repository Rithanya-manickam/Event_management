// src/users/EventSuggestion.jsx
import React, { useState } from 'react';

const EventSuggestion = () => {
  const [name, setName] = useState('');
  const [eventName, setEventName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state for submission confirmation

  const handleSuggestEvent = () => {
    if (!name || !eventName || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name,
      eventName,
      message,
    };

    const existingFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    const updatedFeedbacks = [...existingFeedbacks, newFeedback];
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));

    setSubmitted(true); // Show submission confirmation
    setTimeout(() => setSubmitted(false), 3000); // Hide confirmation after 3 seconds

    setName('');
    setEventName('');
    setMessage('');
  };

  return (
    <div className="suggestion-section p-4">
      <h2 className="text-xl font-semibold mb-4">Suggest an Event</h2>
      <div className="space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Your Suggestion"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSuggestEvent}
        >
          Submit Suggestion
        </button>
      </div>

      {/* Sliding Popup Confirmation */}
      {submitted && (
        <div className="fixed top-0 left-0 w-full p-4 bg-green-500 text-white text-center transform transition-all duration-300 slide-in-popup">
          <div>Your suggestion has been submitted successfully!</div>
        </div>
      )}
    </div>
  );
};

export default EventSuggestion;

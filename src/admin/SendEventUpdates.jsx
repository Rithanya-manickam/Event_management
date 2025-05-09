import React, { useState } from 'react';

const SendEventUpdates = ({ events }) => {
  // State to manage the notification message input
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleMessageChange = (e) => {
    setNotificationMessage(e.target.value);
  };

  const handleSendNotifications = () => {
    if (notificationMessage.trim() === '') {
      alert('Please write a notification message before sending.');
      return;
    }

    // Iterate through the events and send the notification
    events.forEach((event) => {
      // Assuming each event has an enrolled persons list (enrolledPeople), simulate sending notification
      event.enrolledPeople.forEach((person) => {
        alert(`Sending notification to ${person.name}: ${notificationMessage}`);
        // Implement actual send logic here, e.g., API call to send notification
      });
    });

    // Reset the message after sending notifications
    setNotificationMessage('');
  };

  return (
    <div>
      <h2>Send Notifications to All Enrolled Persons</h2>

      <textarea
        placeholder="Write your notification message"
        value={notificationMessage}
        onChange={handleMessageChange}
        rows={4}
        className="event-update-textarea"
      />

      <button onClick={handleSendNotifications} className="send-notification-btn">
        Send Notifications
      </button>
    </div>
  );
};

export default SendEventUpdates;

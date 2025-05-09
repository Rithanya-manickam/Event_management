import React, { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: 'John Doe', message: 'Great event!' },
    { id: 2, name: 'Jane Smith', message: 'Loved it!' },
    { id: 3, name: 'Alice Johnson', message: 'Well organized.' },
  ]);

  const addFeedback = (name, message) => {
    const newFeedback = {
      id: Date.now(),
      name,
      message,
    };
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);

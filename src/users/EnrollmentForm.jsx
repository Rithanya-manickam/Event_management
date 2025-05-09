import React, { useState } from 'react';

const EnrollmentForm = ({ event, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    dietaryPreferences: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
  
    if (!formData.name || !formData.department) {
      alert('Please fill in all fields!');
      return;
    }
  
    onSubmit(formData); // this triggers setIsEnrollmentOpen(false)
  };
  

    // Submit form data to parent (UserDashboard)


  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Enroll for {event.name}</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
          <label>Dietary Preferences</label>
          <input
            type="text"
            name="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>Enroll</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;

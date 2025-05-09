import React, { useState } from 'react';

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    dietaryPreferences: '',
    profilePicture: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you can send `profile` to the backend API if needed
    console.log('Saved Profile:', profile);
  };

  return (
    <div className="profile-section p-4 bg-white rounded-xl shadow-md max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Profile Management</h2>

      {[
        { label: 'Full Name', name: 'fullName', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Phone Number', name: 'phone', type: 'tel' },
        { label: 'Department', name: 'department', type: 'text' },
        { label: 'Designation', name: 'designation', type: 'text' },
        { label: 'Dietary Preferences', name: 'dietaryPreferences', type: 'text' },
        { label: 'Profile Picture URL', name: 'profilePicture', type: 'text' },
      ].map((field) => (
        <div key={field.name}>
          <label className="block font-medium">{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={profile[field.name]}
            onChange={handleProfileChange}
            className="w-full border p-2 rounded"
            disabled={!isEditing}
          />
        </div>
      ))}

      {profile.profilePicture && (
        <img
          src={profile.profilePicture}
          alt="Profile"
          className="mt-2 h-24 w-24 object-cover rounded-full"
        />
      )}

      <div className="flex justify-end gap-4 pt-4">
        {!isEditing ? (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSaveClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileManagement;

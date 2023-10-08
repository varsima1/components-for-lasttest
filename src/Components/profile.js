import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching user data for userId:", userId);
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/users/${userId}`);
        console.log("API Response:", response.data); // Check the response data
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle specific error cases, show appropriate error messages, etc.
      }
    };
  
    fetchUserData();
  }, [userId]);
  

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Profile">
      <h2>User Profile</h2>
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Country: {user.address.country}</p>
      <p>City: {user.address.city}</p>
      <p>Street: {user.address.street}</p>
      <p>House Number: {user.address.houseNumber}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default Profile;

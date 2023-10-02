import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './scss/settings/Settings.scss';
import axios from 'axios';
import { useAuth } from './AuthContext';

function Settings() {
  const { user, updateUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    image: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
  });

  useEffect(() => {
    // Update the form data with user information when user object is available
    if (user) {
      setFormData({
        phone: user.phone,
        email: user.email,
        password: '',
        image: user.image.url,
        country: user.address.country,
        city: user.address.city,
        street: user.address.street,
        houseNumber: user.address.houseNumber,
      });
    }
  }, [user]);

  if (!user) {
    // Handle the case when user is null or undefined (redirect to login page or show a message)
    return <div>User not found. Please login.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make API call to update user information
      const response = await axios.put(`http://localhost:8181/users/${user.id}`, formData);
      // Update user context with the updated user information
      updateUser(response.data);
      // Redirect or show a success message
    } catch (error) {
      console.error(error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className='Settings-container'>
      <h2>Edit Profile</h2>
      <Form onSubmit={onSubmit}>
        {/* ... rest of your form */}
      </Form>
    </div>
  );
}

export default Settings;

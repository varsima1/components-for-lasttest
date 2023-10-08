import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './scss/settings/Settings.scss';
import axios from 'axios';
import { useAuth } from './AuthContext';
import withLoader from './loader/withLoader';

function Settings() {
  const { user, updateUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
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
      const { phone, address } = user;
      setFormData({
        phone: phone || '', // Provide default value for phone if it's undefined
        password: '',
        image: user.image?.url || '', // Use optional chaining and provide a default value if user.image is undefined
        country: address?.country || '', // Use optional chaining and provide a default value if address.country is undefined
        city: address?.city || '', // Use optional chaining and provide a default value if address.city is undefined
        street: address?.street || '', // Use optional chaining and provide a default value if address.street is undefined
        houseNumber: address?.houseNumber || '', // Use optional chaining and provide a default value if address.houseNumber is undefined
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
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formHouseNumber">
          <Form.Label>House Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your house number"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default withLoader(Settings);

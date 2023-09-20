import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './scss/Login/Login.scss';
import withLoader from './loader/withLoader'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='Lcontainer'>
      <input type='Email' placeholder='Email' className='Lsame' required />
      <br />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className='Lsame'
        />
        <span className='password-toggle-icon' onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
        <br/>
        <button className='Lbutton'>Log in</button>
      </div>
  );
}

export default withLoader(Login);

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import withLoader from './loader/withLoader'
import './scss/Signup/Signup.scss'

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='Scontainer'>
      <input type='text'placeholder='name'className='Ssame'required/>
      <input type='text'placeholder='lastname'className='Ssame'required/><br />
      <input type='email'placeholder='Email'className='Esame'required/><br />
      <input type={showPassword ? 'text' : 'password'}placeholder='Password'className='Esame'required/>
      <span className='password-toggle-icon' onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span><br/>
      <button className='Sbutton'>Signup</button>
    </div>
  )
}

export default withLoader(Signup)
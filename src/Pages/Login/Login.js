/** @format */

import React, { useState } from 'react';
import './login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (setUsername == 'shri' && setPassword == 'password') {
      alert(
        `your values are password is  ${setPassword} and username is ${setUsername}  `
      );
    }
  };
  const hunchange = (e) => {
    setUsername(e.target.value);
  };
  const hpasschange = (e) => {
    setPassword(e.target.value);
  };
  console.log(hunchange + 'this is username');
  console.log(hpasschange + 'this is password');
  return (
    <>
      <div class='wrapper'>
        <div class='logo'>
          {' '}
          <img src='#shri Image' alt='' />{' '}
        </div>
        <div class='text-center mt-4 name'> Shrikant Arts </div>
        <form class='p-3 mt-3' onSubmit={handleSubmit}>
          <div class='form-field d-flex align-items-center'>
            {' '}
            <span class='far fa-user'></span>
            <input
              type='text'
              name='userName'
              id='userName'
              placeholder='Username'
              value={username}
              onChange={hunchange}
              // onChange={(e) => setUsername(e.target.value)}
            />{' '}
          </div>
          <div class='form-field d-flex align-items-center'>
            {' '}
            <span class='fas fa-key'></span>
            <input
              type='password'
              name='password'
              id='pwd'
              placeholder='Password'
              value={password}
              onChange={hpasschange}
              // onChange={(e) => setPassword(e.target.value)}
            />{' '}
          </div>{' '}
          <button class='btn mt-3'>Login</button>
        </form>
      </div>{' '}
    </>
  );
};

export default Login;

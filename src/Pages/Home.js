/** @format */

import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import Login from './Login/Login';
export default function Home() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <Login />
    </div>
  );
}

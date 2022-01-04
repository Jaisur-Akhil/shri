/** @format */

import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import Login from './Login/Login'
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
        <Login/>
      <GoogleLogin
        clientId='489777942407-034dfv5qas6v4tujsg7ob7rdpv2u24qt.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <GoogleLogin
        clientId='489777942407-034dfv5qas6v4tujsg7ob7rdpv2u24qt.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        isSignedIn={true}
      />
      <GoogleLogout
        clientId='489777942407-034dfv5qas6v4tujsg7ob7rdpv2u24qt.apps.googleusercontent.com'
        buttonText='Logout'
        onLogoutSuccess={logout}></GoogleLogout>
    </div>
  );
}

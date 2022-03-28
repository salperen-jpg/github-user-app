import React from 'react';
import img from '../assets/login.svg';
import '../Styles/login.scss';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className='login-screen'>
      <div className='container'>
        <img src={img} alt='img' />
        <button className='btn login-btn' onClick={loginWithRedirect}>
          Login / sign up
        </button>
      </div>
    </section>
  );
};

export default Login;

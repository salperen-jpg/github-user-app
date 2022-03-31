import React from 'react';
import '../Styles/Error.scss';
import { Link } from 'react-router-dom';
import Img from '../assets/404.svg';

const Error = () => {
  return (
    <main className='error'>
      <img src={Img} alt='errorpage' />
      <h4>page is not existed</h4>
      <Link className='btn error-btn' to='/'>
        Go back
      </Link>
    </main>
  );
};

export default Error;

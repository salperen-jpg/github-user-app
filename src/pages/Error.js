import React from 'react';
import '../Styles/Error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className='error'>
      <h1>page is not existed</h1>
      <Link className='btn error-btn' to='/'>
        Go back
      </Link>
    </main>
  );
};

export default Error;

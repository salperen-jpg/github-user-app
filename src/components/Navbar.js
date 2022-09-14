import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <>
      <nav>
        <div className='nav-center'>
          {isUser && user.picture && (
            <img src={user.picture} className='auth nav-img' alt={user.name} />
          )}
          {isUser && user.name && (
            <h4>
              Welcome to Gituser App ! <span>{user.name}</span>
            </h4>
          )}
          {isUser ? (
            <button
              className='btn nav-btn'
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              logout
            </button>
          ) : (
            <button className='btn nav-btn' onClick={loginWithRedirect}>
              login
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

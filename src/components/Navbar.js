import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <div>
      <nav>
        {isUser && user.picture && (
          <img src={user.picture} className='auth' alt={user.name} />
        )}
        {isUser && user.name && <h4>Welcome to app !</h4>}
        {isUser ? (
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            logout
          </button>
        ) : (
          <button onClick={loginWithRedirect}>login</button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

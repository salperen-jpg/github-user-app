import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <>{children}</>;
};

export default AuthWrapper;

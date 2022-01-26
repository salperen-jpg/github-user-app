import React, { useContext } from 'react';

const rootEndPoint = 'https://api.github.com';
const userUrl = 'https://api.github.com/users/salperen-jpg';
const repoUrl = 'https://api.github.com/users/salperen-jpg/repos?per_page=100';
const followersUrl = 'https://api.github.com/users/salperen-jpg/followers';
const rateUrlLimit = 'https://api.github.com/rate_limit';

const GithubContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <GithubContext.Provider value='hello'>{children}</GithubContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};

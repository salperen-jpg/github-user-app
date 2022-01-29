import React, { useContext, useState } from 'react';
import followers from './Followers';
import repos from './Repos';
import user from './User';

const GithubContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(user);
  const [gitFollowers, setGitFollowers] = useState(followers);
  const [gitRepos, setGitRepos] = useState(repos);

  return (
    <GithubContext.Provider value={{ githubUser, gitFollowers, gitRepos }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};

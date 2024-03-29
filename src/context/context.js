import React, { useContext, useState, useEffect } from 'react';

import axios from 'axios';

const endPoint = 'https://api.github.com';

const GithubContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState('');
  const [gitRepos, setGitRepos] = useState([]);
  const [request, setRequest] = useState(0);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('salperen-jpg');

  // Fetch for github user
  const searchGithubUser = async (user) => {
    displayError();
    setIsLoading(true);
    const response = await axios(`${endPoint}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login } = response.data;
      axios(`${endPoint}/users/${login}/repos?=per-page=100`).then((res) => {
        setGitRepos(res.data);
      });
    } else {
      displayError(true, 'There is no such a user.');
    }
    checkRequest();
    setIsLoading(false);
  };
  // Fetch for request
  const checkRequest = () => {
    axios(`${endPoint}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequest(remaining);

        if (remaining === 0) {
          displayError(true, 'You exceeded the hourly search limit !');
        }
      })
      .catch((err) => console.log(err));
  };

  const displayError = (show = false, msg = '') => {
    setIsError({ show, msg });
  };
  const handleChange = (query) => {
    setUser(query);
  };

  useEffect(checkRequest, []);
  useEffect(() => {
    searchGithubUser('salperen-jpg');
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        gitRepos,
        request,
        isError,
        searchGithubUser,
        isLoading,
        user,
        handleChange,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};

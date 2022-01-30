import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Search.scss';

const Search = () => {
  const { request, isError, searchGithubUser } = useGlobalContext();
  console.log(request);
  const [user, setUser] = useState('salperen-jpg');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <section className='search-container'>
      <div className='search-center'>
        <form action='' className='form'>
          <input
            type='text'
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className='form-input'
            placeholder='Search for the user..'
          />
          <button type='submit' className='search-btn' onClick={handleSubmit}>
            <FaSearch></FaSearch>
          </button>
        </form>
        <div className='search-request'>
          <div
            className='search-value'
            style={{ width: `${300 - 5 * (60 - request)}px` }}
          ></div>
          <span className='current-request'>{request} / 60</span>
        </div>
      </div>
      {isError.show && <p className='error-message'>{isError.msg}</p>}
    </section>
  );
};

export default Search;

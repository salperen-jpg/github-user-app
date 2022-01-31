import React from 'react';
import { useGlobalContext } from '../context/context';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Search.scss';

const Search = () => {
  const { request, isError, searchGithubUser, user, handleChange } =
    useGlobalContext();
  console.log(request);

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
            onChange={(e) => handleChange(e.target.value)}
            className={`${
              request === 0 ? 'form-input input-border' : 'form-input'
            }`}
            disabled={`${request === 0 ? true : false}`}
            placeholder='Search for the user..'
          />
          <button type='submit' className='search-btn' onClick={handleSubmit}>
            <FaSearch
              className={`${request === 0 ? 'search-icon' : ''}`}
            ></FaSearch>
          </button>
        </form>
        <div className='search-request'>
          <div
            className='search-value'
            style={{ width: `${300 - 5 * (60 - request)}px` }}
          ></div>
          <span className='current-request'>{request} / 60</span>
        </div>
        <div className='search-text'>
          <h3 className='hourly-request'>
            Hourly Request : <span className='color-req'>{request}</span>
            /60
          </h3>
        </div>
      </div>
      {isError.show && <p className='error-message'>{isError.msg}</p>}
    </section>
  );
};

export default Search;

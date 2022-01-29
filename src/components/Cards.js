import React from 'react';
import { useGlobalContext } from '../context/context';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { RiUserFollowLine } from 'react-icons/ri';
import '../Styles/Cards.scss';

const Cards = () => {
  const { githubUser } = useGlobalContext();
  const {
    login,
    avatar_url: img,
    url,
    public_repos: repos,
    followers,
    following,
    location,
    company,
    html_url,
  } = githubUser;
  return (
    <article className='cards'>
      <div className='card-center'>
        <div className='card'>
          <span className='att'>Repos</span>
          <div className='card-right'>
            <div className='icon-container'>
              <RiGitRepositoryFill className='icon' />
            </div>
            <span className='value'>{repos}</span>
          </div>
        </div>
        {/* CARD */}
        <div className='card'>
          <span className='att'>Followers</span>
          <div className='card-right'>
            <div className='icon-container'>
              <FaUserFriends className='icon' />
            </div>
            <span className='value'>{followers}</span>
          </div>
        </div>
        {/* CARD */}
        <div className='card'>
          <span className='att'>Following</span>
          <div className='card-right'>
            <div className='icon-container'>
              <RiUserFollowLine className='icon' />
            </div>
            <span className='value'>{following}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards;

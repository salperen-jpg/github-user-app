import React from 'react';
import { useGlobalContext } from '../context/context';
// location,company
import { MdWork } from 'react-icons/md';
import moment from 'moment';
// icon
import { ImLocation2 } from 'react-icons/im';
// twitter
import { FaTwitter } from 'react-icons/fa';

import '../Styles/Profile.scss';

const Profile = () => {
  const { githubUser } = useGlobalContext();
  const {
    login,
    avatar_url: img,
    url,
    location,
    twitter_username,
    company,
    html_url,
    created_at,
  } = githubUser;
  return (
    <section className='profile'>
      <div className='profile-center'>
        <div className='img-container'>
          <img src={img} alt='img' />
        </div>
        <div className='profile-name'>
          <span className='login'>{login}</span>
          <span className='join'>
            Joined {moment(created_at).format('MMM Do YYYY')}
          </span>
          <a href={html_url} target='_blank' className=' btn profile-btn'>
            See profile
          </a>
        </div>

        <div className='profile-info'>
          <div className='info'>
            <ImLocation2 className='info-icon' />
            <span>{location}</span>
          </div>
          <div className='info'>
            <FaTwitter className='info-icon' />
            <span>{twitter_username || 'No info'}</span>
          </div>
          <div className='info'>
            <MdWork className='info-icon' />
            <span>{company || 'Unknown'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

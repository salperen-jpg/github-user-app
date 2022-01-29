import React from 'react';
import { Cards, Repos, Search } from '../components';
import Profile from '../components/Profile';

const Dashboard = () => {
  return (
    <article className='dashboard'>
      <Cards></Cards>
      <Profile />
    </article>
  );
};

export default Dashboard;

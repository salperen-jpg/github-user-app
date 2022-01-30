import React from 'react';
import { Cards, Repos, Search } from '../components';
import Loading from '../components/Loading';
import Profile from '../components/Profile';
import { useGlobalContext } from '../context/context';

const Dashboard = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <article className='dashboard'>
      <Search></Search>
      <Profile />
      <Cards></Cards>
      <Repos />
    </article>
  );
};

export default Dashboard;

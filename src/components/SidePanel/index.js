import React from 'react';
import Bookmarks from './Bookmarks';
import Search from './Search';
import UserDetails from './UserDetails';

const Index = () => {
  return (
    <>
      <UserDetails />
      <br />
      <Search />
      <br />
      <Bookmarks />
    </>
  );
};

export default Index;

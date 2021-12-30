import { Avatar, Button } from '@mui/material';
import React from 'react';
import Bookmarks from './Bookmarks';
import Search from './Search';
import AppContext from './../../Context/AppContext';
import UserDetails from './UserDetails';

const Index = () => {
  const { setUser, user } = React.useContext(AppContext);
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

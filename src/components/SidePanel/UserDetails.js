import { Avatar, Button } from '@mui/material';
import React from 'react';
import AppContext from './../../Context/AppContext';

const UserDetails = () => {
  const { setUser, user } = React.useContext(AppContext);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: '#ddd' }}>{user.username[0]}</Avatar>
          &nbsp;
          <h3>{user.username}</h3>
        </div>
        <div>
          <Button
            variant="outlined"
            color="error"
            href="#text-buttons"
            onClick={() => {
              setUser(null);
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

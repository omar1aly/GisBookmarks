import React from 'react';
import AppContext from '../../Context/AppContext';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Bookmarks = () => {
  // let bookmarks2 = [{ username: 'omar' }];
  // localStorage.setItem('bookmarks2', JSON.stringify(bookmarks2));
  // bookmarks2 = [...bookmarks2, { userame: 'yasser' }];
  // let stored = JSON.parse(localStorage.getItem('bookmarks2'));
  // console.log(stored);
  const { bookmarks, setSelectedBookmark } = React.useContext(AppContext);
  return (
    <>
      <h1>Bookmarks</h1>
      {bookmarks.length > 0 ? (
        bookmarks.map((sr, indx) => (
          <Paper
            style={{ padding: 10, margin: 10, cursor: 'pointer' }}
            key={indx}
            onClick={() => setSelectedBookmark(sr)}
          >
            {sr.address} - {sr.attributes.city}
          </Paper>
        ))
      ) : (
        <>No Bookmarks</>
      )}
    </>
  );
};

export default Bookmarks;

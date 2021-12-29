import React from 'react';
import AppContext from '../../Context/AppContext';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Bookmarks = () => {
  const { bookmarks, setSelectedBookmark } = React.useContext(AppContext);
  return (
    <>
      <Typography color="blue">Bookmarks</Typography>
      {bookmarks.length > 0 ? (
        bookmarks.map((sr, indx) => (
          <Paper
            style={{ padding: 10, margin: 10 }}
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

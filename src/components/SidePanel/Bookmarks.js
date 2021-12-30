import React from 'react';
import AppContext from '../../Context/AppContext';
import Paper from '@mui/material/Paper';

const Bookmarks = () => {
  const { Userbookmarks, setSelectedBookmark } = React.useContext(AppContext);
  return (
    <>
      <h1>Bookmarks</h1>
      {Userbookmarks.length > 0 ? (
        Userbookmarks.map((sr, indx) => (
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

import './App.css';
import Layout from './components/UI/Layout';
import MapComponent from './components/Map';
import SidePanel from './components/SidePanel';
import React, { useState } from 'react';
import AppContext from './Context/AppContext';
import Login from './components/Auth/Login';

function App() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [bookmarks, setBookMarks] = useState([]);
  const [user, setUser] = useState(null);

  const addBookMark = (newBookMark) => {
    setBookMarks([...bookmarks, newBookMark]);
  };

  return (
    <AppContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        bookmarks,
        addBookMark,
        selectedBookmark,
        setSelectedBookmark,
        user,
      }}
    >
      {!user ? (
        <Login onLoginSuccessed={(user) => setUser(user)} />
      ) : (
        <Layout sidePanel={<SidePanel />} map={<MapComponent />} />
      )}
    </AppContext.Provider>
  );
}

export default App;

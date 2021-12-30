import './App.css';
import Layout from './components/UI/Layout';
import MapComponent from './components/Map';
import SidePanel from './components/SidePanel';
import React, { useState, useEffect } from 'react';
import AppContext from './Context/AppContext';
import Login from './components/Auth/Login';

function App() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [Userbookmarks, setUserBookMarks] = useState([]);
  const [user, setUser] = useState(null);
  const [Users, setUsers] = useState([
    { username: 'admin', password: '123456', userBookMarks: [] },
    { username: 'user', password: '123456', userBookMarks: [] },
  ]);

  const addBookMark = (newBookMark) => {
    const userNow = Users.filter(
      (usr) => usr.username === newBookMark.username
    );
    userNow[0].userBookMarks = [...userNow[0].userBookMarks, newBookMark];
    setUserBookMarks(userNow[0].userBookMarks);
  };
  const setUserBookMark = (user) => {
    const userNow = Users.filter((usr) => usr.username === user[0].username);
    userNow[0].userBookMarks = [...userNow[0].userBookMarks];
    setUserBookMarks(userNow[0].userBookMarks);
  };

  const addUsers = (user) => {
    setUsers([...Users, user]);
  };

  return (
    <AppContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        addBookMark,
        selectedBookmark,
        setSelectedBookmark,
        user,
        setUser,
        Users,
        addUsers,
        Userbookmarks,
        setUserBookMark,
      }}
    >
      {!user ? (
        <Login onLoginSuccessed={(user) => setUser(user)} />
      ) : (
        <Layout sidePanel={<SidePanel />} map={<MapComponent />} user={user} />
      )}
    </AppContext.Provider>
  );
}

export default App;

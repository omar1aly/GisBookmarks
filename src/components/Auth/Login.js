import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import AppContext from './../../Context/AppContext';

const Login = ({ onLoginSuccessed }) => {
  const { Users, addUsers, setUserBookMark } = React.useContext(AppContext);
  const [view, setView] = useState('login');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    username: '',
    password: '',
    loginMessage: null,
    registerMessage: 'Account Created',
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleRegister = () => {
    const user = Users.filter(({ username, password }) => {
      return username === state.username;
    });
    if (user.length > 0) {
      setState({
        ...state,
        password: '',
        loginMessage: 'This account already exists',
        registerMessage: 'This account already exists',
      });
    }
    if (
      state.username.length === 0 ||
      state.username.length < 4 ||
      state.password.length === 0 ||
      state.password.length < 4
    ) {
      setState({
        ...state,
        loginMessage: 'Username and password should be 4 characters',
      });
    } else if (user.length < 1) {
      addUsers({
        username: state.username,
        password: state.password,
        userBookMarks: [],
      });
      state.loginMessage = null;
      setOpen(true);
      setLoading(true);
      setTimeout(() => {
        setView('login');
        setLoading(false);
      }, 1000);
    }
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const user = Users.filter(({ username, password }) => {
        return username === state.username && password === state.password;
      });
      setLoading(false);
      if (user.length === 0) {
        setState({
          ...state,
          loginMessage: 'Invalid username or password',
        });
        // console.log(Users);
        // console.log(user);
        return;
      }
      setUserBookMark(user);
      onLoginSuccessed(user[0]);
    }, 1000);
  };

  return (
    <>
      {view === 'login' && (
        <div
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <Paper
            style={{
              width: '25vw',
              marginTop: '20vh',
              padding: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <h1>Login</h1>
            <br />
            <br />
            <TextField
              variant="outlined"
              label="User name"
              id="username"
              fullWidth
              value={state.username}
              onChange={handleChange}
              disabled={loading}
              onKeyPress={(event) => event.key === 'Enter' && handleLogin()}
            ></TextField>
            <br />
            <br />
            <TextField
              value={state.password}
              variant="outlined"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={handleChange}
              disabled={loading}
              onKeyPress={(event) => event.key === 'Enter' && handleLogin()}
            ></TextField>
            <br />
            <br />
            <Button
              color="primary"
              variant="contained"
              disabled={loading}
              onClick={() => handleLogin()}
              fullWidth
            >
              Login
            </Button>
            <br />
            <br />
            <Typography color="red">{state.loginMessage}</Typography>
            <Typography
              color="primary"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                setView('Register');
                state.loginMessage = null;
                state.username = '';
                state.password = '';
              }}
            >
              {/* {state.toRegister} */}
              Create Account
            </Typography>
          </Paper>
        </div>
      )}
      {view === 'Register' && (
        <div
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <Paper
            style={{
              width: '25vw',
              marginTop: '20vh',
              padding: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <h1>Create Account</h1>
            <br />
            <br />
            <TextField
              variant="outlined"
              label="User name"
              id="username"
              fullWidth
              value={state.username}
              onChange={handleChange}
              disabled={loading}
              onKeyPress={(event) => event.key === 'Enter' && handleRegister()}
            ></TextField>
            <br />
            <br />
            <TextField
              value={state.password}
              variant="outlined"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={handleChange}
              disabled={loading}
              onKeyPress={(event) => event.key === 'Enter' && handleRegister()}
            ></TextField>
            <br />
            <br />
            <Button
              color="primary"
              variant="contained"
              disabled={loading}
              onClick={() => handleRegister()}
              fullWidth
            >
              Create Account
            </Button>
            <br />
            <br />
            <Typography
              color="primary"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                setView('login');
                state.loginMessage = null;
                state.username = '';
                state.password = '';
              }}
            >
              Login
            </Typography>
            <Snackbar open={open} autoHideDuration={6000}>
              <Alert severity="success" sx={{ width: '100%' }}>
                {state.registerMessage}
              </Alert>
            </Snackbar>
            <br />
            <Typography color="red">{state.loginMessage}</Typography>
          </Paper>
        </div>
      )}
    </>
  );
};

export default Login;

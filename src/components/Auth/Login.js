import { Button, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const Users = [
  { username: 'Admin', password: '123456' },
  { username: 'omar', password: '123' },
];

const Login = ({ onLoginSuccessed }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    loginMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const user = Users.filter((usr) => {
        return (
          usr.username.toUpperCase() === state.username.toUpperCase() &&
          usr.password === state.password
        );
      });
      setLoading(false);

      if (user.length === 0) {
        setState({
          ...state,
          loginMessage: 'Invalid username or password',
        });
        return;
      }
      onLoginSuccessed(user[0]);
    }, 1000);
  };

  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
      <Paper
        style={{
          width: '400px',
          marginTop: '100px',
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
          onClick={() => handleLogin}
          fullWidth
        >
          Login
        </Button>
        <br />
        <br />
        <Typography color="red">{state.loginMessage}</Typography>
      </Paper>
    </div>
  );
};

export default Login;

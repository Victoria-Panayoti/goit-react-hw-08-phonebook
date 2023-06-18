
import {Button, Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
       sx={{
        '& > :not(style)': {
          m: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="user-name">Name</InputLabel>
          <OutlinedInput id="user-name" type="text" name="name" label='Name'/>
        </FormControl>
         <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="user-email">Email</InputLabel>
          <OutlinedInput id="user-email" type="email" name="email" label='Email'/>
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="user-password">Password</InputLabel>
          <OutlinedInput id="user-password" type="password" name="password" label='Password'/>
        </FormControl>
        <Button type="submit" variant="contained" sx={{
          mt: 2,
          width: 150,
          color: '#95b095',
          backgroundColor: '#302727',
          '&:hover': {
            color: '#302727',
            backgroundColor:'#95b095',
        },
        }}>Register</Button>
      </form>
    </Box>
  );
};

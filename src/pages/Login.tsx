/*
MUI DESIGN LIBRARY
*/
import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Copyright from '@src/components/layout/Copyright';
/*
API LIBRARY
*/
import { useQuery, useMutation } from 'react-query';
import { ILogin } from '@src/types/Auth';
import AuthService from '@src/services/auth.service';

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [loginUser, setLoginUser] = useState<ILogin>({
    email: '',
    password: '',
  });
  const [loginResult, setLoginResult] = useState<string | null>(null);

  const formatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isPostingLogin, mutate: postUser } = useMutation<
    any,
    Error
  >(
    async () => {
      return await AuthService.login(loginUser);
    },
    {
      onSuccess: (res: any) => {
        setLoginResult(formatResponse(res));
      },
      onError: (err: any) => {
        setLoginResult(formatResponse(err.response?.data || err));
      },
    },
  );

  useEffect(() => {
    if (isPostingLogin) setLoginResult('posting...');
  }, [isPostingLogin]);

  const postData = () => {
    try {
      postUser();
    } catch (err) {
      setLoginResult(formatResponse(err));
    }
  };

  const clearPostOutput = () => {
    setLoginResult(null);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={loginUser.email}
            onChange={(e) => {
              setLoginUser((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={loginUser.password}
            onChange={(e) => {
              setLoginUser((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={postData}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}

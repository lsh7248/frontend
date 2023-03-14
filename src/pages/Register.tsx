/* MUI UI/UX Tool*/
import React, { useState, useEffect } from 'react';
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

/* API Query Library*/
import { useQuery, useMutation } from 'react-query';
import type { IUser, IUserCreate, IUserResult } from '@src/types/User';
import UserService from '@src/services/user.service';

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [postUserName, setPostUserName] = useState('');
  const [postUserPassword, setPostUserPassword] = useState('');
  const [postUserEmail, setPostUserEmail] = useState('');
  const [postResult, setPostResult] = useState<string | null>(null);
  const formatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isPostingUser, mutate: postUser } = useMutation<
    IUserCreate,
    Error
  >(
    async () => {
      return await UserService.createUser({
        name: postUserName,
        password: postUserPassword,
        email: postUserEmail,
      });
    },
    {
      onSuccess: (res) => {
        setPostResult(formatResponse(res));
      },
      onError: (err: any) => {
        setPostResult(formatResponse(err.response?.data || err));
      },
    },
  );

  useEffect(() => {
    if (isPostingUser) setPostResult('posting...');
  }, [isPostingUser]);

  const postData = () => {
    try {
      postUser();
    } catch (err) {
      setPostResult(formatResponse(err));
    }
  };

  const clearPostOutput = () => {
    setPostResult(null);
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                // required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={postUserName}
                onChange={(e) => setPostUserName(e.target.value)}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={postUserEmail}
                onChange={(e) => setPostUserEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={postUserPassword}
                onChange={(e) => setPostUserPassword(e.target.value)}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={postData}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </>
  );
}

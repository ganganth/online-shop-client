import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Login API
        console.log({
            email,
            password,
        });

        navigate('/admin/dashboard');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, sm: 4 },
                py: { xs: 3, sm: 4 },
                backgroundColor: 'grey.100',
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    borderRadius: { xs: 2, sm: 4 },
                    boxShadow: 6,
                }}
            >
                <CardContent
                    sx={{
                        p: {
                            xs: 3,
                            sm: 5,
                            md: 6,
                        },
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{
                                mb: 1,
                                fontSize: {
                                    xs: '1.8rem',
                                    sm: '2.125rem',
                                },
                            }}
                        >
                            Login
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 4 }}
                        >
                            Enter your details to access your account.
                        </Typography>

                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                            autoComplete="email"
                            sx={{ mb: 2.5 }}
                        />

                       <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword((previous) => !previous)
                                                }
                                                edge="end"
                                                aria-label={
                                                    showPassword
                                                        ? 'Hide password'
                                                        : 'Show password'
                                                }
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{ mb: 1 }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: {
                                    xs: 'flex-start',
                                    sm: 'center',
                                },
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                                gap: { xs: 1, sm: 0 },
                                mb: 3,
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Remember me"
                            />

                            <Button
                                type="button"
                                variant="text"
                                size="small"
                                sx={{
                                    textTransform: 'none',
                                    p: 0,
                                    minWidth: 'auto',
                                }}
                            >
                                Forgot Password?
                            </Button>
                        </Box>

                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;

import { useState } from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import EditOffIcon from '@mui/icons-material/EditOff';

const drawerWidth = 240;

const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

const adminMenuItems = [
    {
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: <DashboardIcon />,
    },
    {
        label: 'Products',
        path: '/admin/products',
        icon: <ShoppingCartIcon />,
    },
    {
        label: 'Reviews',
        path: '/admin/reviews',
        icon: <EditSquareIcon />,
    },
    {
        label: 'Complains',
        path: '/admin/complains',
        icon: <EditOffIcon />,
    },
];

const AdminMainLayout = ({ children }) => {
    const navigate = useNavigate();

    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleDrawerToggle = () => {
        setDrawerOpen((previous) => !previous);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        navigate('/home');
    };

    const drawerContent = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            {/* Logo */}
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Avatar
                    alt="Logo"
                    src="/images/logo.png"
                    sx={{
                        width: 80,
                        height: 80,
                        my: 3,
                    }}
                />
            </Toolbar>

            <Divider />

            {/* Admin Menu */}
            <List sx={{ mt: 2 }}>
                {adminMenuItems.map((item) => (
                    <ListItem
                        key={item.label}
                        disablePadding
                    >
                        <ListItemButton
                            onClick={() =>
                                handleNavigation(item.path)
                            }
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText
                                primary={item.label}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* kogOut */}
            <Box sx={{ mt: 'auto' }}>
                <Divider />

                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={handleLogout}
                        >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>

                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />

            {/* Top Navigation */}
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#ffff',
                    color: '#020202',

                    width: drawerOpen
                        ? `calc(100% - ${drawerWidth}px)`
                        : '100%',

                    ml: drawerOpen
                        ? `${drawerWidth}px`
                        : 0,

                    transition: (theme) =>
                        theme.transitions.create(
                            ['width', 'margin'],
                            {
                                easing:
                                    theme.transitions
                                        .easing.sharp,
                                duration:
                                    theme.transitions
                                        .duration.enteringScreen,
                            }
                        ),
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 'bold',
                        }}
                    >
                        RJ Admin Panel
                    </Typography>

                    <Box>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() =>
                                    handleNavigation(item.path)
                                }
                                sx={{
                                    color: '#020202',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Side Drawer */}
            <Drawer
                variant="persistent"
                open={drawerOpen}
                sx={{
                    width: drawerOpen ? drawerWidth : 0,
                    flexShrink: 0,

                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: drawerOpen
                        ? `calc(100% - ${drawerWidth}px)`
                        : '100%',

                    p: 3,

                    transition: (theme) =>
                        theme.transitions.create(
                            ['width'],
                            {
                                easing:
                                    theme.transitions
                                        .easing.sharp,
                                duration:
                                    theme.transitions
                                        .duration.enteringScreen,
                            }
                        ),
                }}
            >
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
};

export default AdminMainLayout;


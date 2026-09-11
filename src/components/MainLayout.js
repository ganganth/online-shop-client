import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';

const drawerWidth = 240;
const navItems = ['Home','Shop', 'About', 'Contact'];

const MainLayout = ({window, children}) => {;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavigation = (item) => {
        if (item === 'Home') {
            navigate('/home');
        } else if (item === 'About') {
            navigate('/about');
        } else if (item === 'Contact') {
            navigate('/contact');
        } else if (item === 'Shop') {
            navigate('/shop');
        }      
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar alt="logo" src="/images/logo.png" />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding onClick={() => {handleNavigation(item)}}>
                        <ListItemButton sx={{ textAlign: 'center' }} >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: '#f5f5f5', color: '#020202' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Avatar alt="logo" src="/images/logo.png" />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#020202', fontWeight: 'bold', fontSize: '14px' }} onClick={() => {handleNavigation(item)}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default MainLayout;


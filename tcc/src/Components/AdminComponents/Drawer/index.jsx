import { MenuContainer, LinkLine, Container, TitleHeader, MenuProfileLink } from './styles'
import * as React from 'react';
import { styled, useTheme, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserAuth } from '../../../Context/UserAuthContext.js'
import useInnerSize from '../../../Hooks/useInnerSize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import ChangePasswordModal from '../ChangePasswordModal';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DrawerMenu() {
    const theme = useTheme()
    const { innerWidth } = useInnerSize()
    const maxWidth = 768
    const [open, setOpen] = React.useState(innerWidth > maxWidth);
    const [anchorElMenu, setAnchorElMenu] = React.useState(null)
    const [isOpen, setIsOpen] = React.useState(false);

    const { logout } = useUserAuth()

    const handleLogOut = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };

    const handleClickMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const togglePasswordModal = () => {
        setIsOpen(!isOpen)
        handleCloseMenu()
    }

    const openPopover = Boolean(anchorElMenu);

    React.useEffect(() => setOpen(innerWidth > maxWidth), [innerWidth])

    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            className="ProfileMenu"
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleClickMenu}
                            sx={{ ml: 'auto' }}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElMenu}
                            open={openPopover}
                            onClose={handleCloseMenu}
                            style={{ top: '30px' }}
                        >
                            <MenuItem onClick={togglePasswordModal}>Trocar Senha</MenuItem>
                            <MenuItem onClick={handleLogOut}><MenuProfileLink to="/login" className="MenuProfileLink">Sair</MenuProfileLink></MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <TitleHeader>
                            <h4>HG</h4>
                        </TitleHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <MenuContainer>
                            <LinkLine><Link to="/dashboard"><DashboardIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Dashboard</Link></LinkLine>
                            <LinkLine><Link to="/register"><PersonAddAltIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Técnicos</Link></LinkLine>
                            <LinkLine><Link to="/calls"><ListAltIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Chamados</Link></LinkLine>
                            <LinkLine><Link to="/login" onClick={handleLogOut}><LogoutIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Sair</Link></LinkLine>
                        </MenuContainer>
                    </List>

                </Drawer>
            </Box>

            <ChangePasswordModal isOpen={isOpen} togglePasswordModal={togglePasswordModal} />
        </Container>
    );
}
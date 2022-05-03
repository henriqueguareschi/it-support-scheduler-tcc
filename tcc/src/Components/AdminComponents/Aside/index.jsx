import React, { useState } from 'react'
import { Container, MenuContainer, LinkLine, Header, ToggleMenu } from './styles';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../../Context/UserAuthContext.js'
import { Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';


const Aside = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }


    const { logout } = useUserAuth()

    const handleLogOut = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Container menuIsOpen={toggleMenu}>
            <ToggleMenu onClick={handleToggleMenu}>
                {toggleMenu ? <CloseIcon /> : <MenuIcon />}
            </ToggleMenu>
            <Header>
                <h4>HG</h4>
            </Header>
            <Divider className='line' variant="middle" />
            <MenuContainer>
                <LinkLine><Link to="/dashboard"><DashboardIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Dashboard</Link></LinkLine>
                <LinkLine><Link to="/register"><PersonAddAltIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Técnicos</Link></LinkLine>
                <LinkLine><Link to="/calls"><ListAltIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Chamados</Link></LinkLine>
                <LinkLine><Link to="/login" onClick={handleLogOut}><LogoutIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Sair</Link></LinkLine>
            </MenuContainer>

        </Container>
    )
}

export default Aside
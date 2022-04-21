import React from 'react'
import { Container, MenuContainer, LinkLine, Header } from './styles';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext.js'
import { Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';

const Aside = () => {
    const { logout } = useUserAuth()

    const handleLogOut = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Container>
            <Header>
                <h4>HG</h4>

            </Header>
            <Divider variant="middle" />
            <MenuContainer>
                <LinkLine><Link to="/dashboard"><DashboardIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Dashboard</Link></LinkLine>
                <LinkLine><Link to="/register"><PersonAddAltIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Técnicos</Link></LinkLine>
                <LinkLine><Link to="/calls"><ListAltIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Chamados</Link></LinkLine>
                <LinkLine><a href='/login' color="primary" onClick={handleLogOut}><LogoutIcon style={{ marginBottom: '3px', marginRight: '5px' }} />Sair</a></LinkLine>
            </MenuContainer>

        </Container>
    )
}

export default Aside
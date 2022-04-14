import React from 'react'
import { Container, MenuContainer } from './styles';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext.js'

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
            <h4>Aside</h4>
            <MenuContainer>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/register">Cadastrar novo Técnico</Link>
                <a href='/login' color="primary" onClick={handleLogOut}>Sair</a>
            </MenuContainer>

        </Container>
    )
}

export default Aside
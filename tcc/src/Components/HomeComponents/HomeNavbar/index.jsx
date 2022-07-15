import MenuIcon from '@mui/icons-material/Menu'
import { Nav, Logo, Container, IconMobile, Menu, Item, NLinks, NavBtn, NBtnLink, RouterLink } from './styles'
import { animateScroll as scroll } from 'react-scroll'

function HomeNavbar({ toggle }) {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <Container>
                    <Logo to="/" onClick={toggleHome}>HG</Logo>
                    <IconMobile onClick={toggle}>
                        <MenuIcon />
                    </IconMobile>
                    <Menu>
                        <Item>
                            <NLinks to="about">Sobre Nós</NLinks>
                        </Item>
                    </Menu>
                    <Menu>
                        <Item>
                            <NLinks to="services">Serviços</NLinks>
                        </Item>
                    </Menu>
                    <Menu>
                        <Item>
                            <NLinks to="call">Solicitar Chamado</NLinks>
                        </Item>
                    </Menu>
                    <Menu>
                        <Item>
                            <RouterLink to="/mycalls">Consultar Chamado</RouterLink>
                        </Item>
                    </Menu>
                    <NavBtn>
                        <NBtnLink to="/login">Área Técnica</NBtnLink>
                    </NavBtn>
                </Container>
            </Nav>
        </>
    )
}

export default HomeNavbar
import MenuIcon from '@mui/icons-material/Menu'
import { Nav, Logo, NavbarContainer, MobileIcon, Menu, NavItem, NavLinks, NavBtn, NavBtnLink } from './styles'
import { animateScroll as scroll } from 'react-scroll'

function HomeNavbar({ toggle }) {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo to="/" onClick={toggleHome}>HG</Logo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
                    <Menu>
                        <NavItem>
                            <NavLinks to="about">Sobre Nós</NavLinks>
                        </NavItem>
                    </Menu>
                    <Menu>
                        <NavItem>
                            <NavLinks to="services">Serviços</NavLinks>
                        </NavItem>
                    </Menu>
                    <Menu>
                        <NavItem>
                            <NavLinks to="call">Solicitar Chamado</NavLinks>
                        </NavItem>
                    </Menu>
                    <NavBtn>
                        <NavBtnLink to="/login">Área Técnica</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default HomeNavbar
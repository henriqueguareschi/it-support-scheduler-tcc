import MenuIcon from '@mui/icons-material/Menu';
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './styles'

function HomeNavbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">HG</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Sobre Nós</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="services">Serviços</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="call">Solicitar Chamado</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Área Técnica</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default HomeNavbar
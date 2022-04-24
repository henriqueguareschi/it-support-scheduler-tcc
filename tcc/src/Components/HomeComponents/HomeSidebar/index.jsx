import React from 'react'
import { Container, Icon, ClosedIcon, Wrapper, Menu, SidebarLink, SideBtnWrap, SidebarRoute } from './styles'

const HomeSidebar = ({ isOpen, toggle }) => {

    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <Wrapper>
                <Menu>
                    <SidebarLink to="about" onClick={toggle}>
                        Sobre Nós
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="call" onClick={toggle}>
                        Solicitar Chamado
                    </SidebarLink>
                </Menu>
                <SideBtnWrap>
                    <SidebarRoute to='/login' >Área Técnica</SidebarRoute>
                </SideBtnWrap>
            </Wrapper>
        </Container>
    )
}

export default HomeSidebar
import React from 'react'
import { Container, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './styles'

const HomeSidebar = ({ isOpen, toggle }) => {

    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Sobre Nós
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="call" onClick={toggle}>
                        Solicitar Chamado
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login' >Área Técnica</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </Container>
    )
}

export default HomeSidebar
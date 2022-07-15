import React from 'react'
import { Container, Icon, ClosedIcon, Wrapper, Menu, SideLink, BtnWrap, SideRoute } from './styles'

const HomeSidebar = ({ isOpen, toggle }) => {

    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <Wrapper>
                <Menu>
                    <SideLink to="about" onClick={toggle}>
                        Sobre Nós
                    </SideLink>
                    <SideLink to="services" onClick={toggle}>
                        Serviços
                    </SideLink>
                    <SideLink to="call" onClick={toggle}>
                        Solicitar Chamado
                    </SideLink>
                </Menu>
                <BtnWrap>
                    <SideRoute to='/login' >Área Técnica</SideRoute>
                </BtnWrap>
            </Wrapper>
        </Container>
    )
}

export default HomeSidebar
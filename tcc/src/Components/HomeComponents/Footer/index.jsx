import React from 'react'
import { Container, Wrap, FooterContent, ContentWrap, Logo, SiteRights, SideDescription } from './styles'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Container>
            <Wrap>
                <FooterContent>
                    <ContentWrap>
                        <Logo to="/" onClick={toggleHome}>HG</Logo>
                        <SideDescription>Trabalho de Conclusão de Curso - Henrique Guareschi - Ulbra Carazinho</SideDescription>
                        <SiteRights> HG © 2022 </SiteRights>
                    </ContentWrap>
                </FooterContent>
            </Wrap>
        </Container>
    )
}

export default Footer
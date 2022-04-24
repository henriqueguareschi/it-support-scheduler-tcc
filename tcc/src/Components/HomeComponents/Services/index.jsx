import React from 'react'
import Icon1 from '../../../Assets/server.svg'
import Icon2 from '../../../Assets/secure.svg'
import Icon3 from '../../../Assets/team.svg'
import { Container, Wrapper, H1, H2, Icon, Card } from './styles'

const Services = () => {
    return (
        <Container id="services">
            <H1>Nossos Serviços</H1>
            <Wrapper>
                <Card>
                    <Icon src={Icon1} />
                    <H2>Gerenciamento de Servidores</H2>
                </Card>
                <Card>
                    <Icon src={Icon2} />
                    <H2>Instalação e Configuração de Redes</H2>
                </Card>
                <Card>
                    <Icon src={Icon3} />
                    <H2>Atendimento Especializado</H2>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Services
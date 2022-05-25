import { Container, Welcome, WelcomeText, CardContainer, Cards, GraphicContainer, Content, GraphicArea } from './styles'
import ContentHeader from '../../Components/AdminComponents/ContentHeader'

const Dashboard = () => {

    return (
        <Container>
            <ContentHeader title="Dashboard" />
            <Welcome>
                <WelcomeText>
                    Seja bem-vindo ao nosso sistema! Aqui você controla todos os chamados solicitados por seus clientes e registra seus técnicos
                </WelcomeText>
            </Welcome>
            <Content>
                <CardContainer>
                    <Cards>
                        <span>Chamados Pendentes</span>
                    </Cards>
                    <Cards>
                        <span>Em Atendimento</span>
                    </Cards>
                    <Cards>
                        <span>Chamados Cancelados</span>
                    </Cards>
                </CardContainer>

                <GraphicContainer>
                    <Cards>
                        <span>Chamados Concluídos</span>
                    </Cards>
                    <GraphicArea>
                        <span>Chamados no Último Mês</span>
                    </GraphicArea>
                </GraphicContainer>
            </Content>
        </Container>
    )
}

export default Dashboard;
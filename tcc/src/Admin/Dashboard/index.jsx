import { Container, Welcome, WelcomeText, CardContainer, Cards, GraphicContainer, Content, GraphicArea, LeftDiv, RightDiv } from './styles'
import ContentHeader from '../../Components/AdminComponents/ContentHeader'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { collection, getDocs } from 'firebase/firestore'
import PendingIcon from '@mui/icons-material/Pending';
import { db } from '../../firebase-config'
import React from 'react'



const Dashboard = () => {
    const [calls, setCalls] = React.useState([])

    const callsCollectionRef = collection(db, "chamados")

    const getCalls = async () => {
        const data = await getDocs(callsCollectionRef)
        setCalls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }

    React.useEffect(() => {
        getCalls()
        console.log(JSON.stringify(calls))
    }, [])

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
                        <LeftDiv>
                            <h5>Pendentes</h5>
                            <h6>{calls.filter(c => c.status === "pendente").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <PendingIcon />
                        </RightDiv>
                    </Cards>
                    <Cards>
                        <LeftDiv>
                            <h5>Em Atendimento</h5>
                            <h6>{calls.filter(c => c.status === "em atendimento").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <DirectionsRunIcon />
                        </RightDiv>
                    </Cards>
                    <Cards>
                        <LeftDiv>
                            <h5>Cancelados</h5>
                            <h6>{calls.filter(c => c.status === "cancelado").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <HighlightOffIcon />
                        </RightDiv>
                    </Cards>
                </CardContainer>

                <GraphicContainer>
                    <Cards>
                        <LeftDiv>
                            <h5>Concluídos</h5>
                            <h6>{calls.filter(c => c.status === "finalizado").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <HighlightOffIcon />
                        </RightDiv>
                    </Cards>
                    <GraphicArea>
                        <h5>Chamados no Último Mês</h5>
                    </GraphicArea>
                </GraphicContainer>
            </Content>
        </Container>
    )
}

export default Dashboard;
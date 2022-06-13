import { Container, Welcome, WelcomeText, CardContainer, Cards, GraphicContainer, Content, GraphicArea, LeftDiv, RightDiv } from './styles'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ContentHeader from '../../Components/AdminComponents/ContentHeader'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { collection, getDocs } from 'firebase/firestore'
import PendingIcon from '@mui/icons-material/Pending';
import { db } from '../../firebase-config'
import React from 'react'
import moment from 'moment';


const Dashboard = () => {
    const DATE_LIMIT = 31;

    const [calls, setCalls] = React.useState([])

    const callsCollectionRef = collection(db, "chamados")

    const getCalls = async () => {
        const data = await getDocs(callsCollectionRef)
        const dateLimit = [moment(), moment().subtract(DATE_LIMIT, 'days')]
        setCalls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(c => moment(c.data, 'DD/MM/YYYY').isBetween(dateLimit[1], dateLimit[0])))
    }

    const groupCallByDate = () => {
        const empty = new Array(DATE_LIMIT).fill(null).map((_, i) => moment().subtract(DATE_LIMIT - i, 'days').format('DD/MM/YYYY')).reduce((a, b) => ({
            ...a,
            [b]: 0
        }), {})

        const grouped = calls.reduce((a, b) => ({
            ...a,
            [b.data]: (a[b.data] || 0) + 1
        }), empty)

        return Object.keys(grouped).map(k => ({
            "Data": k,
            "Chamados": grouped[k]
        }))
    }

    const callsByDate = groupCallByDate()

    React.useEffect(() => {
        getCalls()
        console.log(calls)
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
                            <h6>{calls.filter(c => c.status === "Pendente").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <PendingIcon />
                        </RightDiv>
                    </Cards>
                    <Cards>
                        <LeftDiv>
                            <h5>Em Atendimento</h5>
                            <h6>{calls.filter(c => c.status === "Em atendimento").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <DirectionsRunIcon />
                        </RightDiv>
                    </Cards>
                    <Cards>
                        <LeftDiv>
                            <h5>Cancelados</h5>
                            <h6>{calls.filter(c => c.status === "Cancelado").length}</h6>
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
                            <h6>{calls.filter(c => c.status === "Finalizado").length}</h6>
                        </LeftDiv>
                        <RightDiv>
                            <HighlightOffIcon />
                        </RightDiv>
                    </Cards>
                    <GraphicArea>
                        <h5>Chamados no Último Mês</h5>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={callsByDate.map(c => c)}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="Data" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Chamados" fill="#088080" />
                            </BarChart>
                        </ResponsiveContainer>
                    </GraphicArea>
                </GraphicContainer>
            </Content>
        </Container>
    )
}

export default Dashboard;
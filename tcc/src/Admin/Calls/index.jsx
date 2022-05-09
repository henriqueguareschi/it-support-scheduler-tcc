import ContentHeader from '../../Components/AdminComponents/ContentHeader'
import Cards from '../../Components/AdminComponents/Cards'
import { collection, getDocs } from 'firebase/firestore'
import { ContentArea, Container } from './styles'
import TabContext from '@mui/lab/TabContext'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'
import { Row } from 'react-bootstrap'
import Tab from '@mui/material/Tab'
import React from 'react'


const Calls = () => {
    const [calls, setCalls] = useState([])
    const [value, setValue] = React.useState("pending");
    console.log(calls, "calls")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const callsCollectionRef = collection(db, "chamados")
        const getCalls = async () => {
            const data = await getDocs(callsCollectionRef)
            setCalls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCalls()
    }, [])

    return (
        <Container>
            <ContentHeader title="Chamados" />
            <ContentArea>
                <TabContext value={value}>
                    <TabList onChange={handleChange}>
                        <Tab label="Pendentes" value="pending" />
                        <Tab label="Em Atendimento" value="attendance" />
                        <Tab label="Concluídos" value="finished" />
                        <Tab label="Cancelados" value="canceled" />
                    </TabList>
                    <TabPanel value="pending">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "pendente")} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="attendance">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "em atendimento")} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="finished">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "finalizado")} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="canceled">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "cancelado")} />
                        </Row>
                    </TabPanel>
                </TabContext>
            </ContentArea>
        </Container>
    )
}

export default Calls;
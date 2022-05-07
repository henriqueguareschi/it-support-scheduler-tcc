import ContentHeader from '../../Components/AdminComponents/ContentHeader'
import Cards from '../../Components/AdminComponents/Cards'
import { collection, getDocs } from 'firebase/firestore'
import { ContentArea, Container } from './styles'
import TabContext from '@mui/lab/TabContext'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { Row } from 'react-bootstrap'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import React from 'react'


const Calls = () => {
    const [calls, setCalls] = useState([])
    const [value, setValue] = React.useState('1');
    const callsCollectionRef = collection(db, "chamados")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const getCalls = async () => {
            const data = await getDocs(callsCollectionRef)
            setCalls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(calls)
        }
        getCalls()
    }, [])

    return (
        <Container>
            <ContentHeader title="Chamados" />
            <ContentArea>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Pendentes" value="pending" />
                            <Tab label="Em Atendimento" value="attendance" />
                            <Tab label="Concluídos" value="finished" />
                            <Tab label="Cancelados" value="canceled" />
                        </TabList>
                    </Box>
                    <TabPanel value="pending">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="attendance">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="finished">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="canceled">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls} />
                        </Row>
                    </TabPanel>
                </TabContext>
            </ContentArea>
        </Container>
    )
}

export default Calls;
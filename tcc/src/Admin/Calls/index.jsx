import ContentHeader from '../../Components/AdminComponents/ContentHeader'
import Cards from '../../Components/AdminComponents/Cards'
import { collection, getDocs } from 'firebase/firestore'
import { ContentArea, Container, CallsHeader } from './styles'
import TabContext from '@mui/lab/TabContext'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'
import { Row } from 'react-bootstrap'
import Tab from '@mui/material/Tab'
import React from 'react'
import { InputGroup } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import { FormControl } from 'react-bootstrap'


const Calls = () => {
    const [calls, setCalls] = useState([])
    const [value, setValue] = useState("pending");
    const [search, setSearch] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const callsCollectionRef = collection(db, "chamados")

    const getCalls = async () => {
        const data = await getDocs(callsCollectionRef)
        setCalls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getCalls()
    }, [])

    return (
        <Container>
            <CallsHeader>
                <ContentHeader title="Chamados" />
                <InputGroup>
                    <InputGroup.Text><SearchIcon /></InputGroup.Text>
                    <FormControl className="form-input" onChange={e => setSearch(e.target.value)} value={search} id="input-table" placeholder="Buscar chamado" />
                </InputGroup>
            </CallsHeader>
            <ContentArea>
                <TabContext value={value} >
                    <TabList onChange={handleChange} variant="scrollable" allowScrollButtonsMobile>
                        <Tab label="Pendentes" value="pending" />
                        <Tab label="Em Atendimento" value="attendance" />
                        <Tab label="Concluídos" value="finished" />
                        <Tab label="Cancelados" value="canceled" />
                    </TabList>
                    <TabPanel value="pending">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "Pendente")} getCalls={getCalls} onSearch={search} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="attendance">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "Em atendimento")} getCalls={getCalls} onSearch={search} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="finished">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "Finalizado")} getCalls={getCalls} onSearch={search} />
                        </Row>
                    </TabPanel>
                    <TabPanel value="canceled">
                        <Row xs={1} md={2} className="g-4">
                            <Cards calls={calls.filter(c => c.status === "Cancelado")} getCalls={getCalls} onSearch={search} />
                        </Row>
                    </TabPanel>
                </TabContext>
            </ContentArea>
        </Container>
    )
}

export default Calls;
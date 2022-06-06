import HomeSidebar from '../../Components/HomeComponents/HomeSidebar'
import HomeNavbar from '../../Components/HomeComponents/HomeNavbar'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Alert } from '@mui/material';
import { Container, Content, FormDiv, Desc, TableDiv } from './styles'
import { Button, Table } from 'react-bootstrap'
import React from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import MyCallImg from '../../Assets/help.svg'
import VerifyCallModal from '../../Components/HomeComponents/VerifyCallModal';


const VerifyCalls = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [calls, setCalls] = React.useState([])
    const [noResults, setNoResults] = React.useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const callsCollectionRef = collection(db, "chamados")

    const VerifyCall = async (email) => {
        const data = await getDocs(callsCollectionRef)
        setCalls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(c => c.clientes.email === email))
        setNoResults(false)
        if (calls.length === 0) {
            setNoResults(true)
        }
        console.log(calls)
    }

    return (
        <Container>
            <HomeNavbar isOpen={isOpen} toggle={toggle} />
            <HomeSidebar toggle={toggle} />
            <Content>
                <FormDiv>
                    <Form>
                        <FormGroup controlid="email">
                            <Label for="Email">Informe seu E-mail</Label>
                            <Input
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <Button onClick={() => VerifyCall(email)}>
                            Consultar
                        </Button>
                    </Form>
                    {noResults && <Alert severity="error" className='alert'>Não há chamados relacionados a este e-email!</Alert>}
                </FormDiv>
                <TableDiv>
                    {calls.length > 0 ?
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {calls.map(c => (
                                <tbody key={c.id}>
                                    <tr>
                                        <td>{c.data}</td>
                                        <td>{c.status}</td>
                                        <td style={{ textAlign: 'center' }}><VerifyCallModal c={c} /></td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                        :
                        <Desc>
                            <img src={MyCallImg} alt="my calls" />
                            Consulte aqui informações sobre seu chamado
                        </Desc>
                    }

                </TableDiv>
            </Content>

        </Container>
    )
}

export default VerifyCalls
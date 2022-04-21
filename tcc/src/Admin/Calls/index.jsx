import { TableArea } from './styles'
import { Table, Container, Row, Col } from 'react-bootstrap'
import ContentHeader from '../../Components/ContentHeader'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const Calls = () => {
    const [clients, setClients] = useState([])
    const clientCollectionRef = collection(db, "clientes")

    useEffect(() => {
        const getClients = async () => {
            const data = await getDocs(clientCollectionRef)
            setClients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(clients)
        }

        getClients()
    }, [])

    return (
        <Container>
            <ContentHeader title="Chamados" />
            <Row>
                <TableArea>
                    <Table responsive="sm" bordered variant="dark">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Descrição</th>
                                <th>Tipo</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        {clients.map((client) => ((
                            <tbody>
                                <tr>
                                    <td>{client.nome}</td>
                                    <td>{client.chamado.descricao}</td>
                                    <td>{client.chamado.tipo}</td>
                                    <td>{client.chamado.data}</td>
                                    <td>{client.chamado.status}</td>
                                    <td></td>
                                </tr>
                            </tbody>)
                        ))}

                    </Table>
                </TableArea>
            </Row>
        </Container>
    )
}

export default Calls;
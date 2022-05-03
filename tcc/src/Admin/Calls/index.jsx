import { TableArea } from './styles'
import { Table, Container, Row } from 'react-bootstrap'
import ContentHeader from '../../Components/AdminComponents/ContentHeader'
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

                </TableArea>
            </Row>
        </Container>
    )
}

export default Calls;
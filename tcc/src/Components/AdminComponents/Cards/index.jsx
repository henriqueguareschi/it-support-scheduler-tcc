import { Container, CardArea, ButtonsDiv } from './styles'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';


const Cards = ({ calls }) => {
    return (
        <Container>
            <CardArea>
                {calls.map(call => (
                    <Card key={call.clientes.nome}>
                        <Card.Body>
                            <Card.Title>{call.clientes.nome}</Card.Title>
                            <Card.Text>
                                {call.descricao}
                            </Card.Text>
                            <ButtonsDiv>
                                <Button variant="primary">Detalhes</Button>
                                <EditIcon />
                            </ButtonsDiv>
                        </Card.Body>
                    </Card>
                ))}
            </CardArea>
        </Container>
    )
}

export default Cards
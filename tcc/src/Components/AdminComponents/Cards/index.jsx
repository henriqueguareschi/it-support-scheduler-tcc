import { Container, CardArea, ButtonsDiv } from './styles'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import React from 'react'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Cards = ({ calls }) => {
    return (
        <Container>
            <CardArea>
                {calls.map(call => (
                    <Card key={call.clientes.nome}>
                        <Card.Body>
                            <Card.Title title={call.clientes.nome}><h6>Cliente: {capitalizeFirstLetter(call.clientes.nome)}</h6></Card.Title>
                            <Card.Text>
                                <p>Atendimento {capitalizeFirstLetter(call.forma_atendimento)} {call.forma_atendimento === "remoto" ? `(${capitalizeFirstLetter(call.software)})` : null}</p>
                                <p>{capitalizeFirstLetter(call.descricao)}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <ButtonsDiv>
                                <Button variant="primary">Editar</Button>
                            </ButtonsDiv>
                        </Card.Footer>
                    </Card>
                ))}
            </CardArea>
        </Container>
    )
}

export default Cards
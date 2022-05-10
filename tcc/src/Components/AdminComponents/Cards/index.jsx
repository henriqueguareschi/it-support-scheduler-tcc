import { Container, CardArea, ButtonsDiv } from './styles'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import React from 'react'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Tooltip } from '@mui/material';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const copyLink = (number) => {
    const whatsLink = `https://wa.me/${number.split('@')[0]}`;
    const el = document.createElement('textarea');
    el.value = whatsLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

const Cards = ({ calls }) => {
    return (
        <Container>
            <CardArea>
                {calls.map(call => (
                    <Card key={call.clientes.nome}>
                        <Card.Body>
                            <Card.Title title={call.clientes.nome}><AssignmentIndIcon style={{ fontSize: '20px', paddingBottom: '2px' }} /> {capitalizeFirstLetter(call.clientes.nome)}</Card.Title>
                            <span>Atendimento {capitalizeFirstLetter(call.forma_atendimento)} {call.forma_atendimento === "remoto" ? `(${capitalizeFirstLetter(call.software)})` : null}</span>
                            <p>{capitalizeFirstLetter(call.descricao)}</p>
                        </Card.Body>
                        <Card.Footer>
                            <ButtonsDiv>
                                <Button variant="primary">Editar</Button>
                                <Tooltip title="Copiar link do WhatsApp do cliente" arrow>
                                    <Button className='btnWhats' onClick={() => copyLink(call.clientes.telefone)}>
                                        <WhatsAppIcon />
                                    </Button>
                                </Tooltip>
                            </ButtonsDiv>
                        </Card.Footer>
                    </Card>
                ))}
            </CardArea>
        </Container>
    )
}

export default Cards
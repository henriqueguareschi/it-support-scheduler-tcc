import { Container, CardArea, ButtonsDiv, CallType, CallDesc, DateDiv } from './styles'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Tooltip } from '@mui/material';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import React from 'react'
import CallDetailModal from '../CallDetailModal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Cards = ({ calls, getCalls, onSearch }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedCall, setSelectedCall] = React.useState()
    const [callReport, setCallReport] = React.useState()
    const [linkSuccess, setLinkSuccess] = React.useState(false)

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
        setLinkSuccess(true)
    }

    const toggle = (selectedCall, report) => {
        setSelectedCall(selectedCall)
        setCallReport(report)
        setIsOpen(!isOpen)
        getCalls()
    }

    const handleClose = () => {
        setLinkSuccess(false)
    }

    return (
        <Container>
            <CardArea>
                {calls.filter((call) => {
                    if (onSearch === "") {
                        return call
                    } else if (call.clientes.nome.toLowerCase().includes(onSearch.toLowerCase())) {
                        return call
                    } else {
                        return null
                    }
                }).map(call => (
                    <React.Fragment key={call.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title title={call.clientes.nome}><AssignmentIndIcon style={{ fontSize: '20px', paddingBottom: '2px' }} /> {capitalizeFirstLetter(call.clientes.nome)}</Card.Title>
                                <CallType>Atendimento {capitalizeFirstLetter(call.forma_atendimento)} {call.forma_atendimento === "Remoto" ? `(${capitalizeFirstLetter(call.software)})` : null}</CallType>
                                <CallDesc>{capitalizeFirstLetter(call.descricao)}</CallDesc>
                                <DateDiv title='Data do chamado'><CalendarMonthIcon />{call.data}</DateDiv>
                            </Card.Body>
                            <Card.Footer>
                                <ButtonsDiv>
                                    <Button variant="primary" onClick={() => toggle(call.id, call.relatorio)}><InfoOutlinedIcon /></Button>
                                    <Tooltip title="Copiar link do WhatsApp do cliente" arrow>
                                        <Button className='btnWhats' onClick={() => copyLink(call.clientes.telefone)}>
                                            <WhatsAppIcon />
                                        </Button>
                                    </Tooltip>
                                </ButtonsDiv>
                            </Card.Footer>
                        </Card>

                        <CallDetailModal isOpen={isOpen} selectedCall={selectedCall} calls={calls} toggle={toggle} callReport={callReport} setCallReport={setCallReport} />
                    </React.Fragment>
                ))}
            </CardArea>

            <Snackbar open={linkSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Link copiado!
                </Alert>
            </Snackbar>

        </Container>
    )
}

export default Cards
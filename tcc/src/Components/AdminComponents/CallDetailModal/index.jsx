import { CustomModal, Content, Line, Col, Col2, LeftButtons, RightButtons } from './styles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase-config'
import { Tooltip } from '@material-ui/core'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import React from 'react'
import { Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';



const CallDetailModal = ({ isOpen, selectedCall, calls, toggle, callReport, setCallReport }) => {
    const [finishSuccess, setFinishSuccess] = React.useState(false)
    const [toAttSuccess, setToAttSuccess] = React.useState(false)
    const [canceledSuccess, setCanceledSuccess] = React.useState(false)
    const [finishError, setFinishError] = React.useState(false)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const saveReport = async (id) => {
        const callDoc = doc(db, "chamados", id)
        const reportField = { relatorio: callReport }
        await updateDoc(callDoc, reportField)
        toggle()
        console.log(reportField, id)
    }

    const handleStatusChange = async (id, statusType) => {
        const callDoc = doc(db, "chamados", id)
        if (statusType === "Em atendimento") {
            const statusField = { status: "Em atendimento" }
            await updateDoc(callDoc, statusField)
            setToAttSuccess(true)
        }
        if (statusType === "Cancelado") {
            const statusField = { status: "Cancelado" }
            await updateDoc(callDoc, statusField)
            setCanceledSuccess(true)
        }
        if (statusType === "Finalizado") {
            if (!callReport) {
                setFinishError(true)
            } else {
                const statusField = { status: "Finalizado" }
                await updateDoc(callDoc, statusField)
                setFinishSuccess(true)
            }
        }
    }

    const handleClose = () => {
        setFinishSuccess(false)
        setFinishError(false)
        setToAttSuccess(false)
    }

    return (
        <CustomModal show={isOpen} centered size="lg" >
            {calls.filter(c => c.id === selectedCall).map(c => (
                <React.Fragment key={c.id}>
                    <ModalHeader>
                        <h5>Detalhes do Chamado</h5>
                    </ModalHeader>
                    <ModalBody>
                        <Content>
                            <Col>
                                <Line><b>Nome do Cliente:</b><br /> {capitalizeFirstLetter(c.clientes.nome)}</Line>
                                <Line><b>E-mail:</b><br /> {capitalizeFirstLetter(c.clientes.email)}</Line>
                                <Line><b>Telefone:</b><br /> {capitalizeFirstLetter(c.clientes.telefone)}</Line>
                                <Line><b>Endereço:</b><br /> {capitalizeFirstLetter(c.clientes.endereco)}</Line>
                                <Line><b>Bairro:</b><br /> {capitalizeFirstLetter(c.clientes.bairro)}</Line>

                            </Col>
                            <Col>
                                <Line><b>Forma de Atendimento:</b><br /> {capitalizeFirstLetter(c.forma_atendimento)}</Line>
                                {c.forma_atendimento === "Remoto" ?
                                    <Line><b>Software:</b><br /> {capitalizeFirstLetter(c.software)}</Line>
                                    : null}
                                <Line><b>Descrição do problema:</b><br /> {capitalizeFirstLetter(c.descricao)}</Line>
                                <Form.Group controlId="report">
                                    <Form.Label><b>Relatório Técnico:</b></Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Insira aqui a descrição do serviço realizado." value={callReport} onChange={e => setCallReport(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Content>
                    </ModalBody>
                    <ModalFooter>
                        <LeftButtons>
                            {c.status === "Cancelado" ? null :
                                <Tooltip arrow top title="Cancelar chamado">
                                    <HighlightOffIcon onClick={() => handleStatusChange(c.id, "Cancelado")} />
                                </Tooltip>
                            }
                            {c.status === "Em atendimento" ? null :
                                <Tooltip arrow title="Mover para 'Em Atendimento'">
                                    <DirectionsRunIcon onClick={() => handleStatusChange(c.id, "Em atendimento")} />
                                </Tooltip>
                            }
                            {c.status === "Finalizado" ? null :
                                <Tooltip arrow title="Finalizar chamado">
                                    <CheckCircleOutlineIcon onClick={() => handleStatusChange(c.id, "Finalizado")} />
                                </Tooltip>
                            }
                        </LeftButtons>
                        <RightButtons>
                            <Button onClick={toggle}>Fechar</Button>
                            <Button onClick={() => saveReport(c.id)}>Salvar</Button>
                        </RightButtons>
                    </ModalFooter>
                </React.Fragment>
            ))}

            <Snackbar open={finishSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Chamado finalizado e movido para a aba de Concluídos
                </Alert>
            </Snackbar>

            <Snackbar open={toAttSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Chamado movido para a aba de Atendimento
                </Alert>
            </Snackbar>

            <Snackbar open={canceledSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    O chamado foi cancelado e movido para a aba de Cancelados
                </Alert>
            </Snackbar>

            <Snackbar open={finishError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    É necessário preencher o relatório técnico antes de finalizar o chamado
                </Alert>
            </Snackbar>


        </CustomModal>
    )
}

export default CallDetailModal
import { CustomModal, Content, Line, Col1, Col2, LeftButtons, RightButtons } from './styles'
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
        if (statusType === "em atendimento") {
            const statusField = { status: "em atendimento" }
            await updateDoc(callDoc, statusField)
            setToAttSuccess(true)
        }
        if (statusType === "cancelado") {
            const statusField = { status: "cancelado" }
            await updateDoc(callDoc, statusField)
            setCanceledSuccess(true)
        }
        if (statusType === "finalizado") {
            if (!callReport) {
                setFinishError(true)
            } else {
                const statusField = { status: "finalizado" }
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
                    <ModalHeader >
                        <h5>Detalhes do Chamado</h5>
                    </ModalHeader>
                    <ModalBody>
                        <Content>
                            <Col1>
                                <Line>Nome do Cliente: {capitalizeFirstLetter(c.clientes.nome)}</Line>
                                <Line>E-mail: {capitalizeFirstLetter(c.clientes.email)}</Line>
                                <Line>Telefone: {capitalizeFirstLetter(c.clientes.telefone)}</Line>
                                <Line>Endereço: {capitalizeFirstLetter(c.clientes.endereco)}</Line>
                                <Line>Bairro: {capitalizeFirstLetter(c.clientes.bairro)}</Line>
                                <Line>Forma de Atendimento: {capitalizeFirstLetter(c.forma_atendimento)}</Line>
                                {c.forma_atendimento === "remoto" ?
                                    <Line>Software: {capitalizeFirstLetter(c.software)}</Line>
                                    : null}
                            </Col1>
                            <Col2>
                                <Form.Group controlId="problemDesc">
                                    <Form.Label>Descrição do problema</Form.Label>
                                    <Form.Control as="textarea" rows={5} value={c.descricao} disabled />
                                </Form.Group>
                                <Form.Group controlId="problemDesc">
                                    <Form.Label>Relatório Técnico</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Insira aqui a descrição do serviço realizado." value={callReport} onChange={e => setCallReport(e.target.value)} />
                                </Form.Group>
                            </Col2>


                        </Content>
                    </ModalBody>
                    <ModalFooter>
                        <LeftButtons>
                            {c.status === "cancelado" ? null :
                                <Tooltip arrow top title="Cancelar chamado">
                                    <HighlightOffIcon onClick={() => handleStatusChange(c.id, "cancelado")} />
                                </Tooltip>
                            }
                            {c.status === "em atendimento" ? null :
                                <Tooltip arrow title="Mover para 'Em Atendimento'">
                                    <DirectionsRunIcon onClick={() => handleStatusChange(c.id, "em atendimento")} />
                                </Tooltip>
                            }
                            {c.status === "finalizado" ? null :
                                <Tooltip arrow title="Finalizar chamado">
                                    <CheckCircleOutlineIcon onClick={() => handleStatusChange(c.id, "finalizado")} />
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
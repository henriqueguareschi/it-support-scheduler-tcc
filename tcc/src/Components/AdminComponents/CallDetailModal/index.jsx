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


const CallDetailModal = ({ isOpen, selectedCall, calls, toggle, callReport, setCallReport }) => {
    const [report, setReport] = React.useState()

    const saveReport = async (id) => {
        const callDoc = doc(db, "chamados", id)
        const reportField = { relatorio: callReport }
        await updateDoc(callDoc, reportField)
        toggle()
        console.log(reportField, id)
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
                                <Line>Nome do Cliente: {c.clientes.nome}</Line>
                                <Line>E-mail: {c.clientes.email}</Line>
                                <Line>Telefone: {c.clientes.telefone}</Line>
                                <Line>Endereço: {c.clientes.endereco}</Line>
                                <Line>Bairro: {c.clientes.bairro}</Line>
                                <Line>Forma de Atendimento: {c.forma_atendimento}</Line>
                                {c.forma_atendimento === "remoto" ?
                                    <Line>Software: {c.software}</Line>
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
                            <Tooltip arrow top title="Cancelar chamado">
                                <HighlightOffIcon />
                            </Tooltip>
                            <Tooltip arrow title="Mover para 'Em Atendimento'">
                                <DirectionsRunIcon />
                            </Tooltip>
                            <Tooltip arrow title="Finalizar chamado">
                                <CheckCircleOutlineIcon />
                            </Tooltip>
                        </LeftButtons>
                        <RightButtons>
                            <Button onClick={toggle}>Fechar</Button>
                            <Button onClick={() => saveReport(c.id)}>Salvar</Button>
                        </RightButtons>
                    </ModalFooter>
                </React.Fragment>
            ))}
        </CustomModal>
    )
}

export default CallDetailModal
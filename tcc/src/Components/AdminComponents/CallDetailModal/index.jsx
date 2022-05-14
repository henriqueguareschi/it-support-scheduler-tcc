import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import { CustomModal, Content, Line, Col1, Col2 } from './styles'
import { Button } from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'

const CallDetailModal = ({ isOpen, toggle, selectedCall, calls }) => {
    return (
        <CustomModal show={isOpen} onHide={toggle} centered size="lg" >
            <ModalHeader closeButton>
                <h5>Detalhes do Chamado</h5>
            </ModalHeader>
            <ModalBody>
                <Content>
                    {calls.filter(c => c.id === selectedCall).map(c => (
                        <React.Fragment key={c.id}>
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
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Col2>
                        </React.Fragment>
                    ))}
                </Content>
            </ModalBody>
            <ModalFooter><Button onClick={toggle}>Fechar</Button></ModalFooter>
        </CustomModal>
    )
}

export default CallDetailModal
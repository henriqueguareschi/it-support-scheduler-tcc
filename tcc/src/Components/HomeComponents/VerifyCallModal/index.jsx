import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import InfoIcon from '@mui/icons-material/Info';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { CustomModal } from './styles'
import React from 'react'


const VerifyCallModal = ({ c }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <InfoIcon style={{ cursor: 'pointer' }} onClick={toggle} />
            <CustomModal show={isOpen} centered >
                <ModalHeader>Detalhes do seu chamado</ModalHeader>
                <ModalBody>
                    Problema: {c.descricao}<br />
                    Forma de Atendimento: {c.forma_atendimento}<br />
                    Status: {c.status}<br />
                    Data: {c.data} <br />
                    <Form.Group controlId="report">
                        <Form.Label>Relatório Técnico</Form.Label> <br />
                        {c.relatorio != null ?
                            <Form.Control as="textarea" rows={5} value={c.relatorio} disabled />
                            : <span>O técnico ainda não preencheu o relatório</span>
                        }
                    </Form.Group>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle}>Fechar</Button>
                </ModalFooter>

            </CustomModal>

        </>
    )
}

export default VerifyCallModal
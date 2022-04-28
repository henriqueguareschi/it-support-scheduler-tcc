import React from 'react'
import { Container, Wrapper, Row, Column1, Column2, H1, BtnWrapper } from './styles'
import Form from 'react-bootstrap/Form'
import { Button } from '../../../styles/Button'

const RequestCall = () => {
    const [form, setForm] = React.useState('presencial')
    const [software, setSoftware] = React.useState('teamviewer')
    const [problemDesc, setProblemDesc] = React.useState('')
    const [clientName, setClientName] = React.useState('')
    const [clientEmail, setClientEmail] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')


    return (
        <Container id="call">
            <Wrapper>
                <H1>Solicite um atendimento</H1>
                <Row>
                    <Column1>
                        <Form>
                            <Form.Group className="callForm" controlId="attType">
                                <Form.Label>Forma de atendimento</Form.Label>
                                <Form.Select aria-label="Tipo de atendimento" value={form} onChange={(e) => setForm(e.target.value)}>
                                    <option>Selecione a forma de atendimento desejado</option>
                                    <option value="presencial">Presencial</option>
                                    <option value="remoto">Remoto</option>
                                </Form.Select>
                            </Form.Group>
                            {form === "remoto" ?
                                <Form.Group className="callForm" controlId="attType">
                                    <Form.Label>Qual software para acesso remoto você tem em sua máquina?</Form.Label>
                                    <Form.Select aria-label="Tipo de atendimento" value={software} onChange={(e) => setSoftware(e.target.value)}>
                                        <option>Selecione o software</option>
                                        <option value="teamviewer">Teamviewer</option>
                                        <option value="anydesk">AnyDesk</option>
                                    </Form.Select>
                                </Form.Group>
                                : null}
                            <Form.Group className="callForm" controlId="problemDesc">
                                <Form.Label>Descrição do problema</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Descreva brevemente o problema que está enfrentando" value={problemDesc} onChange={(e) => setProblemDesc(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Column1>
                    <Column2>
                        <Form.Group className="callForm" controlId="clientName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Seu nome completo" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="callForm" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="seu@email.com" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="callForm" controlId="cpf">
                            <Form.Label>CPF / CNPJ</Form.Label>
                            <Form.Control type="text" placeholder="CPF ou CPNJ" value={cpf} onChange={(e) => setCpf(Number.parseInt(e.target.value))} />
                        </Form.Group>
                        <Form.Group className="callForm" controlId="phone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="(55) 55 55555-5555" value={phone} onChange={(e) => setPhone(Number.parseInt(e.target.value))} />
                        </Form.Group>
                        <Form.Group className="callForm" controlId="address">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="tel" placeholder={form === "remoto" ? "Seu endereço" : "Endereço do atendimento"} value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <BtnWrapper>
                            <Button primary="true" dark="true">Solicitar Atendimento</Button>
                        </BtnWrapper>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default RequestCall
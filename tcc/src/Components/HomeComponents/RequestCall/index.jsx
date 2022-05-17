import { Container, Wrapper, Row, Column1, Column2, H1, BtnWrapper } from './styles'
import { collection, addDoc } from 'firebase/firestore'
import { Button } from '../../../styles/Button'
import { db } from '../../../firebase-config'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@mui/material/Alert';
import Form from 'react-bootstrap/Form'
import React from 'react'
import PhoneInput from 'react-phone-number-input/input'
import moment from 'moment'

const RequestCall = () => {
    //Alerta de sucesso
    const [addSuccess, setAddSuccess] = React.useState(false)
    const [addError, setAddError] = React.useState(false)
    //States do formulário
    const [attForm, setAttForm] = React.useState('presencial')
    const [software, setSoftware] = React.useState('teamviewer')
    const [problemDesc, setProblemDesc] = React.useState('')
    const [clientName, setClientName] = React.useState('')
    const [clientEmail, setClientEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [district, setDistrict] = React.useState('')
    const [status, setStatus] = React.useState('pendente')


    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {
        setAddSuccess(false)
        setAddError(false)
    };

    const callsCollectionRef = collection(db, 'chamados')

    const createCall = async () => {
        if (!problemDesc || !attForm || !status || !clientEmail || !address || !clientName || !phone || !district) {
            setAddError(true)
        }
        else {
            await addDoc(callsCollectionRef, {
                descricao: problemDesc,
                forma_atendimento: attForm,
                software: software,
                status: status,
                data: moment().format("DD/MM/YYYY"),
                relatorio: null,
                clientes: {
                    email: clientEmail,
                    endereco: address,
                    nome: clientName,
                    telefone: phone,
                    bairro: district
                }

            })
            if (attForm === 'presencial') {
                setSoftware('')
            }
            setAddSuccess(true)
        }
    }

    return (
        <Container id="call">
            <Wrapper>
                <H1>Solicite um atendimento</H1>
                <Row>
                    <Column1>
                        <Form>
                            <Form.Group className="callForm" controlId="attType">
                                <Form.Label>Forma de atendimento</Form.Label>
                                <Form.Select aria-label="Tipo de atendimento" value={attForm} onChange={(e) => setAttForm(e.target.value)}>
                                    <option>Selecione a forma de atendimento desejado</option>
                                    <option value="presencial">Presencial</option>
                                    <option value="remoto">Remoto</option>
                                </Form.Select>
                            </Form.Group>
                            {attForm === "remoto" ?
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
                        <Form.Group className="callForm" controlId="phone">
                            <Form.Label>Telefone</Form.Label>
                            <PhoneInput placeholder="(00) 0000-0000" country='BR' value={phone} onChange={setPhone} style={{ backgroundColor: '#fff', border: '2px solid #D0DAED', width: '100%', height: "40px", flex: 1, paddingLeft: '10px', borderRadius: '3px' }} />
                        </Form.Group>
                        <Form.Group className="callForm" controlId="address">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Seu endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="callForm" controlId="address">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Seu bairro" value={district} onChange={(e) => setDistrict(e.target.value)} />
                        </Form.Group>
                        <BtnWrapper>
                            <Button primary="true" dark="true" onClick={createCall}>Solicitar Atendimento</Button>
                        </BtnWrapper>
                    </Column2>
                </Row>
            </Wrapper>

            <Snackbar open={addSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Chamado criado com sucesso. Em breve você receberá um email de confirmação.
                </Alert>
            </Snackbar>
            <Snackbar open={addError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Verifique se todos os campos estão preenchidos.
                </Alert>
            </Snackbar>

        </Container>
    )
}

export default RequestCall
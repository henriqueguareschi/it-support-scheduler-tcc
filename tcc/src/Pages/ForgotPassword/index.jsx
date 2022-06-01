import React, { useState } from 'react'
import HomeNavbar from '../../Components/HomeComponents/HomeNavbar'
import HomeSidebar from '../../Components/HomeComponents/HomeSidebar'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Container, OutsideDiv, CenterDiv } from './styles'
import { useUserAuth } from '../../Context/UserAuthContext';
import { Snackbar } from '@material-ui/core';

const ForgotPassword = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [sendSuccess, setSendSuccess] = useState(false);

    const { forgotPassword } = useUserAuth()

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const handleClose = () => {
        setSendSuccess(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await forgotPassword(email)
            setSendSuccess(true)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

    return (
        <Container>
            <HomeNavbar isOpen={isOpen} toggle={toggle} />
            <HomeSidebar toggle={toggle} />
            <OutsideDiv>
                <CenterDiv>
                    <h4>Esqueci minha senha</h4>
                    <Form>
                        <FormGroup controlid="email">
                            <Label for="Email">Informe o e-mail da sua conta</Label>
                            <Input
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <Button color="primary" type="submit" block onClick={handleSubmit}>
                            Enviar
                        </Button>
                        {error && <Alert color="danger">{error}</Alert>}
                    </Form>
                </CenterDiv>
            </OutsideDiv>

            <Snackbar open={sendSuccess} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Em breve você receberá um e-mail com as instruções para redefinir a senha.
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default ForgotPassword
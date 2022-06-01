import React, { useState } from 'react'
import HomeNavbar from '../../Components/HomeComponents/HomeNavbar'
import HomeSidebar from '../../Components/HomeComponents/HomeSidebar'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Container, OutsideDiv, CenterDiv, StyledLink, LinkDiv } from './styles'
import { useUserAuth } from '../../Context/UserAuthContext';
import { Snackbar } from '@material-ui/core';
import { useLocation } from 'react-router-dom';


function useQuery() {
    const location = useLocation()
    return new URLSearchParams(location.search)
}

const ResetPassword = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [changeSuccess, setChangeSuccess] = useState(false);

    const { resetPassword } = useUserAuth()

    const query = useQuery();
    console.log(query.get('mode'))
    console.log(query.get('oobCode'))
    console.log(query.get('continueUrl'))

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const handleClose = () => {
        setChangeSuccess(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await resetPassword(query.get('oobCode'), password)
            setChangeSuccess(true)
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
                    <h4>Altere sua senha</h4>
                    <Form>
                        <FormGroup controlid="email">
                            <Label for="Email">Informe sua nova senha</Label>
                            <Input
                                autoFocus
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button color="primary" type="submit" block onClick={handleSubmit}>
                            Enviar
                        </Button>
                        {error && <Alert color="danger">{error}</Alert>}
                    </Form>
                    <LinkDiv>
                        <StyledLink to="/login">Voltar ao Login</StyledLink>
                    </LinkDiv>
                </CenterDiv>
            </OutsideDiv>

            <Snackbar open={changeSuccess} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Senha alterada com sucesso!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default ResetPassword
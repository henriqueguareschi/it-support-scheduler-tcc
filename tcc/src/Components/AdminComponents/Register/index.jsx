import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Button } from 'react-bootstrap'
import { Container, FormDiv, OutsideDiv, TableDiv } from "./styles.js";
import { useUserAuth } from "../../../Context/UserAuthContext";
import { collection, addDoc, getDocs } from 'firebase/firestore'
import ContentHeader from "../ContentHeader/index.jsx";
import { db, auth } from "../../../firebase-config.js";
import moment from "moment";
import { Snackbar } from '@material-ui/core';
import { Alert as AlertMaterial } from '@mui/material';
import { Table } from "react-bootstrap";

export default function Login() {
    const [registerSuccess, setRegisterSuccess] = React.useState(false)
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [techs, setTechs] = useState([])
    const { signUp } = useUserAuth()


    const handleClose = () => {
        setRegisterSuccess(false)
    };

    const techCollectionRef = collection(db, 'tecnicos')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signUp(email, password)
            await addDoc(techCollectionRef, {
                email: email,
                criado_em: moment().format("DD/MM/YYYY")
            })
            setRegisterSuccess(true)
            getUsers()
        } catch (error) {
            setError(error.message)
        }
    }

    const getUsers = async () => {
        const data = await getDocs(techCollectionRef)
        setTechs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    React.useEffect(() => {
        getUsers()
    }, [])

    return (
        <Container>
            <ContentHeader title="Técnicos" />
            <OutsideDiv>
                <FormDiv>
                    <Form>
                        <FormGroup controlid="email">
                            <Label for="Email">Email</Label>
                            <Input
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup controlid="password">
                            <Label>Senha</Label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button onClick={handleSubmit}>
                            Cadastrar
                        </Button>
                    </Form>
                    {error && <Alert variant="danger">{error}</Alert>}
                </FormDiv>
                <TableDiv>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Cadastrado em</th>
                            </tr>
                        </thead>
                        {techs.map((t) => (
                            <tbody>
                                <tr>
                                    <td>{t.email}</td>
                                    <td>{t.criado_em}</td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </TableDiv>
            </OutsideDiv>
            <Snackbar open={registerSuccess} autoHideDuration={6000} onClose={handleClose}>
                <AlertMaterial onClose={handleClose} severity="success">
                    Técnico registrado com sucesso!
                </AlertMaterial>
            </Snackbar>
        </Container>
    );
}
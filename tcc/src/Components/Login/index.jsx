import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Container, CenterDiv, OutsideDiv } from "./styles.js";
import { useUserAuth } from "../../Context/UserAuthContext.js";
import HomeNavBar from "../HomeNavbar";
import HomeSidebar from "../HomeComponents/HomeSidebar";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await login(email, password)
            navigate("/dashboard")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <Container>
            <HomeNavBar />
            <HomeSidebar />
            <OutsideDiv>
                <CenterDiv>
                    <h4>Acessar Área Técnica</h4>
                    <Form onSubmit={handleSubmit}>
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
                        <Button color="primary" type="submit" block>
                            Login
                        </Button>
                        {error && <Alert color="danger">{error}</Alert>}
                    </Form>
                </CenterDiv>
            </OutsideDiv>
        </Container>
    );
}
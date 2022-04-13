import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Container } from "./styles.js";
import { useUserAuth } from "../../Context/UserAuthContext.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signUp(email, password)
            navigate("/login")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <Container>
            <div className="Login">
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
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="primary" type="submit" block >
                        Register
                    </Button>
                    {error && <Alert variant="danger">{error}</Alert>}
                </Form>
            </div>
        </Container>
    );
}
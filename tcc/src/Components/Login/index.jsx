import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from "./styles.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase-config';

export default function Login() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    function handleSubmit(event) {
        event.preventDefault();
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }

    }

    const logout = async () => {
        await signOut(auth);
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
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlid="password">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="primary" onClick={register} type="submit" block >
                        Register
                    </Button>
                </Form>

                <Form onSubmit={handleSubmit}>
                    <FormGroup controlid="email">
                        <Label for="Email">Email</Label>
                        <Input
                            autoFocus
                            type="email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlid="password">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="primary" onClick={login} type="submit" block>
                        Login
                    </Button>
                    <br />
                    <h4>Logged user: {user?.email}</h4>
                    <Button color="primary" onClick={logout}>Logout</Button>
                </Form>
            </div>
        </Container>
    );
}
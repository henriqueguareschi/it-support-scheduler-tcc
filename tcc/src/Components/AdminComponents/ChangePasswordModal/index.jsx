import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import { getAuth, updatePassword } from "firebase/auth";
import { Alert } from '@mui/material';
import { useUserAuth } from "../../../Context/UserAuthContext";
import { Snackbar } from '@material-ui/core';
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CustomModal } from './styles'
import React from 'react'

const ChangePasswordModal = ({ isOpen, togglePasswordModal }) => {
    const [repeatedPassword, setRepeatedPassword] = React.useState("")
    const [newPassword, setNewPassword] = React.useState("")
    const [passMatchError, setPassMatchError] = React.useState(false)
    const [passChangeSuccess, setPassChangeSuccess] = React.useState(false)
    const [passLengthError, setPassLengthError] = React.useState(false)

    const { user } = useUserAuth();

    const changePassword = async (repeatedPassword, newPassword) => {
        console.log(repeatedPassword, newPassword)
        if (newPassword.length < 6) {
            setPassLengthError(true)
        }
        if (newPassword !== repeatedPassword) {
            setPassMatchError(true)
        } else {
            await updatePassword(user, newPassword)
            setPassChangeSuccess(true)
        }

    }

    const handleClose = () => {
        setPassMatchError(false)
        setPassChangeSuccess(false)
        setPassLengthError(false)
    };

    return (
        <CustomModal show={isOpen} centered>
            <ModalHeader>
                <h5>Redefinir senha</h5>
            </ModalHeader>
            <ModalBody>
                <div style={{ width: '250px', margin: '0 auto' }}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Informe sua nova senha</Form.Label>
                            <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Repita a nova senha</Form.Label>
                            <Form.Control type="password" value={repeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => togglePasswordModal(setNewPassword(""), setRepeatedPassword(""))}>Fechar</Button>
                <Button onClick={() => changePassword(newPassword, repeatedPassword)}>Salvar</Button>
            </ModalFooter>

            <Snackbar open={passMatchError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    A senhas informadas não coincidem
                </Alert>
            </Snackbar>
            <Snackbar open={passChangeSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Senha alterada com sucesso. Use sua nova senha na próxima vez que fizer login
                </Alert>
            </Snackbar>
            <Snackbar open={passLengthError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    A senha deve ter no mínimo 6 caracteres
                </Alert>
            </Snackbar>

        </CustomModal>
    )
}

export default ChangePasswordModal
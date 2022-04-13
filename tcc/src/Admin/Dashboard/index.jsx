
import { Button } from 'reactstrap';
import { useUserAuth } from '../../Context/UserAuthContext';
import { auth } from '../../firebase-config';

const Dashboard = () => {
    const { user, logout } = useUserAuth()

    const handleLogOut = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log(user)

    return (
        <div>
            <h1>
                Dash
            </h1>
            <Button onClick={handleLogOut}>Sair</Button>
        </div>
    )
}

export default Dashboard;

import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useUserAuth } from '../../Context/UserAuthContext';

const Dashboard = () => {
    const { logout } = useUserAuth()

    const handleLogOut = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <h1>
                Dash
            </h1>
            <Link to="/register">Cadastrar novo Técnico</Link>
            <Button color="primary" onClick={handleLogOut}>Sair</Button>
        </div>
    )
}

export default Dashboard;
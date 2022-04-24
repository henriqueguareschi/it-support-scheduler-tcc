
import { Grid } from './styles'
import MainHeader from '../AdminComponents/MainHeader'
import Content from '../AdminComponents/Content'
import Aside from '../AdminComponents/Aside'

const Layout = ({ children }) => {


    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    )
}

export default Layout;
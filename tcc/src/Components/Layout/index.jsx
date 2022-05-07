
import { Grid } from './styles'
import MainHeader from '../AdminComponents/MainHeader'
import Content from '../AdminComponents/Content'
import DrawerMenu from '../AdminComponents/Drawer'

const Layout = ({ children }) => {


    return (
        <Grid>
            <MainHeader />
            <DrawerMenu />
            <Content>
                {children}
            </Content>
        </Grid>
    )
}

export default Layout;
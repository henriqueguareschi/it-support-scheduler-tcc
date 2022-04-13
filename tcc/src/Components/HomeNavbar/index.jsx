import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, MenuDiv } from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => setOpenMenu(!openMenu)

    return (
        <Container>
            <Nav>
                <Link to="/">HG</Link>
                <Link to="/dashboard">Área Técnica</Link>
                <MenuDiv onClick={handleOpenMenu}>
                    {openMenu ? <MenuIcon /> : <MenuOpenIcon />}
                </MenuDiv>
            </Nav>
        </Container>
    )
}

export default Navbar
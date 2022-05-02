import React from 'react'
import { Container } from './styles'
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
    return (
        <Container>
            <ReactLoading type={type} color={color} height={'150px'} width={'150px'} />
        </Container>
    )
}

export default Loading
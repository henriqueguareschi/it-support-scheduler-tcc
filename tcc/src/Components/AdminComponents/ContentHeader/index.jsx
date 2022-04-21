import React from 'react'
import { Container } from './styles';

const ContentHeader = ({ title }) => {
    return (
        <Container>
            <h4>{title}</h4>
        </Container>
    )
}

export default ContentHeader
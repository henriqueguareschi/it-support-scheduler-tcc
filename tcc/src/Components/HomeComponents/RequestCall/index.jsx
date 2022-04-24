import React from 'react'
import { Container, Wrapper, Row, Column1, Column2, H1 } from './styles'

const RequestCall = () => {
    return (
        <Container id="call">
            <Wrapper>
                <H1>Solicite um atendimento</H1>
                <Row>
                    <Column1></Column1>
                    <Column2></Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default RequestCall
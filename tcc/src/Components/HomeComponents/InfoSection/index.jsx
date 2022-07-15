import React from 'react'
import { Button } from '../../../styles/Button'
import {
    Container,
    Wrapper,
    Row,
    Col1,
    Col2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './styles'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, btnLabel, img, alt }) => {
    return (
        <>
            <Container lightBg={lightBg} id={id}>
                <Wrapper>
                    <Row imgStart={imgStart}>
                        <Col1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="services"
                                        primary="true"
                                        dark="true"
                                    >{btnLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Col2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}

export default InfoSection
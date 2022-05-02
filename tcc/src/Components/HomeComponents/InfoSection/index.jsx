import React from 'react'
import { Button } from '../../../styles/Button'
import {
    Container,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
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
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
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
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </Container>
        </>
    )
}

export default InfoSection
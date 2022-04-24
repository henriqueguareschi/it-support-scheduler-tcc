import React, { useState } from 'react'
import { Container, HeroBg, ImgBg, HeroContent, H1, P, BtnWrapper, ArrowForward, ArrowRight } from './styles'
import Img from '../../../Assets/img.jpg'
import { Button } from '../../../styles/Button'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <Container id="home">
            <HeroBg>
                <ImgBg src={Img} />
            </HeroBg>
            <HeroContent>
                <H1>HG Suporte Técnico</H1>
                <P>Agende um atendimento remoto ou presencial agora mesmo</P>
                <BtnWrapper>
                    <Button to="call" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Solicitar Chamado {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                </BtnWrapper>
            </HeroContent>
        </Container>
    )
}

export default HeroSection
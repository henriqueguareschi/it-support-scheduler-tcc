import React, { useState } from 'react'
import { Container, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './styles'
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
                <HeroH1>HG Suporte Técnico</HeroH1>
                <HeroP>Agende um atendimento remoto ou presencial agora mesmo</HeroP>
                <HeroBtnWrapper>
                    <Button to="call" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Solicitar Chamado {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </Container>
    )
}

export default HeroSection
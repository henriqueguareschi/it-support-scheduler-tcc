import styled from "styled-components";

export const Container = styled.div`
    margin: 0px auto;
    width: 90%;
    height: 90%;

    @media(max-width: 768px) {
        height: 90%;
        width: 90%;
        margin: 0 auto;
    }
`;

export const Content = styled.div`
    display: flex;
    height: 100%;
`;

export const Welcome = styled.div`
    width: 100%;
    height: 80px;
    margin: 20px auto;
    margin-bottom: 0;
    background-color: #088080;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    overflow: hidden;
`;

export const WelcomeText = styled.p`
    font-size: 20px;
    font-weight: bold;

    @media(max-width: 1500px) {
        font-size: 18px;
    }

    @media(max-width: 768px) {
        font-size: 16px;
    }

    @media(max-width: 480px) {
        font-size: 12px;
    }
`;

export const CardContainer = styled.div`
    width: 40%;
    height: 85%;
    margin-right: 20px;
`;

export const Cards = styled.div`
    width: 100%;
    height: 200px;
    background-color: #393E46;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const GraphicContainer = styled.div`
    width: 60%;
`;

export const GraphicArea = styled.div`
    background-color: #393E46;
    height: 420px;
    border-radius: 10px;
`;
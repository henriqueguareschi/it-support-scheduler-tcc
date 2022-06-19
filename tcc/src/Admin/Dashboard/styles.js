import styled from "styled-components";

export const Container = styled.div`
    margin: 0px auto;
    width: 95%;
    height: 80%;

    @media(max-width: 768px) {
        height: 90%;
        width: 90%;
        margin: 0 auto;
    }
`;

export const Content = styled.div`
    display: flex;
    height: 100%;

    @media(max-width: 480px) {
        flex-direction: column;
    }

`;

export const Welcome = styled.div`
    width: 100%;
    height: 80px;
    padding: 50px;
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

    @media(max-width: 768px) {
        width: 100%;
        font-size: 16px;
    }
`;

export const Cards = styled.div`
    width: 100%;
    height: 200px;
    background-color: #393E46;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #088080;
`;

export const GraphicContainer = styled.div`
    width: 60%;

    @media(max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
    
`;

export const GraphicArea = styled.div`
    background-color: #393E46;
    height: 26.25rem;
    border-radius: 10px;
    border-bottom: 2px solid #088080;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;

    @media(max-width: 900px) {
        > h5 {
            font-size: 15px;
        }
    }
`;

export const LeftDiv = styled.div`
    width: 50%;
    text-align: center;
    margin: 0 2.5rem;

    > h5, h6 {
        font-size: 25px;
    }
    
    > h6 {
        font-weight: bold;
    }

    @media(max-width: 900px) {
        margin: 20px;

        > h5, h6 {
            font-size: 18px;
        }
    
        > h6 {
            font-weight: bold;
        }
    }
`;

export const RightDiv = styled.div`
    width: 50%;
    text-align: center;

    > svg {
        font-size: 80px;
    }

`;
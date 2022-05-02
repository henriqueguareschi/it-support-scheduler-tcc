import styled from "styled-components";

export const Container = styled.div`
    color: #EEEEEE;
    background: #222831;

    @media screen and (max-width: 1000px) {
        padding: 100px 0;
    }
`;

export const Wrapper = styled.div`
    z-index: 1;
    height: 860px;
    width: 100%;
    margin-top: 200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
`;

export const Row = styled.div`
    height: 70%;
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    background-color: #393E46;
    border-radius: 10px;
    border-top: 4px solid #088080;

    @media screen and (max-width: 1100px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
        height: 90%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const Column1 = styled.div`
    margin-top: 70px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 1100px) {
        margin-top: 0px;
    }
`;

export const Column2 = styled.div`
    margin-top: 70px;
    padding: 0 15px;
    grid-area: col2;
    
    @media screen and (max-width: 1100px) {
        margin-top: 0px;
    }
`;

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #EEEEEE;
    text-align: center;
    margin-bottom: 70px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
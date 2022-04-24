import styled from "styled-components";

export const Container = styled.div`
    color: #EEEEEE;
    background: #222831;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Wrapper = styled.div`
    display: grid;
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
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #EEEEEE;
    margin-bottom: 70px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #222831;

    @media screen and (max-width: 768px) {
        height: 1300px;
    }
    
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const Card = styled.div`
    background: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const Icon = styled.img`
    height: 260px;
    width: 260px;
    margin-bottom: 10px;
`;

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #EEEEEE;
    margin-bottom: 70px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const H2 = styled.h2`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    color: #222831;
`;
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #393E46;
`;

export const Wrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterContent = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const ContentWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const Logo = styled(Link)`
    color: #EEEEEE;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #0FCFCF;
    }
`;

export const SiteRights = styled.small`
    color: #EEEEEE;
    margin-bottom: 16px;
`;

export const SideDescription = styled.span`
    color: #EEEEEE;
    margin-bottom: 16px;
    text-align: center;
`;
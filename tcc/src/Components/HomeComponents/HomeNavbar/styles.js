import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #393E46;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const Logo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #0FCFCF;
    }
`;

export const IconMobile = styled.div`
    display: none;
    color: #EEEEEE;
    margin-top: -12px;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Item = styled.li`
    height: 80px;
`;

export const NLinks = styled(LinkS)`
    color: #EEEEEE;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #088080;
    }

    &:hover {
        color: #0FCFCF;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }

    
`;

export const NBtnLink = styled(LinkR)`
    border-radius: 50px;
    background-color: #088080;
    white-space: nowrap;
    padding: 10px 22px;
    color: #EEEEEE;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #EEEEEE;
        color: #393E46;
    }
`;

export const RouterLink = styled(LinkR)`
    color: #EEEEEE;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #088080;
    }

    &:hover {
        color: #0FCFCF;
    }
`;

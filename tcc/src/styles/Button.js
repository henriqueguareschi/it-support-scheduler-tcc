import styled from "styled-components"
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#088080' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')} ;
    color: ${({ dark }) => (dark ? '#EEEEEE' : '#010606')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#EEEEEE' : '#010606')};;
        color: #010606;
    }
`;
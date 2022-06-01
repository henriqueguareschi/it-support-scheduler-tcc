import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
`;

export const OutsideDiv = styled.div`
  margin: 150px auto;
  max-width: 500px;
  height: 520px;
  background-color: #393E46;
  border-radius: 10px;
  border-bottom: 2px solid #088080;
`;

export const CenterDiv = styled.div`
  margin: 0 auto;
  max-width: 320px;
  max-height: 500px;
  background-color: #393E46;
  padding: 160px 0;
  box-sizing: border-box;

  > h4 {
    margin-top: -50px;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: FFD369;
  }

  > form {
    margin-top: 35px;
    .form-label {
      font-weight: 500;
    }

    .alert {
      padding: 10px;
      margin-top: 20px;
    }
  }

`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #0FCFCF;
    }
`;

export const LinkDiv = styled.div`
  margin-top: 20px;
  text-align: left;
`;
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  width: 95%;
  height: 90%;
`;

export const OutsideDiv = styled.div`
    width: 100%;
    height: 70vh;
    margin-top: 2rem;
    background-color: #393E46;
    border-radius: 5px;
    padding: 5px;
    border-bottom: 2px solid #088080;
`;

export const FormDiv = styled.div`
  background-color: #393E46;
  padding: 10px 0;
  box-sizing: border-box;
  height: 25%;

  .alert {
      padding: 10px;
      width: 500px;
      margin: 0 auto;
    }

  > form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    .form-label {
      font-weight: 500;
    }

    .mb-3 {
      margin-right: 10px;
      margin-left: 10px;
    }

    > button {
      height: 38px;
      margin-top: 20px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .alert {
      height: 38px;
      margin-top: 36px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }

`;

export const TableDiv = styled.div`
  width: 60%;
  max-height: 80%;
  margin: 0 auto;
  overflow-y: auto;

    ::-webkit-scrollbar {
            width: 8px;
    }

    ::-webkit-scrollbar-track {
        padding-right: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #6e8591;
        border-radius: 5px;
    }

    .MuiTimelineDot-root {
        box-shadow: none;
    }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

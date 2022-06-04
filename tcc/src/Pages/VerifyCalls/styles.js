import styled from "@emotion/styled";

export const Container = styled.div``;

export const Content = styled.div`
  margin: 150px auto;
  max-width: 70%;
  height: 720px;
  background-color: #393E46;
  border-radius: 10px;
  border-bottom: 2px solid #088080;
`;

export const Desc = styled.div`
    padding-top: 30px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    > img {
      margin: 0 auto;
      width: 80%;
    }
`;

export const FormDiv = styled.div`
  background-color: #393E46;
  padding: 10px 0;
  box-sizing: border-box;
  height: 25%;

  .alert {
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
        margin-left: 40px;
    }

`
import styled from "styled-components";

export const Container = styled.div`
    margin: 0px auto;
    width: 90%;
    height: 90%;
`;


export const ContentArea = styled.div`
    width: 100%;
    height: 90%;
    margin-top: 2rem;
    background-color: #393E46;
    border-radius: 5px;
    padding: 5px;
    text-overflow: ellipsis;
    flex-wrap: wrap;
    display: flex;
    
    .MuiTab-root {
        color: #EEEEEE;
        font-family: 'MontSerrat';
    }

    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #EEEEEE;
    }

    .MuiTabs-indicator {
        background-color: #0FCFCF;
    }

    .MuiTabPanel-root {
        height: 93%;
        width: 100%;
    }

    .css-1gsv261 {
        width: 100%;
        border-color: rgba(238, 238, 238, .2);
    }

`;

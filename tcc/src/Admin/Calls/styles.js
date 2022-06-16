import styled from "styled-components";

export const Container = styled.div`
    margin: 0px auto;
    width: 95%;
    height: 90%;

    @media(max-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }

    @media(max-width: 480px) {
        height: 780px;
        margin: 0 auto;
    }
`;


export const ContentArea = styled.div`
    width: 100%;
    height: 70vh;
    margin-top: 2rem;
    background-color: #393E46;
    border-radius: 5px;
    padding: 5px;
    text-overflow: ellipsis;
    flex-wrap: wrap;
    display: flex;
    border-bottom: 2px solid #088080;
    
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
        height: 90%;
        width: 100%;
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

        .MuiTimelineDot-defaultGrey {
            background-color: rgba(255, 72, 114, .18);
            width: 55px;
            height: 55px;
        }
    }

    .css-1gsv261 {
        width: 100%;
        border-color: rgba(238, 238, 238, .2);
    }

`;

export const CallsHeader = styled.div`
    display: flex;

    .input-group {
        margin-top: 50px;
        text-align: left;
        width: 20%;

        @media(max-width: 1500px) {
            width: 30%;
        }

        @media(max-width: 1200px) {
            width: 40%;
        }
    }
`;
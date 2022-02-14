import styled from "styled-components";

export const InfoSectionContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 15px;
    color: gray;
    background-color: #dcdde1;

    div {
        flex-grow: 1;
        padding: 10px;
        padding-right: 60px;
        p:nth-child(1) {
            font-weight: bold;
            font-size: 22px;
        }
        p {
            font-size: 14px;
        }
        div {
            padding: 0;
        }
    }

    button {
        color: gray;
        border: 1px solid gray;
        margin-left: 10px;
        margin-top: 10px;
        &:hover {
            border: 1px solid #333;
            background-color: #d4d4d4;
        }
    }
`;

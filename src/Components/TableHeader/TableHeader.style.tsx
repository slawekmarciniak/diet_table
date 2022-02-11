import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
`;
export const SectionElement = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 30px;
        color: #a0a0a0;
        border: 1px solid #afafaf;
        border-radius: 3px;
        cursor: pointer;
        background-color: #dcdde1;
    }
    span {
        color: orange;
        font-size: 35px;
        text-transform: capitalize;
        margin: 0 8px;
        span {
            margin: 0 0 0 8px;
        }
    }
    /* border: 1px solid black; */
`;

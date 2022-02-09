import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    height: 800px;
    background-color: #f5f6fa;
`;

export const IntervalsContainer = styled.div`
    display: flex;
    flex-basis: 13%;
    flex-direction: column;
    height: 100%;
`;

export const DaysContainer = styled.div`
    display: flex;
    flex-basis: 87%;
`;

export const Day = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border-right: 1px solid gray;
    align-items: center;
    /* justify-content: center; */
    & .dayNumber {
        color: orange;
        height: 30px;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

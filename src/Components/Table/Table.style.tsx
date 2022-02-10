import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    border-radius: 10px;
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

    & .dayNumber {
        color: #6ab04c;
        text-align: center;
        padding-top: 6px;
        padding-bottom: 6px;
        line-height: 18px;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        width: 100%;
        border-bottom: 1px solid gray;
    }
    & .dayElement {
        border-bottom: 1px solid gray;
        width: 100%;
        height: 90px;

        p {
            font-size: 14px;
            color: gray;
            margin: 5px;
        }
    }
    & .dayCarbs {
        border-bottom: 1px solid gray;
        width: 100%;
        height: 40px;
        background-color: #bdc3c7;
        p {
            font-size: 12px;
            color: gray;
            margin: 5px;
            text-align: center;
            line-height: 30px;
            text-transform: uppercase;
        }
    }
    & .workoutIcon {
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #bdc3c7;
    }
`;

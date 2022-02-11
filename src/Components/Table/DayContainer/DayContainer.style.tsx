import styled from "styled-components";

interface Props {
    borderRight: string;
}

export const Day = styled.div<Props>`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border-right: ${(props) => props.borderRight};
    align-items: center;
    box-sizing: border-box;
    position: relative;

    & .dayNumber {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: #6ab04c;
        text-align: center;
        height: 30px;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        border-bottom: 1px solid gray;
    }
    & .dayElement {
        border-bottom: 1px solid gray;
        width: 100%;
        height: 90px;
        overflow: hidden;
        p {
            font-size: 14px;
            color: gray;
            margin: 5px;
        }
    }
    & .dayCarbs {
        border-bottom: 1px solid gray;
        width: 100%;
        height: 30px;
        background-color: #bdc3c7;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            font-size: 12px;
            color: gray;
            text-align: center;
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

import styled from "styled-components";

interface Props {
    borderRight: string;
}

export const Day = styled.div<Props>`
    display: flex;
    flex-grow: 1;
    flex-basis: 15%;
    max-width: 130px;
    flex-direction: column;
    border-right: ${(props) => props.borderRight};
    align-items: center;
    box-sizing: border-box;
    position: relative;
    /* overflow: hidden; */

    & .dayNumber {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: ${(props) => props.theme.colors.green};
        text-align: center;
        height: 30px;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        border-bottom: 1px solid gray;
        @media (max-width: 999px) {
            font-size: 12px;
        }
    }
    & .dayNumberActive {
        color: ${(props) => props.theme.colors.orange};
    }
    & .dayElement {
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
        width: 100%;
        height: 90px;
        overflow: hidden;
        position: relative;

        p {
            font-size: 13px;
            color: ${(props) => props.theme.colors.gray};
            margin: 5px;
            margin-right: 10px;
            @media (max-width: 999px) {
                font-size: 9px;
                margin: 3px;
            }
        }
    }
    & .sunday {
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        color: #b1b1b1;
        overflow: hidden;
        span:nth-child(1) {
            transform: rotate(-90deg) translate(40%, 0);
            font-size: 30px;
            text-transform: uppercase;
            letter-spacing: 1.3px;
            width: 300px;
            @media (max-width: 999px) {
                font-size: 14px;
            }
        }
        span:nth-child(2) {
            margin-top: 60px;
            margin-bottom: 40px;
        }
    }
    & .sundayActive {
        color: black;
    }
    & .dayElementActive {
        p {
            color: ${(props) => props.theme.colors.black};
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
        padding: 2px;
        p {
            font-size: 12px;
            color: gray;
            text-align: center;
            text-transform: uppercase;
            @media (max-width: 999px) {
                font-size: 8px;
            }
        }
    }
    & .check {
        color: ${(props) => props.theme.colors.orange};
        font-size: 16px;
        position: absolute;
        right: 4px;
        top: 4px;
        @media (max-width: 999px) {
            display: none;
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
        & .doneIcon {
            @media (max-width: 999px) {
                display: none;
            }
        }
    }
    & .printIcon {
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #bdc3c7;
        color: gray;

        span {
            margin: 5px;
            @media (max-width: 999px) {
                display: none;
            }
        }
        svg {
            @media (max-width: 999px) {
                display: none;
            }
        }
    }
    img {
        opacity: 0.9;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        @media (max-width: 999px) {
            width: 120%;
            left: -20px;
        }
        @media (max-width: 600px) {
            width: 140%;
            left: -10px;
        }
    }
`;

import styled from "styled-components";

interface Props {
    height: string;
}

export const Interval = styled.div<Props>`
    height: ${(props) => props.height};
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: #bdc3c7;
    border-bottom: 1px solid gray;
    color: gray;
    div {
        display: flex;
    }
    span {
        font-size: 12px;
        &:nth-child(1) {
            font-weight: bold;
            margin-right: 3px;
        }
    }
`;

export const Workout = styled.div`
    height: 40px;
    background-color: #bdc3c7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    text-transform: capitalize;
    color: gray;
    font-weight: 500;
    padding-left: 5px;
`;

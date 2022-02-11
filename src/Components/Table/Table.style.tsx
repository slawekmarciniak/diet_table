import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background-color: #f5f6fa;
`;

export const IntervalsContainer = styled.div`
    display: flex;
    flex-basis: 9%;
    flex-direction: column;
    height: 100%;
`;

export const DaysContainer = styled.div`
    display: flex;
    flex-basis: 91%;
    background: #f5f6fa;

    .today {
        &:after {
            content: "";
            border: solid 3px orange;
            position: absolute;
            bottom: -1px;
            top: -1px;
            left: -1px;
            right: -1px;
            z-index: 2;
        }
    }
`;

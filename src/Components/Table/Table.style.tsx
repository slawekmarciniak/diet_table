import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    margin: auto;
    width: 1000px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #f5f6fa;
    @media (max-width: 999px) {
        width: 98vw;
        border-radius: 2px;
    }
`;

export const IntervalsContainer = styled.div`
    display: flex;
    flex-basis: 9%;
    flex-direction: column;
    height: 100%;
    @media (max-width: 999px) {
        display: none;
    }
`;

export const DaysContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 91%;
    background: #f5f6fa;

    .today {
        border-right: none;
        &:after {
            content: "";
            border: solid 4px ${(props) => props.theme.colors.orange};
            border-radius: 2px;
            position: absolute;
            bottom: -1px;
            top: -1px;
            left: -2px;
            right: -1px;
            opacity: 1;
        }
    }
    @media (max-width: 999px) {
        flex-basis: 100%;
        width: 100vw;
    }
`;

import styled from "styled-components";

interface Props {
    bcg: string;
}

export const BarContainer = styled.div`
    display: flex;
`;

export const Dot = styled.div<Props>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.bcg};
    border: 1px solid gray;
`;

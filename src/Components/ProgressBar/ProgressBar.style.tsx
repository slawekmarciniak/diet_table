import styled from "styled-components";
import { device } from "../../GlobalStyles.style";

interface Props {
    bcg: string;
    digit: string;
}
interface DashProps {
    bcg: string;
}

export const BarContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Dot = styled.div<Props>`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${(props) => props.bcg};
    border: 1px solid gray;
    position: relative;
    &:after {
        content: "${(props) => props.digit}";
        position: absolute;
        width: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 14px;
        left: -1px;
        color: gray;
        z-index: 2;
        font-size: 10px;
        @media ${device.mobile} {
            display: none;
        }
    }
`;

export const Dash = styled.div<DashProps>`
    background-color: ${(props) => props.bcg};
    height: 2px;
    width: 8px;
`;

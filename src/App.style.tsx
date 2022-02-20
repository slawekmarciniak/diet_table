import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    margin: auto;
    overflow: hidden;
    @media (max-width: 999px) {
        width: 100vw;
    }

    .sliderRight {
        animation: slider 0.4s linear;
    }
    .sliderLeft {
        animation: slider 0.4s linear reverse;
    }
    @keyframes slider {
        0% {
            margin-left: 0px;
            opacity: 1;
        }
        20% {
            margin-left: -500px;
            opacity: 1;
        }
        47% {
            margin-left: -1000px;
            opacity: 1;
        }
        48% {
            margin-left: -1000px;
            opacity: 0;
        }
        50% {
            margin-left: 1000px;
            display: 0;
        }

        52% {
            margin-left: 1000px;
            opacity: 0;
        }
        53% {
            margin-left: 1000px;
            opacity: 1;
        }
        70% {
            margin-left: 500px;
        }
        100% {
            margin-left: 0px;
        }
    }
`;

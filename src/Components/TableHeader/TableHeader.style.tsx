import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    @media (max-width: 999px) {
        width: 100vw;
        flex-direction: column;
    }
`;
export const SectionWeek = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 33%;
    align-items: center;
    justify-content: center;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 40px;
        color: #a0a0a0;
        border: 1px solid #afafaf;
        border-radius: 3px;
        cursor: pointer;
        background-color: #dcdde1;
    }
    span {
        color: ${(props) => props.theme.colors.orange};
        font-size: 34px;
        text-transform: capitalize;
        margin: 0 20px;
        span {
            margin: 0 0 0 8px;
        }
    }
    @media (max-width: 999px) {
        margin-bottom: 5px;
    }
`;

export const SectionElement = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 33%;
    padding-top: 25px;
    padding-left: 15px;
    @media (max-width: 999px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-basis: 5%;
        padding: 0;
        margin-top: 15px;
    }
`;

export const SectionElementRight = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 33%;
    padding-top: 25px;

    & .imageContainer {
        display: inline;
        position: relative;
        &:after {
            content: "/";
            position: absolute;
            top: -12px;
            left: 8px;
            color: #cfcfcf;
            font-weight: bold;
            font-size: 24px;
        }
    }

    img {
        filter: grayscale(100%) brightness(50%) sepia(70%) hue-rotate(40deg)
            saturate(600%) contrast(0.8);
        opacity: 0.7;
        margin-right: 15px;
    }
    span {
        height: 20px;
        font-size: 11px;
        text-transform: uppercase;
        color: gray;
        margin-right: 40px;
    }

    @media (max-width: 999px) {
        display: none;
    }
`;

export const AsideTitle = styled.span`
    height: 20px;
    font-size: 11px;
    text-transform: uppercase;
    color: gray;
    width: 100%;
    @media (max-width: 999px) {
        display: none;
    }
`;

import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
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
        height: 30px;
        color: #a0a0a0;
        border: 1px solid #afafaf;
        border-radius: 3px;
        cursor: pointer;
        background-color: #dcdde1;
    }
    span {
        color: orange;
        font-size: 35px;
        text-transform: capitalize;
        margin: 0 8px;
        span {
            margin: 0 0 0 8px;
        }
    }
    /* border: 1px solid black; */
`;

export const SectionElement = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 33%;
    padding-top: 25px;
    padding-left: 15px;
`;

export const SectionElementRight = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 33%;
    padding-top: 25px;

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
`;

export const AsideTitle = styled.span`
    height: 20px;
    font-size: 11px;
    text-transform: uppercase;
    color: gray;
    width: 100%;
`;

import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    margin: auto;
    @media (max-width: 999px) {
        width: 100vw;
    }
`;

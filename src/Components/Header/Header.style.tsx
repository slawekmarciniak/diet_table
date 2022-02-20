import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    background-color: #f5f6fa;
    @media (max-width: 999px) {
        width: 100vw;
    }
`;

export const Menu = styled.div`
    display: flex;
    margin: auto;
    width: 1000px;
    height: 60px;
    background-color: #f5f6fa;
    @media (max-width: 999px) {
        width: 100vw;
    }
`;

export const Nav = styled.ul`
    display: flex;
    flex-basis: 40%;
    align-items: center;
    justify-content: space-around;
    a {
        text-decoration: none;
    }
    li {
        color: gray;
        font-size: 14px;
        font-weight: bold;
        position: relative;
        list-style: none;
        width: 110px;
        text-align: center;
        text-transform: uppercase;
        @media (max-width: 999px) {
            width: 80px;
            font-size: 12px;
        }
    }

    .active {
        li {
            color: ${(props) => props.theme.colors.orange};
            &:after {
                content: "";
                border-bottom: solid 2px ${(props) => props.theme.colors.orange};
                position: absolute;
                bottom: -7px;
                left: 37px;
                right: 37px;
                @media (max-width: 999px) {
                    left: 25px;
                    right: 25px;
                }
            }
        }
    }
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    color: gray;
    @media (max-width: 999px) {
        justify-content: center;
    }
    span {
        text-transform: capitalize;
        font-size: 14px;
        margin: 0 4px 0 8px;
        @media (max-width: 999px) {
            display: none;
        }
    }
`;

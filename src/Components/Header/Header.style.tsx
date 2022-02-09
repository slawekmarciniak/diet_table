import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    background-color: #f5f6fa;
`;

export const Menu = styled.div`
    display: flex;
    margin: auto;
    width: 1000px;
    height: 60px;
    background-color: #f5f6fa;
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
    }

    .active {
        li {
            color: orange;
            &:after {
                content: "";
                border-bottom: solid 2px orange;
                position: absolute;
                bottom: -7px;
                left: 37px;
                right: 37px;
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
    span {
        text-transform: capitalize;
        font-size: 14px;
        margin: 0 4px 0 8px;
    }
`;

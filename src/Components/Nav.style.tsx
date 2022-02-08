import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100vw;
    background-color: #f5f6fa;
`;

export const Menu = styled.div`
    display: flex;
    margin: auto;
    width: 1000px;
    height: 50px;
    background-color: #f5f6fa;
    border: 1px solid black;
`;

export const NavUnlisted = styled.ul`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-around;
    a {
        text-decoration: none;
    }
    li {
        color: red;
        margin: 0 0.8rem;
        font-size: 1.3rem;
        position: relative;
        list-style: none;
        width: 100px;
        text-align: center;
    }

    .active {
        li {
            /* border-bottom: 2px solid black; */
            &:after {
                content: "";
                border-bottom: solid 2px red;
                position: absolute;
                bottom: -7px;
                left: 30px;
                right: 30px;
            }
        }
    }
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
`;

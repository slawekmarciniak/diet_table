import { FC } from "react";
import { Paper, Avatar } from "@mui/material";
import { NavContainer, Menu, NavUnlisted, AvatarContainer } from "./Nav.style";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {}

const links = [
    { name: "dashboard", path: "/" },
    { name: "recipes", path: "/recipes" },
    { name: "challenge", path: "/challenge" },
];

const Nav: FC<Props> = () => {
    return (
        <Paper elevation={1}>
            <NavContainer>
                <Menu>
                    <NavUnlisted>
                        {links.map((link, index) => (
                            <NavLink key={index} to={link.path}>
                                <li>{link.name}</li>
                            </NavLink>
                        ))}
                    </NavUnlisted>
                    <AvatarContainer>
                        <Avatar alt="Slawek Marciniak" src="/avatar.jpg" />
                        <span>slawek marciniak</span>
                        <KeyboardArrowDownIcon style={{ fontSize: 16 }} />
                    </AvatarContainer>
                </Menu>
            </NavContainer>
        </Paper>
    );
};

export default Nav;

import { FC, useContext } from "react";
import { Paper, Avatar } from "@mui/material";
import { HeaderContainer, Menu, Nav, AvatarContainer } from "./Header.style";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AppContext } from "../../AppContext/AppContext";
import { AppContextType } from "../../AppContext/AppContext";

interface Props {}

const links = [
    { name: "dashboard", path: "/" },
    { name: "recipes", path: "/recipes" },
    { name: "challenge", path: "/challenge" },
];

const Header: FC<Props> = () => {
    const { isMobile } = useContext<AppContextType>(AppContext);
    console.log(isMobile);
    return (
        <Paper elevation={1}>
            <HeaderContainer>
                <Menu>
                    <Nav>
                        {links.map((link, index) => (
                            <NavLink key={index} to={link.path}>
                                <li>{link.name}</li>
                            </NavLink>
                        ))}
                    </Nav>
                    <AvatarContainer>
                        <Avatar alt="Slawek Marciniak" src="/avatar.jpg" />
                        <span>slawek marciniak</span>
                        <KeyboardArrowDownIcon style={{ fontSize: 16 }} />
                    </AvatarContainer>
                </Menu>
            </HeaderContainer>
        </Paper>
    );
};

export default Header;

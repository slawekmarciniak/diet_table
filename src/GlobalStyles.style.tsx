import { createGlobalStyle } from "styled-components";

export const COLORS = {
    orange: "#f39c12",
    black: "#2d3436",
    gray: "#636e72",
    green: "#6ab04c",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #dcdde1;
        margin: 0px;
        padding: 0px;
        font-family: roboto;
        box-sizing: border-box;

    }
    * {
        box-sizing: border-box;
    }

`;

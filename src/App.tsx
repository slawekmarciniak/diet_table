import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./App.style";
import Header from "./Components/Header";
import { COLORS, GlobalStyles } from "./GlobalStyles.style";
import Challenge from "./Pages/Challenge";
import Dashboard from "./Pages/Dashboard";
import Recipes from "./Pages/Recipes";

const theme = {
    colors: COLORS,
};

const App: FC = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Header />
                <PageContainer>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="recipes" element={<Recipes />} />
                        <Route path="challenge" element={<Challenge />} />
                    </Routes>
                </PageContainer>
            </ThemeProvider>
        </>
    );
};

export default App;

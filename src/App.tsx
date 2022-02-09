import { FC } from "react";
import Header from "./Components/Header";
import { GlobalStyles } from "./GlobalStyles.style";
import { PageContainer } from "./App.style";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Recipes from "./Pages/Recipes";
import Challenge from "./Pages/Challenge";

const App: FC = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <PageContainer>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="challenge" element={<Challenge />} />
                </Routes>
            </PageContainer>
        </>
    );
};

export default App;

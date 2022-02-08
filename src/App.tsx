import { FC } from "react";
import Nav from "./Components/Nav";
import { GlobalStyles } from "./GlobalStyles.style";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Recipes from "./Pages/Recipes";
import Challenge from "./Pages/Challenge";

const App: FC = () => {
    return (
        <>
            <GlobalStyles />
            <Nav />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="challenge" element={<Challenge />} />
            </Routes>
            <div>x</div>
            <div>x</div>
        </>
    );
};

export default App;

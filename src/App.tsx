import { FC } from "react";
import Nav from "./Components/Nav";
import { GlobalStyles } from "./GlobalStyles.style";

const App: FC = () => {
    return (
        <>
            <GlobalStyles />
            <Nav />
            <div>x</div>
            <div>x</div>
        </>
    );
};

export default App;

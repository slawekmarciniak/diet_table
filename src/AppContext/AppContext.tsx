import { createContext, useState, useEffect } from "react";
import { userCurrentWeek, userWeeks } from "../fakeDB/fakeDB";

export type AppContextType = {
    activeWeek: number;
    handleNextWeek: () => void;
    handlePreviousWeek: () => void;
    isMobile: boolean;
};

export const AppContext = createContext<AppContextType | any>(null);

type Props = {
    children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
    const [activeWeek, setActiveWeek] = useState(userCurrentWeek);
    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    const handleNextWeek = (): void => {
        activeWeek < userWeeks.length && setActiveWeek(activeWeek + 1);
    };

    const handlePreviousWeek = (): void => {
        activeWeek > 1 && setActiveWeek(activeWeek - 1);
    };

    return (
        <AppContext.Provider
            value={{
                activeWeek,
                handleNextWeek,
                handlePreviousWeek,
                isMobile,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

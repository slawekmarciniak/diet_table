import { createContext, useState, useEffect } from "react";
import { userCurrentWeek, userWeeks } from "../fakeDB/fakeDB";

export type AppContextType = {
    activeWeek: number;
    handleNextWeek: () => void;
    handlePreviousWeek: () => void;
    isMobile: boolean;
    isSliderRight: boolean;
    setIsSliderRight: (e: boolean) => void;
    isSliderLeft: boolean;
    setIsSliderLeft: (e: boolean) => void;
};

export const AppContext = createContext<AppContextType | any>(null);

type Props = {
    children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
    const [activeWeek, setActiveWeek] = useState(userCurrentWeek);
    const [isMobile, setIsMobile] = useState(false);
    const [isSliderRight, setIsSliderRight] = useState(false);
    const [isSliderLeft, setIsSliderLeft] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

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
                isSliderRight,
                setIsSliderRight,
                isSliderLeft,
                setIsSliderLeft,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

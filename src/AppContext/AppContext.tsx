import { createContext, useState } from "react";
import { userCurrentWeek, userWeeks } from "../fakeDB/fakeDB";

export type AppContextType = {
    activeWeek: number;
    handleNextWeek: () => void;
    handlePreviousWeek: () => void;
};

export const AppContext = createContext<AppContextType | any>(null);

type Props = {
    children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
    const [activeWeek, setActiveWeek] = useState(userCurrentWeek);

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
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

import { createContext, useState } from "react";
import { showedWeek } from "../fakeDB/fakeDB";

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
    const [activeWeek, setActiveWeek] = useState(showedWeek);

    const handleNextWeek = (): void => {
        setActiveWeek(activeWeek + 1);
    };

    const handlePreviousWeek = (): void => {
        setActiveWeek(activeWeek - 1);
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

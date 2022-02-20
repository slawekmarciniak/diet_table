import { FC } from "react";
import {
    TableContainer,
    DaysContainer,
    IntervalsContainer,
} from "./Table.style";
import { weeklyDietPlan } from "../../fakeDB/fakeDB";
import DayContainer from "./DayContainer/DayContainer";
import IntervalsColumn from "./DayContainer/IntervalsColumn";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { AppContextType } from "../../AppContext/AppContext";

interface Props {}

const Table: FC<Props> = () => {
    const { isSliderRight, isSliderLeft } =
        useContext<AppContextType>(AppContext);
    const sliderRight = isSliderRight ? "sliderRight" : "";
    const sliderLeft = isSliderLeft ? "sliderLeft" : "";

    return (
        <TableContainer className={`table ${sliderRight} ${sliderLeft}`}>
            <IntervalsContainer>
                <IntervalsColumn />
            </IntervalsContainer>
            <DaysContainer>
                {weeklyDietPlan.map((e) => (
                    <DayContainer key={e.id} day={e.day} carbs={e.carbs} />
                ))}
            </DaysContainer>
        </TableContainer>
    );
};

export default Table;

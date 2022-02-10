import { FC } from "react";
import {
    TableContainer,
    DaysContainer,
    IntervalsContainer,
} from "./Table.style";
import { week } from "../../fakeDB/fakeDB";
import DayContainer from "./DayContainer/DayContainer";
import IntervalsColumn from "./DayContainer/IntervalsColumn";

interface Props {}

const Table: FC<Props> = () => {
    return (
        <TableContainer>
            <IntervalsContainer>
                <IntervalsColumn />
            </IntervalsContainer>
            <DaysContainer>
                {week.map((e) => (
                    <DayContainer day={e.day} carbs={e.carbs} />
                ))}
            </DaysContainer>
        </TableContainer>
    );
};

export default Table;

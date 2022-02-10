import { FC } from "react";
import {
    TableContainer,
    IntervalsContainer,
    DaysContainer,
    Day,
} from "./Table.style";
import {
    userTimeInterval,
    lowCarbsDiet,
    heightCarbsDiet,
    week,
    showedWeek,
} from "../../fakeDB/fakeDB";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import moment from "moment";
interface Props {}

// outside #dcdde1
// inside #dcdde1

const dayOfWeek = moment().day();
const dietWeek = 7;
console.log(dayOfWeek);

const renderInterval = (e: any, i: any) => {
    return (
        <div key={i}>
            <span>{e.time}</span>
            <span>{e.label}</span>
        </div>
    );
};

const Table: FC<Props> = () => {
    return (
        <TableContainer>
            <IntervalsContainer>
                {userTimeInterval.map((e, i) => renderInterval(e, i))}
            </IntervalsContainer>
            <DaysContainer>
                {week.map((e) => (
                    <RenderDay day={e.day} carbs={e.carbs} />
                ))}
            </DaysContainer>
        </TableContainer>
    );
};

export default Table;

type RenderDayProps = {
    day: number;
    carbs: string | null;
};

const RenderDay = ({ day, carbs }: RenderDayProps) => {
    console.log(day);
    const diet = lowCarbsDiet;
    const dayNumber = showedWeek * 7 + day;
    const isToday = day === dayOfWeek && showedWeek === dietWeek;

    return (
        <>
            <Day>
                <div className="dayNumber">day {dayNumber}</div>
                {diet.map((e: any, i: any) => (
                    <div className="dayElement" key={i}>
                        <p>{e}</p>
                    </div>
                ))}
                <div className="dayCarbs">
                    <p>low-carb</p>
                </div>
                <div className="workoutIcon">
                    <FitnessCenterIcon
                        style={{
                            color: "gray",
                            transform: "rotate(-45deg)",
                            fontSize: 30,
                        }}
                    />
                </div>
            </Day>
        </>
    );
};

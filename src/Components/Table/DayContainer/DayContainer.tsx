import { FC } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import moment from "moment";
import { Day } from "./DayContainer.style";
import {
    userTimeInterval,
    lowCarbsDiet,
    heightCarbsDiet,
    week,
    showedWeek,
} from "../../../fakeDB/fakeDB";

interface DayContainerProps {
    day: number;
    carbs: string | null;
}

const dayOfWeek = moment().day();
const dietWeek = 7;

const DayContainer: FC<DayContainerProps> = ({ day, carbs }) => {
    const diet = lowCarbsDiet;
    const dayNumber = showedWeek * 7 + day;
    const isToday = day === dayOfWeek && showedWeek === dietWeek;
    const isSunday = day === 7;

    return (
        <>
            {!isSunday && (
                <Day borderRight="1px solid gray">
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
            )}

            {isSunday && (
                <Day borderRight="none">
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
            )}
        </>
    );
};

export default DayContainer;

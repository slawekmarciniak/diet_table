import { FC } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import moment from "moment";
import { Day } from "./DayContainer.style";
import {
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
    const diet = carbs === "low" ? lowCarbsDiet : heightCarbsDiet;
    const dayNumber = showedWeek * 7 + day;
    const isToday = day === dayOfWeek && showedWeek === dietWeek;
    const isSunday = day === 7;

    const renderSunday = () => (
        <Day borderRight="1px solid gray" className={isToday ? "today" : ""}>
            <div
                className={isToday ? "dayNumber dayNumberActive" : "dayNumber"}
            >
                day {dayNumber}
            </div>
            {diet.map((e: any, i: any) => (
                <div
                    className={
                        isToday ? "dayElement dayElementActive" : "dayElement"
                    }
                    key={i}
                >
                    <p>{e}</p>
                    {e === "Bod-e Shake" && (
                        <img
                            style={{
                                opacity: 0.9,
                                filter: isToday
                                    ? "grayscale(0%)"
                                    : "grayscale(60%)",
                            }}
                            src="bode_shake.png"
                            alt="shake"
                            width="130"
                        ></img>
                    )}
                </div>
            ))}
            <div className="dayCarbs">
                {carbs === "low" ? <p>low-carb</p> : <p>high-carb</p>}
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
    );

    const renderWeekday = () => (
        <Day borderRight="none" className={isToday ? "today" : ""}>
            <div
                className={isToday ? "dayNumber dayNumberActive" : "dayNumber"}
            >
                day {dayNumber}
            </div>
            <div
                className={
                    isToday
                        ? "dayElement  sunday sundayActive"
                        : "dayElement  sunday"
                }
            >
                <span>guilt-free day</span>
                <span>
                    <TagFacesIcon style={{ fontSize: 40 }} />
                </span>
            </div>

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
    );

    return <>{isSunday ? renderWeekday() : renderSunday()}</>;
};

export default DayContainer;

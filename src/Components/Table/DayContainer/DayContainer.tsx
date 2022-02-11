import { FC } from "react";
import { useContext } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PrintIcon from "@mui/icons-material/Print";
import moment from "moment";
import { Day } from "./DayContainer.style";
import {
    lowCarbsDiet,
    heightCarbsDiet,
    userCurrentWeek,
} from "../../../fakeDB/fakeDB";
import { AppContext } from "../../../AppContext/AppContext";
import { AppContextType } from "../../../AppContext/AppContext";

interface DayContainerProps {
    day: number;
    carbs: string | null;
}
const dayOfWeek = moment().day();

const DayContainer: FC<DayContainerProps> = ({ day, carbs }) => {
    const { activeWeek } = useContext<AppContextType>(AppContext);
    const diet = carbs === "low" ? lowCarbsDiet : heightCarbsDiet;
    const dayNumber = activeWeek * 7 - 7 + day;
    const isToday = day === dayOfWeek && activeWeek === userCurrentWeek;
    const isSunday = day === 7;

    const renderWeekday = () => (
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

    const renderSunday = () => (
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
            <div className="printIcon">
                <span>
                    <PrintIcon style={{ fontSize: 35 }} />
                </span>
                <span>print</span>
            </div>
        </Day>
    );

    return <>{isSunday ? renderSunday() : renderWeekday()}</>;
};

export default DayContainer;

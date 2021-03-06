import { FC } from "react";
import { useContext } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import DoneIcon from "@mui/icons-material/Done";
import PrintIcon from "@mui/icons-material/Print";
import moment from "moment";
import { Day } from "./DayContainer.style";
import { COLORS } from "../../../GlobalStyles.style";
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
    const dayWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    const diet = carbs === "low" ? lowCarbsDiet : heightCarbsDiet;
    const dayNumber = activeWeek * 7 - 7 + day;
    const isToday = day === dayWeek && activeWeek === userCurrentWeek;
    const isYesterday = day === dayWeek - 1 && activeWeek === userCurrentWeek;
    const isSunday = day === 7;

    const renderWeekday = () => (
        <Day
            borderRight={`1px solid ${COLORS.gray}`}
            className={isToday ? "today" : ""}
        >
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
                    {isYesterday && <CheckCircleIcon className="check" />}
                    <p>{e}</p>
                    {e === "Bod-e Shake" && (
                        <img
                            style={{
                                filter: isToday
                                    ? "grayscale(0%)"
                                    : "grayscale(60%)",
                            }}
                            src="bode_shake.png"
                            alt="shake"
                        />
                    )}
                </div>
            ))}
            <div className="dayCarbs">
                {carbs === "low" ? <p>low-carb</p> : <p>high-carb</p>}
            </div>
            <div className="workoutIcon">
                <FitnessCenterIcon
                    style={{
                        color: isToday || isYesterday ? COLORS.orange : "gray",
                        transform: "rotate(-45deg)",
                        fontSize: 30,
                    }}
                />
                {(isToday || isYesterday) && (
                    <DoneIcon
                        className="doneIcon"
                        style={{
                            fontSize: 12,
                            color: COLORS.orange,
                            marginLeft: 4,
                        }}
                    />
                )}
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

import { FC } from "react";
import { Interval, Workout } from "./IntervalsColumn.style";
import { userTimeInterval } from "../../../fakeDB/fakeDB";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface IntervalsColumnProps {}

const IntervalsColumn: FC<IntervalsColumnProps> = () => {
    return (
        <>
            {userTimeInterval.map((e, i) => {
                return (
                    <Interval
                        height={i === 0 || i === 4 ? "120px" : "90px"}
                        key={i}
                    >
                        <div>
                            <span>{e.time}</span>
                            <span>{e.label}</span>
                        </div>
                    </Interval>
                );
            })}
            <Workout>
                workout <ArrowRightIcon style={{ fontSize: 12 }} />
            </Workout>
        </>
    );
};

export default IntervalsColumn;

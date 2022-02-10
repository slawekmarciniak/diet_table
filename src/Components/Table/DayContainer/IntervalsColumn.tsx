import { FC } from "react";
import { Interval, Workout } from "./IntervalsColumn.style";
import { userTimeInterval } from "../../../fakeDB/fakeDB";

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
                        <span>{e.time}</span>
                        <span>{e.label}</span>
                    </Interval>
                );
            })}
            <Workout>workout</Workout>
        </>
    );
};

export default IntervalsColumn;

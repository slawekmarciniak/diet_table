import { FC } from "react";
import { Dot, BarContainer } from "./ProgressBar.style";
import { userCurrentWeek, userWeeks } from "../../fakeDB/fakeDB";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = () => {
    const renderDot = (e: number, i: number) => {
        let background = "gray";
        if (e === userCurrentWeek) {
            background = "white";
        } else if (e < userCurrentWeek) {
            background = "green";
        }
        return <Dot key={i} bcg={background} />;
    };
    return (
        <BarContainer>{userWeeks.map((e, i) => renderDot(e, i))}</BarContainer>
    );
};

export default ProgressBar;

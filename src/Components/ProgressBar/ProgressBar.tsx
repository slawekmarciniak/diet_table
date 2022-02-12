import { FC } from "react";
import { Dot, BarContainer } from "./ProgressBar.style";
import { userCurrentWeek, userWeeks } from "../../fakeDB/fakeDB";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = () => {
    return (
        <BarContainer>
            {userWeeks.map(() => (
                <Dot />
            ))}
        </BarContainer>
    );
};

export default ProgressBar;

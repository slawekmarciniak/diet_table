import React, { FC } from "react";
import { Dot, BarContainer, Dash } from "./ProgressBar.style";
import { userCurrentWeek, userWeeks } from "../../fakeDB/fakeDB";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = () => {
    const renderDot = (e: number, i: number) => {
        let background = "gray";
        let dashBackground = "gray";

        if (e === userCurrentWeek) {
            background = "white";
        } else if (e < userCurrentWeek) {
            background = "green";
        }
        if (e < userCurrentWeek - 1) {
            dashBackground = "green";
        }
        return (
            <React.Fragment key={e}>
                <Dot key={`${e}_dot`} bcg={background} digit={e.toString()} />
                {e < userWeeks.length && (
                    <Dash key={`${e}_dash`} bcg={dashBackground} />
                )}
            </React.Fragment>
        );
    };
    return (
        <BarContainer>{userWeeks.map((e, i) => renderDot(e, i))}</BarContainer>
    );
};

export default ProgressBar;

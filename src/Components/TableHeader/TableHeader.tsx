import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FC, useContext, useState } from "react";
import { AppContext, AppContextType } from "../../AppContext/AppContext";
import { userWeeks } from "../../fakeDB/fakeDB";
import ProgressBar from "../ProgressBar/ProgressBar";
import {
    AsideTitle,
    SectionContainer,
    SectionElement,
    SectionElementRight,
    SectionWeek,
} from "./TableHeader.style";

interface Props {}
interface Icons {
    broccoli: boolean;
    cheese: boolean;
    meat: boolean;
    fish: boolean;
    chicken: boolean;
}

const TableHeader: FC<Props> = () => {
    const {
        activeWeek,
        handleNextWeek,
        handlePreviousWeek,
        setIsSliderRight,
        setIsSliderLeft,
    } = useContext<AppContextType>(AppContext);

    const [isIconActive, setIsIconActive] = useState<Icons | any>({
        broccoli: true,
        cheese: true,
        meat: false,
        fish: false,
        chicken: true,
    });

    const handleRightButton = () => {
        handleNextWeek();
        if (activeWeek < userWeeks.length) {
            setIsSliderRight(true);
            setTimeout(() => {
                setIsSliderRight(false);
            }, 400);
        }
    };
    const handleLeftButton = () => {
        handlePreviousWeek();
        if (activeWeek > 1) {
            setIsSliderLeft(true);
            setTimeout(() => {
                setIsSliderLeft(false);
            }, 400);
        }
    };
    const handleIcon = (iconName: string) => {
        setIsIconActive({
            ...isIconActive,
            [iconName]: !isIconActive[iconName],
        });
    };

    return (
        <SectionContainer>
            <SectionElement>
                <AsideTitle>your 12 week progress</AsideTitle>
                <ProgressBar />
            </SectionElement>
            <SectionWeek>
                <button onClick={handleLeftButton}>
                    <ArrowBackIosIcon style={{ marginLeft: 8, fontSize: 20 }} />
                </button>
                <span>
                    week<span>{activeWeek}</span>
                </span>
                <button onClick={handleRightButton}>
                    <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                </button>
            </SectionWeek>
            <SectionElementRight>
                <span>select your protein option</span>
                <div>
                    <div
                        className={
                            isIconActive.broccoli
                                ? "imgContainer"
                                : "imgContainer imgContainerDisabled"
                        }
                        onClick={() => handleIcon("broccoli")}
                    >
                        <img
                            className={
                                isIconActive.broccoli ? "" : "imgDisable"
                            }
                            src="broccoli.png"
                            alt="broccoli"
                        />
                    </div>
                    <div
                        className={
                            isIconActive.cheese
                                ? "imgContainer"
                                : "imgContainer imgContainerDisabled"
                        }
                        onClick={() => handleIcon("cheese")}
                    >
                        <img
                            className={isIconActive.cheese ? "" : "imgDisable"}
                            src="cheese.png"
                            alt="cheese"
                        />
                    </div>
                    <div
                        className={
                            isIconActive.meat
                                ? "imgContainer"
                                : "imgContainer imgContainerDisabled"
                        }
                        onClick={() => handleIcon("meat")}
                    >
                        <img
                            className={isIconActive.meat ? "" : "imgDisable"}
                            src="meat.png"
                            alt="meat"
                        />
                    </div>
                    <div
                        className={
                            isIconActive.fish
                                ? "imgContainer"
                                : "imgContainer imgContainerDisabled"
                        }
                        onClick={() => handleIcon("fish")}
                    >
                        <img
                            src="clown-fish.png"
                            alt="fish"
                            className={isIconActive.fish ? "" : "imgDisable"}
                        />
                    </div>
                    <div
                        className={
                            isIconActive.chicken
                                ? "imgContainer"
                                : "imgContainer imgContainerDisabled"
                        }
                        onClick={() => handleIcon("chicken")}
                    >
                        <img
                            className={isIconActive.chicken ? "" : "imgDisable"}
                            src="chicken-leg.png"
                            alt="chicken"
                        />
                    </div>
                </div>
            </SectionElementRight>
        </SectionContainer>
    );
};

export default TableHeader;

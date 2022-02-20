import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FC, useContext } from "react";
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

const TableHeader: FC<Props> = () => {
    const {
        activeWeek,
        handleNextWeek,
        handlePreviousWeek,
        setIsSliderRight,
        setIsSliderLeft,
    } = useContext<AppContextType>(AppContext);

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
                    <img src="broccoli.png" alt="broccoli" />
                    <img src="cheese.png" alt="" />
                    <img src="meat.png" alt="" />
                    <div className="imageContainer">
                        <img
                            src="clown-fish.png"
                            alt=""
                            style={{
                                filter: "grayscale(100%) brightness(70%)",
                            }}
                        />
                    </div>

                    <div className="imageContainer">
                        <img
                            src="chicken-leg.png"
                            alt=""
                            style={{
                                filter: "grayscale(100%) brightness(100%)",
                            }}
                        />
                    </div>
                </div>
            </SectionElementRight>
        </SectionContainer>
    );
};

export default TableHeader;

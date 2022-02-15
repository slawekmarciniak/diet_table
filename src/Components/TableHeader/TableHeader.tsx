import { FC } from "react";
import { useContext } from "react";
import {
    SectionContainer,
    SectionElement,
    SectionElementRight,
    AsideTitle,
    SectionWeek,
} from "./TableHeader.style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "../../AppContext/AppContext";
import { AppContextType } from "../../AppContext/AppContext";
import ProgressBar from "../ProgressBar/ProgressBar";

// interfaceimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {}

const TableHeader: FC<Props> = () => {
    const { activeWeek, handleNextWeek, handlePreviousWeek, isMobile } =
        useContext<AppContextType>(AppContext);

    return (
        <SectionContainer>
            <SectionElement>
                <AsideTitle>your 12 week progress</AsideTitle>
                <ProgressBar />
            </SectionElement>
            <SectionWeek>
                <button onClick={() => handlePreviousWeek()}>
                    <ArrowBackIosIcon style={{ marginLeft: 8, fontSize: 20 }} />
                </button>
                <span>
                    week<span>{activeWeek}</span>
                </span>
                <button onClick={() => handleNextWeek()}>
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

import { FC } from "react";
import { useContext } from "react";
import { SectionContainer, SectionElement } from "./TableHeader.style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "../../AppContext/AppContext";
import { AppContextType } from "../../AppContext/AppContext";
import ProgressBar from "../ProgressBar/ProgressBar";

interface Props {}

const TableHeader: FC<Props> = () => {
    const { activeWeek, handleNextWeek, handlePreviousWeek, isMobile } =
        useContext<AppContextType>(AppContext);

    return (
        <SectionContainer>
            {!isMobile && (
                <SectionElement>
                    <ProgressBar />
                </SectionElement>
            )}
            <SectionElement>
                <button onClick={() => handlePreviousWeek()}>
                    <ArrowBackIosIcon style={{ marginLeft: 8, fontSize: 20 }} />
                </button>
                <span>
                    week<span>{activeWeek}</span>
                </span>
                <button onClick={() => handleNextWeek()}>
                    <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                </button>
            </SectionElement>
            <SectionElement>x</SectionElement>
        </SectionContainer>
    );
};

export default TableHeader;

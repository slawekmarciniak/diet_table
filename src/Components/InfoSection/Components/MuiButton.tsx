import { FC } from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";

interface MuiButtonProps {
    text: string;
}

const MuiButton: FC<MuiButtonProps> = ({ text }) => {
    const startIcon =
        (text === "Android" && <AdbIcon />) ||
        (text === "iOS" && <AppleIcon />);

    return (
        <Button
            startIcon={startIcon}
            endIcon={<ArrowForwardIosIcon style={{ fontSize: 12 }} />}
            variant="outlined"
        >
            <span style={{ textTransform: "none" }}>{text}</span>
        </Button>
    );
};

export default MuiButton;

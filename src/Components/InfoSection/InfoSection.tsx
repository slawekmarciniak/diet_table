import { FC } from "react";
import { Divider } from "@mui/material";
import MuiButton from "./Components/MuiButton";
import { InfoSectionContainer } from "./InfoSection.style";

interface Props {}

const InfoSection: FC<Props> = () => {
    return (
        <>
            <InfoSectionContainer>
                <div>
                    <p>Running outs of products?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci iste ipsum.
                    </p>
                    <MuiButton text="Buy now" />
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <p>Bode-e Trainer in your pocket</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci iste ipsum.
                    </p>
                    <div>
                        <MuiButton text="iOS" />
                        <MuiButton text="Android" />
                    </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <p>Frequently Asked Questions</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci iste ipsum.
                    </p>
                    <MuiButton text="Read FAQs" />
                </div>
            </InfoSectionContainer>
        </>
    );
};

export default InfoSection;

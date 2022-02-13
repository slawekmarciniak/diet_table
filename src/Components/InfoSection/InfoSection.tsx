import { FC } from "react";
import { Divider, Button } from "@mui/material";
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
                    <Button variant="outlined">Outlined</Button>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <p>Bode-e Trainer in your pocket</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci iste ipsum.
                    </p>
                    <div>
                        <Button variant="outlined">Outlined</Button>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <p>Frequently Asked Questions</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci iste ipsum.
                    </p>
                    <Button variant="outlined">Outlined</Button>
                </div>
            </InfoSectionContainer>
        </>
    );
};

export default InfoSection;

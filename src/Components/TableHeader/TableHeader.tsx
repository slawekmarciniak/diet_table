import { FC } from "react";
import { SectionContainer, SectionElement } from "./TableHeader.style";
interface Props {}

const TableHeader: FC<Props> = () => {
    return (
        <SectionContainer>
            <SectionElement>x</SectionElement>
            <SectionElement>x</SectionElement>
            <SectionElement>x</SectionElement>
        </SectionContainer>
    );
};

export default TableHeader;

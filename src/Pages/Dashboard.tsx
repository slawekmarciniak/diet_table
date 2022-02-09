import { FC } from "react";
import TableHeader from "../Components/TableHeader";
import Table from "../Components/Table";
import InfoSection from "../Components/InfoSection";
interface Props {}

// outside #dcdde1
// inside #dcdde1

const Dashboard: FC<Props> = () => {
    return (
        <>
            <TableHeader />
            <Table />
            <InfoSection />
        </>
    );
};

export default Dashboard;

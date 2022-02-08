import { FC } from "react";
interface Props {}

// outside #dcdde1
// inside #dcdde1

const Recipes: FC<Props> = () => {
    return (
        <div
            style={{
                width: "100%",
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <p>it's demo site, RECIPES page waiting for graphic design</p>;
        </div>
    );
};

export default Recipes;

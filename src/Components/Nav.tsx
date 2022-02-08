import { FC } from "react";
import Paper from "@mui/material/Paper";
interface Props {}

const Nav: FC<Props> = () => {
    return (
        <Paper elevation={1}>
            <nav>
                <div>
                    <div>
                        <button>dashboard</button>
                        <button>recipes</button>
                        <button>challenge</button>
                    </div>
                    <div>person</div>
                </div>
            </nav>
        </Paper>
    );
};

export default Nav;

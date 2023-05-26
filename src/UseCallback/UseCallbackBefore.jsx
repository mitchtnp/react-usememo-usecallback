import { useState } from "react";
import axios from "axios";

// scripts
import { sleepFor } from "../common/utils";

// Components
import ThemeToggle from "./shared/ThemeToggle";
import InputNumber from "./shared/InputNumber";
import ColorList from "./shared/ColorList";

const UseCallbackBefore = () => {
    const [number, numberSet] = useState(6);
    const [colorMode, colorModeSet] = useState("light");

    const handleToggleTheme = () => {
        colorModeSet((prevcolorMode) =>
            prevcolorMode === "light" ? "dark" : "light"
        );
    };

    const handleUserNumberChange = (e) => {
        numberSet(parseInt(e.target.value));
    };

    const filterColors = async () => {
        sleepFor(1);

        const resp = await axios.get("http://localhost:4059/colors");

        const { data:colors } = resp;

        const filtered =  colors.filter((color, idx) => {
            return idx < number;
        });
        return filtered;
    };

    return (
        <div className="UseCallbackBefore">
            <h3>Before</h3>
            <InputNumber value={number} onChange={handleUserNumberChange}/>
            <ThemeToggle onClick={handleToggleTheme} colorMode={colorMode}>
                <ColorList filterColors={filterColors} />
            </ThemeToggle>
        </div>
    );
};

export default UseCallbackBefore;

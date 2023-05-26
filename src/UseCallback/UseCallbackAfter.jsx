import { useState, useCallback } from "react";
import axios from "axios";

// scripts
import { sleepFor } from "../common/utils";

// Components
import ThemeToggle from "./shared/ThemeToggle";
import InputNumber from "./shared/InputNumber";
import ColorList from "./shared/ColorList";

const UseCallbackAfter = () => {
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

    const filterColors = useCallback(async () => {
        sleepFor(1);

        const resp = await axios.get("http://localhost:4059/colors");

        const { data:colors } = resp;

        const filtered =  colors.filter((color, idx) => {
            return idx < number;
        });
        return filtered;
    }, [number]);

    return (
        <div className="UseCallbackAfter">
            <h3>After</h3>
            <InputNumber value={number} onChange={handleUserNumberChange}/>
            <ThemeToggle onClick={handleToggleTheme} colorMode={colorMode}>
                <ColorList filterColors={filterColors} />
            </ThemeToggle>
        </div>
    );
};

export default UseCallbackAfter;

import { useState, useEffect } from "react";
import axios from "axios";

// scripts
import { sleepFor } from "../common/utils";

// Components
import ThemeToggle from "./shared/ThemeToggle";
import InputNumber from "./shared/InputNumber";
import ColorListMitch from "./shared/ColorListMitch";

const UseCallbackMitch = () => {
    const [number, numberSet] = useState(6);
    const [colors, colorsSets] = useState([]);
    const [colorMode, colorModeSet] = useState("light");

    const handleToggleTheme = () => {
        colorModeSet((prevcolorMode) =>
            prevcolorMode === "light" ? "dark" : "light"
        );
    };

    const handleUserNumberChange = (e) => {
        numberSet(parseInt(e.target.value));
    };

    useEffect(() => {

        const fetchColors = async () => {
            sleepFor(1);

            const resp = await axios.get("http://localhost:4059/colors");

            const { data:colors } = resp;

            const filtered =  colors.filter((color, idx) => {
                return idx < number;
            });
            colorsSets(filtered);
        };

        fetchColors();

    }, [number]);

    return (
        <div className="UseCallbackMitch">
            <h3>Mitch No useCallback</h3>
            <InputNumber value={number} onChange={handleUserNumberChange}/>
            <ThemeToggle onClick={handleToggleTheme} colorMode={colorMode}>
                <ColorListMitch colors={colors} />
            </ThemeToggle>
        </div>
    );
};

export default UseCallbackMitch;

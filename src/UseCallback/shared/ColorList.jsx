import { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Color from "./Color";

const ColorList = ({ filterColors }) => {
    const [colors, colorsSet] = useState([]);

    useEffect(() => {

        console.count('Updating Filtered Colors');

        const prom = async () => {
            const filtered = await filterColors();
            colorsSet(filtered);
        }

        prom();

    }, [filterColors]);

    return (
        <ColorListStyled className="ColorList">
            {colors.map((color) => {
                return <Color key={color.id} color={color} />;
            })}
        </ColorListStyled>
    );
};

export default ColorList;

const ColorListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

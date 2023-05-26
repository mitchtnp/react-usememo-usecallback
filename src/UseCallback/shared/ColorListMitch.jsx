import styled from "styled-components";

// components
import Color from "./Color";

const ColorListMitch = ({ colors }) => {
    return (
        <ColorListMitchStyled className="ColorListMitch">
            {colors.map((color) => {
                return <Color key={color.id} color={color} />;
            })}
        </ColorListMitchStyled>
    );
};

export default ColorListMitch;

const ColorListMitchStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

import { useContext } from "react";
import styled from "styled-components";

import IconContext from "./IconContext";

const ChildB = () => {
    console.log("Render Child B");

    const { icon } = useContext(IconContext);

    if (!icon || !icon.id) {
        return "Loading...";
    }

    return (
        <ChildBStyled className="ChildB">
            <h2>Child B</h2>
            <div>ID: {icon.id}</div>
        </ChildBStyled>
    );
};

export default ChildB;

const ChildBStyled = styled.div``;

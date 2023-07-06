import React, { useContext } from "react";
import styled from "styled-components";
import { IconContext } from "./IconContext/IconContextProvider";

const ChildA = () => {
    console.log("Render Child A");

    const { score, setScore } = useContext(IconContext);

    return (
        <ChildAStyled className="ChildA">
            <h2>Child A</h2>

            <button
                onClick={() => {
                    setScore((score) => score + 1);
                }}
            >
                Score: {score}
            </button>
        </ChildAStyled>
    );
};

export default React.memo(ChildA);

const ChildAStyled = styled.div``;

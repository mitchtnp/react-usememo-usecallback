import { useContext } from "react";
import styled from "styled-components";
import IconContext from "./IconContext/index";
import { setScore } from "./IconContext/actions";

const ChildA = () => {
    console.log("Render Child A");

    const {
        state: { score },
        dispatch,
    } = useContext(IconContext);

    return (
        <ChildAStyled className="ChildA">
            <h2>Child A</h2>

            <button
                onClick={() => {
                    dispatch(setScore((score) => score + 1));
                }}
            >
                Score: {score}
            </button>
        </ChildAStyled>
    );
};

export default ChildA;

const ChildAStyled = styled.div``;

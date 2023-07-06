import { useState } from "react";
import styled from "styled-components";

const UserInput = () => {
    const [name, setName] = useState("");

    console.log("Render  User Input");

    return (
        <UserInputStyled className="UserInput">
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </UserInputStyled>
    );
};

export default UserInput;

const UserInputStyled = styled.div``;

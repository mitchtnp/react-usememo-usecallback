import { useState } from "react";
import styled from "styled-components";

const InputName = () => {
    const [name, setName] = useState("");

    console.log("Render InputName");
    return (
        <InputNameStyled className="InputName">
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </InputNameStyled>
    );
};

export default InputName;

const InputNameStyled = styled.div``;

import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Context
import IconContextProvider from "./IconContext/IconContextProvider";

// Children
import UserInput from "./UserInput";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const UseMemoContext = () => {
    const [icon, iconSet] = useState({});

    const getIcon = async () => {
        const { data: icon } = await axios.get(
            "http://localhost:4059/icons/14252"
        );
        iconSet(icon);
    };

    useEffect(() => {
        getIcon();
    }, []);

    console.log("Render Parent");

    return (
        <IconContextProvider icon={icon}>
            <UseMemoContextStyled className="UseMemoContext">
                <h1>UseMemo Context</h1>
                <UserInput />
                <ChildA />
                <ChildB />
            </UseMemoContextStyled>
        </IconContextProvider>
    );
};

export default UseMemoContext;

const UseMemoContextStyled = styled.div``;

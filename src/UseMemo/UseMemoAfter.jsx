import { useState, useMemo } from "react";
import styled from "styled-components";

// Components
import InputNumber from "./shared/InputNumber";
import ThemeToggle from "./shared/ThemeToggle";
import UserNumberDisplay from "./shared/UserNumberDisplay";

// scripts
import { reallyLongRunningFunction } from '../common/utils';

const UseMemoAfter = () => {
    const [userNumber, userNumberSet] = useState(0);
    const [isLightMode, isLightModeSet] = useState(true);

    const handleToggleTheme = () => {
        isLightModeSet((previsLightMode) => !previsLightMode);
    };
    const handleUserNumberChange = (e) => {
        userNumberSet(parseInt(e.target.value));
    };
    const doubleNumber = useMemo(() => {
        return reallyLongRunningFunction(userNumber);
    }, [userNumber]);

    return (
        <UseMemoAfterStyled className="UseMemoAfter">
            <h3>After</h3>

            <ThemeToggle onClick={handleToggleTheme} isLightMode={isLightMode}>
                <InputNumber
                    value={userNumber}
                    onChange={handleUserNumberChange}
                />
                <UserNumberDisplay userNumber={doubleNumber} />
            </ThemeToggle>
        </UseMemoAfterStyled>
    );
};

export default UseMemoAfter;

const UseMemoAfterStyled = styled.div``;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import InputNumber from "./shared/InputNumber";
import ThemeToggle from "./shared/ThemeToggle";
import UserNumberDisplay from "./shared/UserNumberDisplay";

// scripts
import { reallyLongRunningFunction } from '../common/utils';

const UseMemoMitch = () => {
    const [userNumber, userNumberSet] = useState(0);
    const [displayNumber, displayNumberSet] = useState(userNumber);
    const [isLightMode, isLightModeSet] = useState(true);

    const handleToggleTheme = () => {
        isLightModeSet((previsLightMode) => !previsLightMode);
    };
    const handleUserNumberChange = (e) => {
        userNumberSet(parseInt(e.target.value));
    };

    useEffect(() => {
        displayNumberSet(reallyLongRunningFunction(userNumber));
    }, [userNumber]);

    return (
        <div className="UseMemoMitch">
            <h3>Mitch Approach - no useMemo</h3>

            <ThemeToggle onClick={handleToggleTheme} isLightMode={isLightMode}>
                <InputNumber
                    value={userNumber}
                    onChange={handleUserNumberChange}
                />
                <UserNumberDisplay userNumber={displayNumber} />
            </ThemeToggle>
        </div>
    );
};

export default UseMemoMitch;

// prop-types
UseMemoMitch.propTypes = {
    reallyLongRunningFunction: PropTypes.func,
};

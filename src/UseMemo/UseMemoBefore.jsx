import { useState } from "react";
import PropTypes from "prop-types";

// Components
import InputNumber from "./shared/InputNumber";
import ThemeToggle from "./shared/ThemeToggle";
import UserNumberDisplay from "./shared/UserNumberDisplay";

// scripts
import { reallyLongRunningFunction } from '../common/utils';

const UseMemoBefore = () => {
    const [userNumber, userNumberSet] = useState(0);
    const [isLightMode, isLightModeSet] = useState(true);

    const handleToggleTheme = () => {
        isLightModeSet((previsLightMode) => !previsLightMode);
    };
    const handleUserNumberChange = (e) => {
        userNumberSet(parseInt(e.target.value));
    };
    const doubleNumber = reallyLongRunningFunction(userNumber);

    return (
        <div className="UseMemoBefore">
            <h3>Before</h3>

            <ThemeToggle onClick={handleToggleTheme} isLightMode={isLightMode}>
                <InputNumber
                    value={userNumber}
                    onChange={handleUserNumberChange}
                />
                <UserNumberDisplay userNumber={doubleNumber} />
            </ThemeToggle>
        </div>
    );
};

export default UseMemoBefore;

// prop-types
UseMemoBefore.propTypes = {
    reallyLongRunningFunction: PropTypes.func,
};

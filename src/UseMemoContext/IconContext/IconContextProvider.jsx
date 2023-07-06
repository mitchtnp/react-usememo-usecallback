import { useReducer, useEffect } from "react";

import IconContext from "./index";
import reducer from "./reducer";
import { setIcon } from "./actions";

const IconContextProvider = ({ icon = {}, children }) => {
    const defaultState = {
        icon: icon,
        score: 0,
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        dispatch(setIcon(icon));
    }, [icon]);

    return (
        <IconContext.Provider
            value={{ state, dispatch }}
            displayName="Icon useMemo Context"
        >
            {children}
        </IconContext.Provider>
    );
};

export default IconContextProvider;

import { actionTypes } from "./actionTypes.js";

/*---------------------------
| State Updater (reducer)
---------------------------*/
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ICON_SET: {
            return {
                ...state,
                icon: action.icon,
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default reducer;

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
        case actionTypes.SCORE_SET: {
            return {
                ...state,
                score: action.score,
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default reducer;

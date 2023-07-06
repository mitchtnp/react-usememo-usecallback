import { actionTypes } from "./actionTypes.js";

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const setIcon = (icon) => {
    return {
        type: actionTypes.ICON_SET,
        icon: icon,
    };
};

export const setScore = (score) => {
    return {
        type: actionTypes.SCORE_SET,
        score: score,
    };
};

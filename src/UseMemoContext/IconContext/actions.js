import { actionTypes } from "./actionTypes.js";

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const set = (icon) => {
    return {
        type: actionTypes.ICON_SET,
        icon: icon,
    };
};

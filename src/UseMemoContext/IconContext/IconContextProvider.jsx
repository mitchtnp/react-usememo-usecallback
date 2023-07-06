import { createContext, useState } from "react";

export const IconContext = createContext();

const IconContextProvider = ({ icon = {}, children }) => {
    const [score, setScore] = useState(0);

    const value = {
        icon,
        score,
        setScore,
    };

    return (
        <IconContext.Provider value={value} displayName="Icon useMemo Context">
            {children}
        </IconContext.Provider>
    );
};

export default IconContextProvider;

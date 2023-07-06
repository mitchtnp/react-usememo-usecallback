import { createContext, useState, useMemo } from "react";

export const IconContext = createContext();

const IconContextProvider = ({ icon = {}, children }) => {
    const [score, setScore] = useState(0);

    const value = useMemo(
        () => ({
            icon,
            score,
            setScore,
        }),
        [icon.id, score]
    ); // we don't need to watch `setScore`, since it won't change

    return (
        <IconContext.Provider value={value} displayName="Icon useMemo Context">
            {children}
        </IconContext.Provider>
    );
};

export default IconContextProvider;

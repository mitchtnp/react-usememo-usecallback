import styled from "styled-components";

const ThemeToggle = ({ children, onClick, isLightMode }) => {
    const lightMode = {
        backgroundColor: "white",
        color: "black",
    };

    const darkMode = {
        backgroundColor: "black",
        color: "white",
    };

    const styles = isLightMode ? lightMode : darkMode;

    return (
        <ThemeToggleStyled className="ThemeToggle" style={styles}>
            <button type="button" onClick={onClick}>
                Toggle Theme: {styles.backgroundColor}
            </button>
            {children}
        </ThemeToggleStyled>
    );
};

export default ThemeToggle;

const ThemeToggleStyled = styled.div`
    padding: 20px;
    border: solid 1px purple;

    text-align: center;

    button {
        display: inline-block;
        width: 200px;
        line-height: 50px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: teal;
        color: white;

        &:active, &:hover {
            background-color: #004444;
        }
    }
`;

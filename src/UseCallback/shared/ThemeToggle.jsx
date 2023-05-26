import styled from "styled-components";

const ThemeToggle = ({ children, onClick, colorMode }) => {
    const colorModes = {
        dark: {
            title: "Dark",
            backgroundColor: "#000",
            color: "#fff",
        },

        light: {
            title: "Light",
            backgroundColor: "#fff",
            color: "#000",
        },
    };

    const styles = colorModes[colorMode];

    return (
        <ThemeToggleStyled className="ThemeToggle" style={styles}>
            <button type="button" onClick={onClick}>
                Toggle Color Mode: {styles.title}
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
        width: 250px;
        line-height: 50px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: teal;
        color: white;

        &:active,
        &:hover {
            background-color: #004444;
        }
    }
`;

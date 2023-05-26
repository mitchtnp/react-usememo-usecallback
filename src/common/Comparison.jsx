import styled from "styled-components";

const Comparison = ({ children }) => {
    return (
        <ComparisonStyled className="Comparison">
            <h2>Comparison</h2>
            <div className="sideBySide">{children}</div>
        </ComparisonStyled>
    );
};

export default Comparison;

const ComparisonStyled = styled.div`
    .sideBySide {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > div {
            flex: 0 0 49%;
            border: solid 10px Teal;
            padding: 20px;
            background-color: white;
            margin: 0px 0px 20px;
        }
    }
`;

import styled from "styled-components";

const InputNumber = ({ value, onChange }) => {
    return (
        <InputNumberStyled className="InputNumber">
            <input
                type="number"
                value={value}
                onChange={onChange}
                min="1"
                max="6"
            />
        </InputNumberStyled>
    );
};

export default InputNumber;

const InputNumberStyled = styled.div`
    font-size: 30px;
    margin: 20px 0px 0px;

    input {
        padding: 5px 10px;
        display: block;
        width: 100%;
    }
`;

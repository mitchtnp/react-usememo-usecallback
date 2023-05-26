import styled from 'styled-components';

const Color = ({color}) => {
    return (
        <ColorStyled className='Color' color={color.color}>
            {color.color}
        </ColorStyled>
    );
}

export default Color;

const ColorStyled = styled.div`
    background-color: ${({color}) => color};

    width: 100px;
    line-height: 100px;
    margin: 20px;

`;
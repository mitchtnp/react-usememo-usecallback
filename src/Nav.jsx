import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <NavStyled className='Nav'>
            <NavLink to='/' end>useMemo</NavLink>
            <NavLink to='/usecallback'>useCallback</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    margin-bottom: 10px;
    a {
        display: inline-block;
        width: 150px;
        line-height: 50px;
        background-color: teal;
        color: white;
        margin: 5px;
        border-radius: 5px;
        text-decoration: none;
        text-align: center;
        font-size: 18px;

        &:hover {
            background-color: #004747;
        }
        &.active {
            background-color: maroon;
            &:hover {
                background-color: #370101;
            }
        }
    }
`;
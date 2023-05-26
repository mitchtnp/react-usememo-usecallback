import styled from "styled-components";

const UserNumberDisplay = ({ userNumber }) => {
    return (
        <UserNumberDisplayStyled className="UserNumberDisplay">
            <div>
                <b>Double User Number:</b>
            </div>
            <div>{userNumber}</div>
        </UserNumberDisplayStyled>
    );
};

export default UserNumberDisplay;

const UserNumberDisplayStyled = styled.div`
    margin: 50px 0px 0px;
    font-size: 20px;
    font-size: 50px;
`;

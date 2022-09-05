import styled from "styled-components";
import { Link } from "react-router-dom";
import { login, logout } from "../firebase";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e2d30;
  height: 65px;
  color: white;
  a {
    text-decoration: none;
    color: inherit;
    font-family: "Pacifico", cursize;
  }
  div:first-of-type {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;

    div {
      margin-left: 1rem;
    }
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

function Header({ user }) {
  return (
    <>
      <StyledHeader>
        <Link to="/Records">Record Crate</Link>

        <div>
          {user ? (
            <>
              <div>Welcome, {user.displayName}</div>
              <div onClick={logout}>Logout</div>
            </>
          ) : (
            <div onClick={login}>Login</div>
          )}
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;

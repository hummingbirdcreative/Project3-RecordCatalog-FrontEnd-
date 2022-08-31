import styled from 'styled-components';
import { Link } from "react-router-dom";
import { login, logout } from '../firebase';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 3rem;
    color: white;
    a {
      text-decoration: none;
      color: inherit;
    }
    div:first-of-type {
      display: flex;
      align-items: center;
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
          <Link to="/">
              Record Crate
          </Link>
        
    <div>
      {
        user ? <>
      <div>Welcome, {user.displayName}</div> 
      <div onClick={logout}>Log Out</div>
      <Link to="/records">
      <div>Records</div>
      </Link>
      </>
      :
      <div onClick={login}>Login</div>
      }
    </div>
    </StyledHeader>
    </>
  );
}

export default Header;
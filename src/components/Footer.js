import styled from "styled-components";

const StyledFooter = styled.footer`
  float: left;
  width: 100%;
  height: 70px;
  background-color: #2e2d30;

  div {
    float: left;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    height: 70px;
    line-height: 70px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;
    margin-left: 15px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;
function Footer(props) {
  return (
    <>
      <StyledFooter>
        <div>
          Copyright &copy; All Rights Reserved. 2022 Record Crate Catalog.
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;

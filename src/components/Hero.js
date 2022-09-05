import styled from "styled-components";

const StyledHeroHeader = styled.header`
  .header-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
    padding: 1em;
    box-sizing: border-box;
    color: white;
    background: url(https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjb3JkJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80)
      center center no-repeat;
    background-size: cover;
  }

  .hero-title {
    max-width: 16em;
    margin: 0;
    font-family: "Pacifico", cursize;
    letter-spacing: 8.5px;

    padding-top: 130px;
    font-size: 12vh;
    font-weight: bold;
    line-height: 0.9;
  }

  @media only screen and (min-width: 32em) {
    .hero-title {
      font-size: 16vh;
    }
  }
`;

function Hero(props) {
  return (
    <>
      <StyledHeroHeader>
        <section className="hero">
          <header className="hero-header">
            <h1 className="hero-title">Record Crate</h1>
          </header>
        </section>
      </StyledHeroHeader>
    </>
  );
}

export default Hero;

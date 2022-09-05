import { Helmet, HelmetProvider } from "react-helmet-async";

const Head = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title> {props.title} | Record Crate</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;

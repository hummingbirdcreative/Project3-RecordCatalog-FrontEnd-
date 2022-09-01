import { Helmet } from 'react-helmet';

const Head = (props) => {
    return (
        <Helmet>
          <title> {props.title}  | Record Crate</title>
        </Helmet>
    )
}

export default Head;
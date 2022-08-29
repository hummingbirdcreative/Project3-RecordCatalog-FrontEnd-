import { Helmet } from 'react-helmet';

const Head = (props) => {
    return (
        <Helmet>
          <title> {props.title}  | Record App</title>
        </Helmet>
    )
}

export default Head;
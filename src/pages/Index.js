import { Link } from "react-router-dom";

function Index(props) {

  const loaded = () => {
    return props.records.map(({ bandName, albumTitle, image, _id }) => {
      return (
        <div className="record" key={_id}>
          <Link to={`/records/${_id}`}>
          <h1>{albumTitle}</h1>
          </Link>
          <img src={image} alt={albumTitle} />
          <h3>{bandName}</h3>
        </div>
      )
    })
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };
    

return props.records ? loaded() : loading();
}

export default Index;
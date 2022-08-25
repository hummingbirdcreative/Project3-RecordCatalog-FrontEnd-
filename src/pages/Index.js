import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [ newForm, setNewForm ] = useState({
    albumTitle: "",
    bandName: "",
    image: "",
    vinylSize: "",
    description: ""
  });

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

const handleChange = event => {
  setNewForm((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
};

const handleSubmit = event => {
  event.preventDefault();
  //if(Object.values(newForm).length === 0) return; //if there are no values inside the newForm state object, terminate function execution
  props.createRecords(newForm)
};

return (
  <section>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={newForm.bandName}
      onChange={handleChange}
      name="bandName"
      placeholder="band name"
      />
      <input 
      type="text"
      value={newForm.albumTitle}
      onChange={handleChange}
      name="albumTitle"
      placeholder="album title"
      />
      <input 
      type="text"
      value={newForm.image}
      onChange={handleChange}
      name="image"
      placeholder="image url"
      />
       <input 
      type="text"
      value={newForm.vinylSize}
      onChange={handleChange}
      name="vinylSize"
      placeholder="7-inch, 10-inch, or 12-inch"
      />
      <input 
      type="text"
      value={newForm.description}
      onChange={handleChange}
      name="description"
      placeholder="any notes?"
      />
      <input type="submit" value="Add Record" />
    </form>
    {props.records ? loaded() : loading()}
  </section>
  )
}

export default Index;
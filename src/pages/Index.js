import Head from '../components/Head';
import styled from 'styled-components';
import StyledHeroHeader from '../components/Hero';
import { useState } from "react";
import { Link } from "react-router-dom";


const StyledCard = styled.section`
.card-container {
    float:left;
    width:100%;
    height:auto;
	background-color:#F4F4F4;
	margin-top:0px;

}
.record-card {
    float: left;
	  width:calc(100% / 4 - 30px);
    height:auto;
    line-height:auto;
    position: relative;
    padding: 0 !important;
    margin: 15px;
	box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
	background-color:#FFF;
}

.album-link {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;

    color: black;
    
}

.album-title {
    margin-bottom: 0px;
    margin-top: 0px;
}

.album-image {
    height: 250px;
    width: -webkit-fill-available;
	margin: 5%;
}

.band-name {
    margin-top: 0px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
}
`;

const StyledAddForm = styled.section`
  
  .addFormForm {
    display: flex;
    flex-direction: row;
    background-color: #facd34;
    padding: 15px 0;
    justify-content: center;
  }
input {
  margin:0 3px;
  border-radius: 5px;
  border-width: .5px;

}
  
`;



function Index({ records, createRecords }) {
  
  const [ newForm, setNewForm ] = useState({
    albumTitle: "",
    bandName: "",
    image: "",
    vinylSize: "",
    description: ""
  })

  const loaded = () => {
    
      return (
        <>
        <StyledCard>
        <div className="card-container">{
          records.map(({ bandName, albumTitle, image, _id }) => {
           return( <div className="record-card" key={_id}>
          <Link to={`/records/${_id}`}>
          <img className ="album-image" src={image} alt={albumTitle} />
          </Link>
          <Link className="album-link" to={`/records/${_id}`}>
          <h1 className="album-title">{albumTitle}</h1>
          </Link>
          <h3 className="band-name">{bandName}</h3>
        </div>
        
       
           )
          })
        }
        </div>
        </StyledCard>
        </>
      )
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
  createRecords(newForm)
};

return (
  <>
  <StyledHeroHeader />
    <Head title="Records List" />
  
  <StyledAddForm>
  <section className="addFormSection">
    <form className="addFormForm" onSubmit={handleSubmit}>
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
    {records ? loaded() : loading()}
  </section>
 </StyledAddForm>
  </>
  )
}

export default Index;
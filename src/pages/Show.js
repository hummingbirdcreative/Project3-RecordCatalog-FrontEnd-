import Head from "../components/Head";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledUpdateForm = styled.section`
  
  .updateFormForm {
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

const StyledShowRecord = styled.section`
 
  .record-image {
    margin-top: 30px;
  }

  .bandName {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0px;
  }

  .albumTitle {
    font-family: 'Raleway', sans-serif; 
    margin: 0px;
  }

  .description {
    font-family: 'Roboto', sans-serif;
    margin: 0px 0px 10px 0px;
  }

  .vinylSize {
    font-family: 'Roboto', sans-serif;
    margin: 0px;
  }
`;

const StyledButton = styled.section`
  button {
    margin: 3px 3px 30px 3px;
  }
  
`;

function Show({ records, deleteRecords, updateRecords }) {
  const [updateForm, setUpdateForm] = useState({
    image: "",
    bandName: "",
    albumTitle: "",
    vinylSize: "",
    description: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const record = records.find(p => p._id === id);
  //console.log(record);
  const handleDelete = () => {
     //delete the record
    deleteRecords(id);
    //navigate the user back to the index page
    //programmatic navigation
    navigate('/')
  }

  const goBack = () => {
    navigate(`/records`)
  }
  const handleChange = event => {
    setUpdateForm((prevState) => ({
      ...prevState, 
      [event.target.name]: event.target.value
    }));
  };

  const handleUpdate = event => {
    event.preventDefault();
    updateRecords(id, updateForm);
  };

  useEffect(() => {
    
    setUpdateForm(records)
  }, [records, record]);

    return (
      <>
        <Head title="Record Details" />
        <StyledShowRecord>
      <div className='show-record'>

        
        <img 
          className='record-image' 
          src={record.image} 
          alt={record.bandName}
        />
        <div className="showRecordInfo">
        <h1 className="bandName">{record.bandName}</h1>
        <h2 className="albumTitle">{record.albumTitle}</h2>
        <h6 className="vinylSize">{record.vinylSize}</h6>
        <h5 className="description">{record.description}</h5>
        
        
        </div>
        </div>
        </StyledShowRecord>

        <StyledButton>
        <div className="showPageButtons">
        <button onClick={handleDelete}>Delete This Record</button>
        <button onClick={goBack}>Go Back</button>
        </div>
        </StyledButton>

        <StyledUpdateForm>
        <form className="updateFormForm" onSubmit={handleUpdate}>
        <input
          type="text"
          defaultValue={updateForm.bandName}
          name="bandName"
          placeholder="band name"
          onChange={handleChange}
        />
        <input
          type="text"
          defaultValue={updateForm.albumTitle}
          name="albumTitle"
          placeholder="album title"
          onChange={handleChange}
        />  
        <input
          type="text"
          defaultValue={updateForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        /> 
        <input
          type="text"
          defaultValue={updateForm.vinylSize}
          name="vinylSize"
          placeholder="vinyl size"
          onChange={handleChange}
        />
        <input
          type="text"
          defaultValue={updateForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        /> 
        <input type="submit" value="Update Record" />
        </form>
        </StyledUpdateForm>
      
      </>
    );
  };
  
  export default Show;
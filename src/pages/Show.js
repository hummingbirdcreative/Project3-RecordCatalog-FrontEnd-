import Head from "../components/Head";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
      <div className='record'>
        <h1>{record.bandName}</h1>
        <h2>{record.albumTitle}</h2>
        <img 
          className='record-image' 
          src={record.image} 
          alt={record.bandName}
        />
        <button onClick={handleDelete}>Delete This Record</button>
        <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={updateForm.bandName}
          name="bandName"
          placeholder="band name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={updateForm.albumTitle}
          name="albumTitle"
          placeholder="album title"
          onChange={handleChange}
        />  
        <input
          type="text"
          value={updateForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        /> 
        <input
          type="text"
          value={updateForm.vinylSize}
          name="vinylSize"
          placeholder="vinyl size"
          onChange={handleChange}
        />
        <input
          type="text"
          value={updateForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        /> 
        <input type="submit" value="Update Record" />
        </form>
      </div>
      </>
    );
  };
  
  export default Show;
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Typography } from '@mui/material';
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ records, setRecords ] = useState(null);
  //const API_URL = "http://localhost:4000/api/records";
  const API_URL = "https://record-api-project3.herokuapp.com/api/records";

  const getRecords = async () => {
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      //TODO: add logic or task here for when something goes wrong 
    }
  };

  const createRecords = async (record) => { //{albumtitle: 'mary', bandName: 'scientist'...}
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        }, 
        body: JSON.stringify(record)
      });
      getRecords();//update our state with the updated array of objects
      //we're doing this after a new object is created
    } catch (error) {
      //TODO: add logic or task here for when something goes wrong
    }
  };

  const deleteRecords = async (id) => {
    try{
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      getRecords();
    };
  };

  const updateRecords = async (id, updatedRecord) => {
    try{
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT', 
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updatedRecord),
      });
      getRecords();
    } catch (error) {
      
    };
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <main>
      <div className="intro-container">
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Record Crate
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Really organize your music record collection and get your records into a virtual milk crate with options to add, update, and delete your albums.
          </Typography>
        </Container>
      </div>
      <Routes>
        <Route path="/" 
        element={<Index 
        records={records} 
        createRecords={createRecords}
        />} 
        />
        <Route path="/records/:id" 
        element={<Show 
        records={records}
        updateRecords={updateRecords} 
        deleteRecords={deleteRecords}
        />
        } 
        />
      </Routes>
    </main>
  );
}

export default Main;

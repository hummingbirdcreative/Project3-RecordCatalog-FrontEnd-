import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ records, setRecords ] = useState(null);
  const API_URL = "http://localhost:4000/api/records";

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

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index records={records} createRecords={createRecords}/>} />
        <Route path="/records/:id" element={<Show />} />
      </Routes>
    </main>
  );
}

export default Main;

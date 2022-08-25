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
      //TODO: add logic or task here
    }
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index records={records}/>} />
        <Route path="/records/:id" element={<Show />} />
      </Routes>
    </main>
  );
}

export default Main;

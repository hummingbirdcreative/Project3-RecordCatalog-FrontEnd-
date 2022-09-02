import { useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Home from "../pages/Home";

const PrivateRoute = ({ children , user }) => {
  if(user) {
    return children;
  } else {
    return <Navigate to="/" />
  }
}

function Main({ user }) {

  const getRecordsRef = useRef(null);

  const [ records, setRecords ] = useState(null);
  //const API_URL = "http://localhost:4000/api/records";
  const API_URL = "https://record-api-project3.herokuapp.com/api/records";

  const getRecords = async () => {
    try {
        const token = await user.getIdToken();
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        setRecords(data);
    } catch (error) {
        // TODO: add logic or task if something goes wrong
    }
};

  const createRecords = async (record) => { //{albumtitle: 'mary', bandName: 'scientist'...}
    try {
      const token = await user.getIdToken();
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
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
      const token = await user.getIdToken();
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE', 
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      getRecords();
    } catch (error) {
      
    };
  };

  const updateRecords = async (id, updatedRecord) => {
    try{
      const token = await user.getIdToken();
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT', 
        headers: {
          "Content-Type": "Application/json",
          "Authorization": 'Bearer ' + token
        },
        body: JSON.stringify(updatedRecord),
      });
      getRecords();
    } catch (error) {
      
    };
  };

  useEffect(() => {
    getRecordsRef.current = getRecords;
  });

  useEffect(() => {
    if(user) {
     getRecordsRef.current()
     //getRecords();
    } else {
      setRecords(null);
    }
    }, [ user ]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" 
        element={
        <PrivateRoute user={user}>
          <Index 
            records={records} 
            createRecords={createRecords}
        />
        </PrivateRoute>
        } 
        />
        <Route path="/records/:id" 
        element={
        <PrivateRoute user={user}>
          <Show user={user}
        records={records}
        updateRecords={updateRecords} 
        deleteRecords={deleteRecords}
        />
        </PrivateRoute>
        } 
        />
      </Routes>
    </main>
  );
}

export default Main;

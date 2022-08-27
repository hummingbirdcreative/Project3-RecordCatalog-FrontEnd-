import "./App.css";
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"

function App() {
  const [ userState, setUserState ] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setUserState(user));
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
};

export default App;

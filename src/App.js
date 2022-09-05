import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [userState, setUserState] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/records");
      } else {
        navigate("/");
      }
      setUserState(user);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header user={userState} />
      <Main user={userState} />
      <Footer />
    </div>
  );
}

export default App;

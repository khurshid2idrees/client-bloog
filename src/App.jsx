import "./App.css";
import { useState } from "react";
import axios from "axios";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import { createContext, useEffect } from "react";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:5000/")
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <userContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ParticipationHistory from "./pages/ParticipationHistory";
import ParticipationRecall from "./pages/ParticipationRecall";
import Playground from "./pages/Playground";
import About from "./pages/About";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  let usersWithCompositions = [];
  useEffect(() => {
    axios
    // if running locally change .get link to (api/projects)
    // before deploying change .get link to ("https://actionsequencerapi.onrender.com/api/projects")
      .get("https://actionsequencerapi.onrender.com/api/projects", { withCredentials: true } )
      .then((response) => {
        console.log("response.data", response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  for (let i = 0; i < users.length; i++) {
    if (users[i].compositions.length !== 0) {
      usersWithCompositions.push(users[i]);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home usersWithCompositions={usersWithCompositions} />}
        />
        <Route
          path="/participationHistory"
          element={
            <ParticipationHistory
              usersWithCompositions={usersWithCompositions}
            />
          }
        />
        <Route
          path="/participationHistory/:id"
          element={<ParticipationRecall users={users} />}
        />
        <Route path="/playground" element={<Playground />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

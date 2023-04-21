import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignupAndSave.css"

export default function SignupAndSave({ userNotes, userDrawingX, userDrawingY }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  console.log(userNotes, userDrawingX, userDrawingY)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      username,
      location,
      compositions: [
        {
          notes: userNotes,
          drawingX: userDrawingX,
          drawingY: userDrawingY
        }
      ]
    };
    axios
      .post("https://actionsequencerapi.onrender.com/api/auth/signupandsave", requestBody)
      .then((response) => {
        navigate("/participationHistory");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleUsername = (e) => setUsername(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocation}
          required
        />

        <button type="submit">Sign Up & Save Composition</button>
      </form>

      {errorMessage && <h5>{errorMessage}</h5>}
    </div>
  );
}

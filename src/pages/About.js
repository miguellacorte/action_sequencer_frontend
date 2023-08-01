import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p className="about-paragraph">
        The action sequencer was developed referencing John Cage’s 1958 concert
        for piano and orchestra. It is a music system aimed at exploring the
        possibilities of simple interactive music distribution through modern
        internet standards.
      </p>
      <img
        src="https://raw.githubusercontent.com/miguellacorte/action_sequencer_frontend/4cd414c3671badbc214062c40cf1a057ef95a5a3/public/cage1958.jpeg"
        alt="cage"
      />
      <p className="image-text">
          Score page from Concert for Piano and Orchestra (1958) by John Cage, Edition Peters 6705
          © CF PETERS Musikverlag Frankfurt Leipzig London New York
        </p>
      <h3>Technical framework</h3>
      <p className="about-paragraph">
        The project is built using{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        and{" "}
        <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">
          p5.js
        </a>{" "}
        for the frontend and{" "}
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          Node.js
        </a>{" "}
        and{" "}
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MongoDB
        </a>{" "}
        for the backend. The frontend uses several libraries such as{" "}
        <a
          href="https://reactrouter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </a>
        ,{" "}
        <a
          href="https://github.com/react-grid-layout/react-grid-layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Draggable
        </a>
        ,{" "}
        <a
          href="https://react-bootstrap.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Bootstrap
        </a>
        , and{" "}
        <a
          href="https://github.com/CookPete/react-player"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Player
        </a>
        , among others. The backend is built using{" "}
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Express.js
        </a>{" "}
        and{" "}
        <a
          href="https://mongoosejs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mongoose
        </a>
        .
        <br />
        <br />
        Behind the scenes, p5.js is used to create the grid and handle the user
        interactions with the interface.{" "}
        <a
          href="https://tonejs.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tone.js
        </a>{" "}
        is used to synthesize the sound samples, as well as to handle the
        sequencing of the composition. The backend server is responsible for
        storing and serving the saved compositions.
      </p>
      <h3>Licensing and references</h3>
      <p className="about-paragraph">
      This project has been entirely coded and designed by Miguel La Corte. 
      <br />
        This project is licensed under the{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT license
        </a>
        .
      </p>
    </div>
  );
}

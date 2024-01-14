import React from "react";
import ParticipationHistoryList from "../components/ParticipationHistoryList";
import Draggable from "react-draggable";
import "../styles/ParticipationHistory.css";

export default function ParticipationHistory({ usersWithCompositions }) {
  if (usersWithCompositions !== undefined) {
    return (
      <div>
        <h1
          style={{
            margin: "40px",
          }}
        >
          Participation History
        </h1>
        <Draggable handle="#handle">
          <div className="boxParticipationList">
            <fieldset
              id="handle"
              style={{
                fontSize: "13px",
                position: "relative",
                left: "-2px",
                color: "white",
                backgroundColor: "black",
                borderColor: "black",
                borderBlockHeight: "200px",
                borderStyle: "solid",
                borderWidth: "1px",
                padding: "3px",
                width: "262px",
              }}
            >
              Participation history List
            </fieldset>
            <div className="participation-list-container">
              <ParticipationHistoryList
                usersWithCompositions={usersWithCompositions}
              />
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

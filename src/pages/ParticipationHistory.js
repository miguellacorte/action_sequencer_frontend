import React from "react";
import ParticipationHistoryList from "../components/ParticipationHistoryList";
import "../styles/ParticipationList.css";

export default function ParticipationHistory({ usersWithCompositions }) {
  if (usersWithCompositions !== undefined) {
    return (
      <div className="participation-history">
        <h1>Participation History</h1>
        <div className="participation-list-container">
          <ParticipationHistoryList
            usersWithCompositions={usersWithCompositions}
          />
        </div>
      </div>
    );
  }
  return null;
}

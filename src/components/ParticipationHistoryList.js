import React from "react";
import { Link } from "react-router-dom";
import "../styles/ParticipationList.css";

export default function ParticipationHistoryList({ usersWithCompositions }) {
  if (!usersWithCompositions || usersWithCompositions.length === 0) {
    return <div>No participation history found.</div>;
  }

  return (
    <div>
      {usersWithCompositions.map((user) => {
        return (
          <div key={user._id} className="biglist participation-list-item">
            <Link to={`/participationHistory/${user._id}`}>
              <div className="participation-list-item-name">{user.username}</div>
            </Link>
            <div className="participation-list-item-location">{user.location}</div>
            <div className="participation-list-item-time">{user.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}
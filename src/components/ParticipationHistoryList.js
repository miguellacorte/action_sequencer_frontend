import React from "react";
import { Link } from "react-router-dom";
import "../styles/ParticipationList.css";

export default function ParticipationHistoryList({ usersWithCompositions }) {
  if (!usersWithCompositions || usersWithCompositions.length === 0) {
    return <div>No participation history found.</div>;
  }

  // Sort usersWithCompositions by createdAt in descending order
  const sortedUsers = usersWithCompositions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      {sortedUsers.map((user) => (
        <div key={user._id} className="participation-item">
          <Link to={`/participationHistory/${user._id}`}>
            <div className="participation-item-name">{user.username}</div>
          </Link>
          <div className="participation-item-location">{user.location}</div>
          <div className="participation-item-time">{user.createdAt}</div>
        </div>
      ))}
    </>
  );
}
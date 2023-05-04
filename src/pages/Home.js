import React, { useState, useEffect } from "react";
import SmallParticipationList from "../components/SmallParticipationList";
import { Link } from "react-router-dom";
import CompositionRecall from "../components/CompositionRecall";
import "../styles/Home.css";

export default function Home({ usersWithCompositions }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (usersWithCompositions.length !== 0) {
    const totalUsers = usersWithCompositions.length;
    const lastUser = usersWithCompositions[totalUsers - 1];
    const lastUserCompositions = lastUser.compositions;
    const LastUserCompositionNumber = lastUserCompositions.length;
    const user = lastUserCompositions[LastUserCompositionNumber - 1];

    return (
      <div>
        {isMobile && (
          <div className="mobilePopup">
            <div className="mobilePopupText">
              <p>
                This website has been optimized for desktop. Please visit us on
                a computer for the best experience.
              </p>
            </div>
          </div>
        )}

        <div className="navbar">
          <div className="navbarBrand">
            <h1>Participation Art</h1>
          </div>

          <div className="navbarLinks">
            <Link to="/participationHistory" className="navbarLink">
              Participation history
            </Link>
            <Link to="/playground" className="navbarLink">
              Create your own participation
            </Link>
          </div>
        </div>

        <div className="homeContent">
          <div className="participationList">
            <fieldset className="participationListTitle">
              Participation history List
            </fieldset>

            <SmallParticipationList
              usersWithCompositions={usersWithCompositions}
            />

            <Link to="/participationHistory" className="viewParticipationLink">
              View complete participation history List
            </Link>
          </div>

          <div className="compositionRecall">
            <fieldset className="compositionRecallTitle">
              Last user participation:
            </fieldset>

            <CompositionRecall
              drawingX={user.drawingX}
              drawingY={user.drawingY}
              notes={user.notes}
            />

            <Link to="/playground" className="createParticipationLink">
              Create your own participation
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
import React, { useState, useEffect } from "react";
import SmallParticipationList from "../components/SmallParticipationList";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import "../styles/Btns.css";
import CompositionRecall from "../components/CompositionRecall";
import "../styles/Home.css";

export default function Home({ usersWithCompositions }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMobilePopup, setShowMobilePopup] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(usersWithCompositions);
  if (usersWithCompositions.length !== 0) {
    let totalUsers = usersWithCompositions.length;
    let lastUser = usersWithCompositions[totalUsers - 1];
    let lastUserCompositions = lastUser.compositions;
    let LastUserCompositionNumber = lastUserCompositions.length;
    let user = lastUserCompositions[LastUserCompositionNumber - 1];

    return (
      <div>
        {isMobile && showMobilePopup && (
          <div className="mobilePopup">
            <div className="mobilePopupText">
              <p>
                This website has been optimized for desktop. Please visit us on
                a computer for the best experience.
              </p>
              <button onClick={() => setShowMobilePopup(false)}>Close</button>
            </div>
          </div>
        )}

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
              Recent Participations
            </fieldset>
            <SmallParticipationList
              usersWithCompositions={usersWithCompositions}
            />
            <Link
              to="/participationHistory"
              style={{
                fontSize: "10.5px",
                position: "relative",
                color: "black",
                padding: "0px",
                width: "270px",
              }}
            >
              See complete participation history List ⬈
            </Link>
          </div>
        </Draggable>

        <div>
          <Draggable handle="#handle">
            <div className="compositionRecallHome">
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
                  width: "65.5vw",
                }}
              >
                Last user participation:
              </fieldset>

              <CompositionRecall
                drawingX={user.drawingX}
                drawingY={user.drawingY}
                notes={user.notes}
              />
              <Link to="/playground" className="saveCompositionBtnHome">
                <button>create your own participation</button>
              </Link>
            </div>
          </Draggable>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

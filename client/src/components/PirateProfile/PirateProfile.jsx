import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PirateProfile.css";

const PirateProfile = () => {
  const { id } = useParams();
  const [pirateProfile, setPirateProfile] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pirate/${id}`)
      .then((res) => setPirateProfile(res.data))
      .catch((res) => console.log(res));
  }, []);

  const infoChange = (fieldName, value) => {
    if (pirateProfile.fieldName === value) return;
    axios
      .patch(`http://localhost:8000/api/pirate/${id}`, {
        [fieldName]: value,
      })
      .then((res) => {
        setPirateProfile({ ...pirateProfile, [fieldName]: value });
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="piratesContainer">
      <div className="cardHeader">{pirateProfile.pirateName}</div>
      <div className="cardBody">
        <div className="leftSide">
          <img src={pirateProfile.imgUrl} width="300" height="200" />
          <h2>"{pirateProfile.pirateinfo}"</h2>
        </div>
        <div className="rightSide">
          <p>About</p>
          <p>Postion: {pirateProfile.crewPositon}</p>
          <p>Treasures: {pirateProfile.treasureChests}</p>
          <p>
            Peg Leg:{" "}
            <span
              style={{
                background: pirateProfile.pegLeg ? "transparent" : "red",
                cursor: "pointer",
              }}
              onClick={() => infoChange("pegLeg", false)}
            >
              No
            </span>
            <span
              style={{
                background: !pirateProfile.pegLeg ? "transparent" : "green",
                cursor: "pointer",
              }}
              onClick={() => infoChange("pegLeg", true)}
            >
              Yes
            </span>
          </p>
          <p>
            Eye patch:{" "}
            <span
              style={{
                background: pirateProfile.eyePovk ? "transparent" : "red",
                cursor: "pointer",
              }}
              onClick={() => infoChange("eyePovk", false)}
            >
              No
            </span>
            <span
              style={{
                background: !pirateProfile.eyePovk ? "transparent" : "green",
                cursor: "pointer",
              }}
              onClick={() => infoChange("eyePovk", true)}
            >
              Yes
            </span>
          </p>
          <p>
            Hook Hand:{" "}
            <span
              style={{
                background: pirateProfile.hookHand ? "transparent" : "red",
                cursor: "pointer",
              }}
              onClick={() => infoChange("hookHand", false)}
            >
              No
            </span>
            <span
              style={{
                background: !pirateProfile.hookHand ? "transparent" : "green",
                cursor: "pointer",
              }}
              onClick={() => infoChange("hookHand", true)}
            >
              Yes
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PirateProfile;

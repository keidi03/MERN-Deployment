import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormError from "./FormError";
import "./PirateForm.css";

const PirateForm = () => {
  const navigate = useNavigate();
  const [pirateName, setpirateName] = useState("");
  const [imgUrl, setImgurl] = useState("");
  const [treasureChests, setTreasureChests] = useState();
  const [pirateinfo, setPirateinfo] = useState("");
  const [crewPositon, setCrewPositon] = useState("");
  const [pegLeg, setPegLeg] = useState(false);
  const [eyePovk, setEyePovk] = useState(false);
  const [hookHand, setHookHand] = useState(false);
  const [validation, setValidation] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pirate/addnew", {
        pirateName,
        imgUrl,
        treasureChests,
        pirateinfo,
        crewPositon,
        pegLeg,
        eyePovk,
        hookHand,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        navigate("/pirates");
      })
      .catch((err) => setValidation(err.response.data.errors));
  };

  return (
    <div className="piratesContainer">
      <div className="cardHeader">
        <p>Add Pirate</p>
        <button onClick={() => navigate("/pirates")} className={"bluebtn"}>
          Crew Board
        </button>
      </div>
      <div className="cardBody d-flex">
        <form onSubmit={onSubmitHandler} className="form">
          <div className="leftform d-flex">
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <label>Pirate Name</label>
              <br />
              <input
                type="text"
                onChange={(e) => setpirateName(e.target.value)}
              />
              <FormError
                {...{ errorMessage: validation, name: "pirateName" }}
              />
            </p>
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <label>Image Url</label>
              <br />
              <input type="text" onChange={(e) => setImgurl(e.target.value)} />
              <FormError {...{ errorMessage: validation, name: "imgUrl" }} />
            </p>
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <label># of Treasuire Chests:</label>
              <br />
              <input
                type="number"
                onChange={(e) => setTreasureChests(e.target.value)}
              />
              <FormError
                {...{ errorMessage: validation, name: "treasureChests" }}
              />
            </p>
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <label>Pirate Catch Phrase</label>
              <br />
              <input
                type="text"
                onChange={(e) => setPirateinfo(e.target.value)}
              />
              <FormError
                {...{ errorMessage: validation, name: "pirateinfo" }}
              />
            </p>
          </div>
          <div className="rightform d-flex">
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <label>Crew Position</label> <br />
              <select
                onChange={(e) => setCrewPositon(e.target.value)}
                defaultValue={undefined}
              >
                <option value="" default>
                  Choose Crew Postion
                </option>
                <option value="Capitan">Capitan</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
              </select>
              <FormError
                {...{ errorMessage: validation, name: "crewPositon" }}
              />
            </p>

            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <input type="checkbox" onChange={(e) => setPegLeg(!pegLeg)} />
              Peg Leg
            </p>
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <input type="checkbox" onChange={(e) => setEyePovk(!eyePovk)} />
              Eye Patch
            </p>
            <p style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <input type="checkbox" onChange={(e) => setHookHand(!hookHand)} />
              Hook hand
            </p>
            <button type="submit" className="bluebtn">
              Add pirate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PirateForm;

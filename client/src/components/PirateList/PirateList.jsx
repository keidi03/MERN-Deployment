import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PirateList.css";
import { useNavigate } from "react-router-dom";

const PirateList = (props) => {
  const navigate = useNavigate();
  const [pirates, setPirates] = useState([]);
  console.log("🚀 ~ file: PirateList.jsx:6 ~ PirateList ~ people:", pirates);

  const addPirate = () => {
    navigate("/pirate/new");
  };

  const viewProfile = (id) => {
    navigate(`/pirate/${id}`);
  };

  const deleteProfile = (id) => {
    axios
      .delete(`http://localhost:8000/api/pirate/${id}`)
      .then((res) =>
        setPirates((prev) => prev.filter((pirate) => pirate._id !== id))
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profile")
      .then((res) => {
        setPirates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="piratesContainer">
      <div className="cardHeader a-items">
        <p>Pirate Crew</p>
        <button className="bluebtn" onClick={addPirate}>
          Add Pirate
        </button>
      </div>
      <div className="cardBody sp-around a-items">
        {pirates.map((pirate, index) => {
          return (
            <div key={index} className="pirateWrapper sp-around a-items">
              <div className="profilePhoto">
                <img src={pirate.imgUrl} width="250" height="150" />
              </div>
              <div className="pirateInfo">
                <span>{pirate.pirateName}</span>
                <div>
                  <button
                    className="bluebtn sp-around sp-bt"
                    onClick={(e) => viewProfile(pirate._id)}
                  >
                    View Pirate
                  </button>
                  <button
                    className="redbtn sp-around"
                    onClick={() => deleteProfile(pirate._id)}
                  >
                    Walk the Plank
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PirateList;

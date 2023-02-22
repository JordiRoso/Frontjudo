import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ResultsService } from "../../_services/ResultsService";

import "./Judo.scss";

function Judo({ competition }) {
  const navigate = useNavigate();

  const handleDetailCompetition = async () => {
   
    navigate(`/detail/${competition._id}`);
    console.log("Datos de la competición: ", competition);
    
  };

  // const selectCompetition = (competition) => {
  //   navigate(`/detail/${competition._id}`);
//  };

  return (
    <div className="">
      <div className="card text-start movie-card" style={{ width: "13rem" }}>
        <div className="poster-container">
          <div className="vote-average vote-average--movie">
            {competition.name}
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
            {competition.gender}
          </h5>
          <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
            {competition.year}
          </h5>
          <button className="button" onClick={handleDetailCompetition}>
            Resultados
          </button>
          
        </div>
      </div>
    </div>
  );
}




export default Judo;

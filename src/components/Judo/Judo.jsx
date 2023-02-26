import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsService } from "../../_services/ResultsService";
import JudoFilter from "../../components/JudoFilter/JudoFilter";

import "./Judo.scss";

function Judo({ competition, filter }) {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleDetailCompetition = async () => {
    navigate(`/detail/${competition._id}`);
    console.log("Datos de la competición: ", competition);
  };

  useEffect(() => {
    // const token = sessionStorage.getItem("auth-token");
    // console.log(token);
    // if (!token) {
    //   navigate(`/login`);
    // } else {
    async function getAllResults() {
      const data = await ResultsService.getAllResults();
      setResults(data.results);
    }
    getAllResults();
    // }
  }, []);

  // Aplicar el filtro a los resultados
  const filteredResults = results.filter((result) => {
    if (filter.gender && filter.gender !== result.gender) {
      return false;
    }
    if (filter.category && filter.category !== result.category) {
      return false;
    }
    if (filter.year && filter.year !== result.year) {
      return false;
    }
    return true;
  });

  return (
    <div>
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
            {competition.category}
          </h5>
          <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
            {competition.year}
          </h5>
          <button className="button" onClick={handleDetailCompetition}>
            Resultados
          </button>
        </div>
      </div>

      {isFiltering &&
        filteredResults.map((result) => (
          <div key={result._id}>
            <p>{result.name}</p>
            <p>{result.gender}</p>
            <p>{result.year}</p>
          </div>
        ))}
    </div>
  );
}

export default Judo;

import React, { useEffect, useState } from "react";
import { ResultsService } from "../../_services/ResultsService";
import "./JudoList.scss";
import Judo from "../../components/Judo/Judo";
import JudoFilter from "../../components/JudoFilter/JudoFilter";
import { useNavigate } from "react-router-dom";

export default function JudoList() {
  const [competitions, setCompetitions] = useState([]);
  const [filter, setFilter] = useState({ gender: "", category: "", year: "" }); // inicializar estado del filtro
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    console.log(token);
    if (!token) {
      navigate(`/login`);
    } else {
    getAllCompetitions();
    }
  }, [filter]); // actualizar la lista de competiciones cada vez que cambie el filtro

  const getAllCompetitions = async () => {
    try {
      const res = await ResultsService.getAllCompetitions();
      let filteredCompetitions = res.data;

      // aplicar el filtro a la lista de competiciones si se ha seleccionado alguna opción en el filtro
      if (filter.gender !== "") {
        filteredCompetitions = filteredCompetitions.filter(
          (competition) => competition.gender === filter.gender
        );
      }
      if (filter.category !== "") {
        filteredCompetitions = filteredCompetitions.filter(
          (competition) => competition.category === filter.category
        );
      }
      if (filter.year !== "") {
        filteredCompetitions = filteredCompetitions.filter(
          (competition) => competition.year === filter.year
        );
      }

      setCompetitions(filteredCompetitions);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <div className="competition-list">
      <div className="title-container text-center">
        <h1>Resultados</h1>
      </div>
      <div className="filter-container text-center">
        <JudoFilter
          genderOptions={["male", "female"]}
          categoryOptions={["senior", "junior"]}
          yearOptions={["2021", "2022"]}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div
        className="container pt-5 pb-5 competitions-container"
        style={{ overflow: "auto" }}
      >
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {competitions.map((competition) => (
            <Judo
              key={competition._id}
              competition={competition}
              filter={filter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



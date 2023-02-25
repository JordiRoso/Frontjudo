// import React from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import { ResultsService } from "../../_services/ResultsService";

// import "./Judo.scss";

// function Judo({ competition }) {
//   const navigate = useNavigate();

//   const handleDetailCompetition = async () => {
   
//     navigate(`/detail/${competition._id}`);
//     console.log("Datos de la competición: ", competition);
    
//   };

//   // const selectCompetition = (competition) => {
//   //   navigate(`/detail/${competition._id}`);
// //  };

//   return (
//     <div className="">
//       <div className="card text-start movie-card" style={{ width: "13rem" }}>
//         <div className="poster-container">
//           <div className="vote-average vote-average--movie">
//             {competition.name}
//           </div>
//         </div>

//         <div className="card-body">
//           <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
//             {competition.gender}
//           </h5>
//           <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
//             {competition.year}
//           </h5>
//           <button className="button" onClick={handleDetailCompetition}>
//             Resultados
//           </button>
          
//         </div>
//       </div>
//     </div>
//   );
// }




// export default Judo;



import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ResultsService } from "../../_services/ResultsService";
import JudoFilter from "../JudoFilter/JudoFilter";
import "./Judo.scss";

function Judo({ competition }) {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState({});
  const [isFiltering, setIsFiltering] = useState(false);

  const handleDetailCompetition = async () => {
    navigate(`/detail/${competition._id}`);
    console.log("Datos de la competición: ", competition);
  };

  useEffect(() => {
    async function fetchResults() {
      const data = await ResultsService.getAllResults();
      setResults(data);
    }
    fetchResults();
  }, []);

  // Manejar cambios en el filtro
  const handleFilterChange = (newFilter) => {
    setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

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

  // return (
  //   <div className="">
  //     {/* Renderizar el componente JudoFilter y pasarle los valores necesarios */}
  //     <JudoFilter
  //       genderOptions={["Male", "Female"]}
  //       categoryOptions={["junior", "senior"]}
  //       yearOptions={["2020", "2021", "2022"]}
  //       onFilterChange={handleFilterChange}
  //       onSearch={() => setIsFiltering(true)}
  //     />

  //     <div className="card text-start movie-card" style={{ width: "13rem" }}>
  //       <div className="poster-container">
  //         <div className="vote-average vote-average--movie">
  //           {competition.name}
  //         </div>
  //       </div>

  //       <div className="card-body">
  //         <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
  //           {competition.gender}
  //         </h5>
  //         <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
  //           {competition.category}
  //         </h5>
  //         <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
  //           {competition.year}
  //         </h5>
  //         <button className="button" onClick={handleDetailCompetition}>
  //           Resultados
  //         </button>
  //       </div>
  //     </div>
      
  //     {/* Renderizar los resultados filtrados solo si se está aplicando el filtro */}
  //     {isFiltering &&
  //       filteredResults.map((result) => (
  //         <div key={result._id}>
  //           <p>{result.name}</p>
  //           <p>{result.gender}</p>
  //           <p>{result.year}</p>
  //         </div>
  //       ))}
  //   </div>
  // );
  return (
    <div>
      {/* Renderizar el componente JudoFilter y pasarle los valores necesarios */}
      {/* <JudoFilter
        genderOptions={["Male", "Female"]}
        categoryOptions={["junior", "senior"]}
        yearOptions={["2020", "2021", "2022"]}
        onFilterChange={handleFilterChange}
        onSearch={() => setIsFiltering(true)}
      /> */}
  
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
  
      {/* Renderizar los resultados filtrados solo si se está aplicando el filtro */}
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

Judo.propTypes = {
  competition: PropTypes.object.isRequired,
};



export default Judo;

// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { ResultsService } from "../../_services/ResultsService";

function JudoListas() {
  const [competition, setCompetitions] = useState({});
  const { id } = useParams();

  useEffect(() => {
    searchCompetition();
  }, []);

  const searchCompetition = async () => {
    try {
      const res = await ResultsService.searchCompetition(competition);
      console.log(res.data);
      setCompetitions(() => res.data);
      console.log(res)
      console.log(results);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <div className="competition-list">
      <h1>Lista de Resultados</h1>
      <h2>{competition?.data?.name}</h2>
      {competition?.data?.results.map((result, index) => (
        <div key={result._id}>
          {/* <p>Peso: {result.weight}</p>
          <p>Posición: {result.position}</p>
          <p>Nombre: {result.name}</p> */}
          <div>
      <ol class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Peso: {result.weight} Posición: {result.position}</div>
       
       Nombre: {result.name}   /Club: {result.club}
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  {/* <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{result.weight}</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li> */}
</ol>

      </div>
        </div>
        
      ))}
      
    </div>
    
    
  );
  

  
}

export default JudoListas;




// function JudoListas({ results }) {
//   return (
//     <div className="competition-list">
//       <h1>Lista de Resultados</h1>
//       {results.map((result, index) => (
//         <div key={result._id}>
//           <p>Peso: {result.weight}</p>
//           <p>Posición: {result.position}</p>
//           <p>Nombre: {result.name}</p>
//           <p>Nombre: {result.location}</p>
//           <p>Nombre: {result.year}</p>

//         </div>
//       ))}
//       <h1>otra</h1>
//       {results?.results?.map((result, index) => (
//         <div key={result._id}>
//           <p>Peso: {result.weight}</p>
//           <p>Posición: {result.location}</p>
//           <p>Nombre: {result.name}</p>
//           <p>Nombre: {result.location}</p>
//           <p>Nombre: {result.year}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// function JudoListas({ results }) {
//   const listItems = results.map((result, index) => (
//     <div key={index}>
//       <p>Peso: {result.weight}</p>
//       <p>Posición: {result.position}</p>
//       <p>Nombre: {result.name}</p>
//     </div>
//   ));

//   return (
//     <div className="competition-list">
//       <h1>Lista de Resultados</h1>
//       {listItems}
//     </div>
//   );
// }

// export default JudoListas;





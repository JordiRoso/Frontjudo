// // import React, { useEffect, useState } from "react";
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";

// import { ResultsService } from "../../_services/ResultsService";

// function JudoListas() {
//   const [competition, setCompetitions] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     searchCompetition();
//   }, []);

//   const searchCompetition = async () => {
//     try {
//       const res = await ResultsService.searchCompetition(competition);
//       console.log(res.data);
//       setCompetitions(() => res.data);
//       console.log(res);
//       console.log(results);
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };

//   const handleUpdateResult = async (resultId) => {
//     try {
//       // Llamar al servicio de ResultsService para actualizar el resultado
//       const updatedResult = await ResultsService.updateResult(
//         resultId /* nuevos datos del resultado */
//       );
//       console.log(updatedResult);
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };

//   return (
//     <div className="competition-list">
//       <h1>Lista de Resultados nnnn</h1>
//       <h2>{competition?.data?.name}</h2>
//       {/* {competition?.data?.results.map((result, index) => (
//         <div key={result._id}>
          
//           <div>
//             <ol class="list-group">
//               <li class="list-group-item d-flex justify-content-between align-items-start">
//                 <div class="ms-2 me-auto">
//                   <div class="fw-bold">
//                     Peso: {result.weight} Posición: {result.position}
//                   </div>
//                   Nombre: {result.name} /Club: {result.club}
//                 </div>
//                 <span class="badge bg-primary rounded-pill">14</span>
//               </li>
//             </ol>
//           </div>
//         </div>
//       ))} */}
//       {competition?.data?.results.map((result, index) => (
//         <div key={result._id}>
//           <div>
//             <ol class="list-group">
//               <li class="list-group-item d-flex justify-content-between align-items-start">
//                 <div class="ms-2 me-auto">
//                   <div class="fw-bold">
//                     Peso: {result.weight} Posición: {result.position}
//                   </div>
//                   Nombre: {result.name} /Club: {result.club}
//                 </div>
//                 <div>
//                   <button
//                     type="button"
//                     class="btn btn-success"
//                     onClick={() => handleUpdateResult(result._id)}
//                   >
//                     Actualizar
//                   </button>
//                 </div>
//               </li>
//             </ol>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default JudoListas;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import JudoFilter from "../JudoFilter/JudoFilter";
// import { ResultsService } from "../../_services/ResultsService";

// function JudoListas() {
//   const [competition, setCompetitions] = useState({});
//   const [filter, setFilter] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     searchCompetition();
//   }, [filter]);

//   const searchCompetition = async () => {
//     try {
//       const res = await ResultsService.searchCompetition({
//         ...competition,
//         ...filter,
//       });
//       setCompetitions(() => res.data);
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };

//   const handleFilterChange = (newFilter) => {
//     setFilter((prevFilter) => ({
//       ...prevFilter,
//       ...newFilter,
//     }));
//   };

//   return (
//     <div className="competition-list">
//       <h1>Lista de Resultados</h1>
//       <JudoFilter
//         genderOptions={["Male", "Female"]}
//         categoryOptions={["Cadet", "Junior", "Senior"]}
//         yearOptions={["2021", "2022", "2023"]}
//         onFilterChange={handleFilterChange}
//       />
//       <h2>{competition?.data?.name}</h2>
//       {competition?.data?.results.map((result, index) => (
//         <div key={result._id}>
//           <div>
//             <ol class="list-group">
//               <li class="list-group-item d-flex justify-content-between align-items-start">
//                 <div class="ms-2 me-auto">
//                   <div class="fw-bold">
//                     Peso: {result.weight} Posición: {result.position}
//                   </div>
//                   Nombre: {result.name} /Club: {result.club}
//                 </div>
//                 <span class="badge bg-primary rounded-pill">14</span>
//               </li>
//             </ol>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default JudoListas;

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";

// import { ResultsService } from "../../_services/ResultsService";

// function JudoDetail() {
//   const [competition, setCompetitions] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     getSingleCompe();
//   }, []);

//   const getSingleCompe = async () => {
//     try {
//       const res = await ResultsService.getSingleCompe(id);
//       console.log(res.data);
//       setCompetitions(() => res.data);
//       console.log(res);
//       console.log(competition);
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };

//   return (
//     <div className="competition-list">
//       <h1>Lista de Resultadosnnnnnnn</h1>
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

// export default JudoDetail;


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { ResultsService } from "../../_services/ResultsService";
import EditResultModal from "../../components/EditResultModal/EditResultModal";

function JudoDetail() {
  const [competition, setCompetition] = useState({});
  const { id } = useParams();
  const [resultToUpdate, setResultToUpdate] = useState(null);

  useEffect(() => {
    getSingleCompe();
  }, []);

  const getSingleCompe = async () => {
    try {
      const res = await ResultsService.getSingleCompe(id);
      console.log(res.data);
      setCompetition(res.data);
      console.log(res);
      console.log(competition);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleUpdateResults = async (resultId, updatedResultData) => {
    try {
      const res = await ResultsService.updateResult(resultId, updatedResultData);
      console.log(res);
      if (res.data) {
        // Recargar la competición para mostrar los resultados actualizados
        getSingleCompe();
        // Cerrar el modal
        setResultToUpdate(null);
      }
    } catch (error) {
      console.log(error.message || error);
    }
  };
  

  return (
    <div className="competition-list">
      <h1>Lista de Resultadosssssss</h1>
      <h2>{competition?.data?.name}</h2>
      {competition?.data?.results.map((result, index) => (
        <div key={result._id}>
          <div>
            <ol className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    Peso: {result.weight} Posición: {result.position}
                  </div>
                  Nombre: {result.name} /Club: {result.club}
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      console.log("Clicked update button");
                      console.log(result);
                      setResultToUpdate(result)}}
                    
                  >
                    Actualizar
                  </button>
                </div>
              </li>
            </ol>
          </div>
        </div>
      ))}
     {resultToUpdate !== null && (
        <EditResultModal
          result={resultToUpdate}
          handleUpdateResults={handleUpdateResults}
        />
      )}
    </div>
  );
}

export default JudoDetail;



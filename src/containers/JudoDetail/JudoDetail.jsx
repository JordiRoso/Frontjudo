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

export default JudoDetail;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { ResultsService } from "../../_services/ResultsService";
import { Modal, Button, Form } from "react-bootstrap";

function JudoDetail() {
  const [competition, setCompetitions] = useState({});
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [newResult, setNewResult] = useState({
    weight: "",
    position: "",
    name: "",
    club: "",
  });

  useEffect(() => {
    getSingleCompe();
  }, []);

  const getSingleCompe = async () => {
    try {
      const res = await ResultsService.getSingleCompe(id);
      console.log(res.data);
      setCompetitions(() => res.data);
      console.log(res);
      console.log(competition);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleNewResult = async () => {
    try {
      const res = await ResultsService.updateCompetition(id, newResult);
      console.log(res.data);
      setCompetitions((prev) => {
        return {
          ...prev,
          data: {
            ...prev.data,
            results: [...prev.data.results, newResult],
          },
        };
      });
      handleCloseModal();
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
          <div>
            <ol className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    Peso: {result.weight} Posición: {result.position}
                  </div>
                  Nombre: {result.name} /Club: {result.club}
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
              </li>
            </ol>
          </div>
        </div>
      ))}
      <div className="admin-buttons">
        <button onClick={handleShowModal} className="update-user">
          Actualizar
        </button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="weight">
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el peso"
                value={newResult.weight}
                onChange={(e) =>
                  setNewResult({ ...newResult, weight: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="position">
              <Form.Label>Posición</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la posición"
                value={newResult.position}
                onChange={(e) =>
                  setNewResult({ ...newResult, position: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                value={newResult.name}
                onChange={(e) =>
                  setNewResult({ ...newResult, name: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleNewResult}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";

// import { ResultsService } from "../../_services/ResultsService";
// import { Modal, Button, Form } from "react-bootstrap";

// function JudoDetail() {
//   const [competition, setCompetitions] = useState({});
//   const { id } = useParams();
//   const [showModal, setShowModal] = useState(false);
//   const [newResult, setNewResult] = useState({
//     weight: "",
//     position: "",
//     name: "",
//     club: "",
//   });

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

//   const handleCloseModal = () => setShowModal(false);
//   const handleShowModal = () => setShowModal(true);

//   const handleNewResult = async () => {
//     try {
//       const res = await ResultsService.updateCompetition(id, newResult);
//       console.log(res.data);
//       setCompetitions((prev) => {
//         return {
//           ...prev,
//           data: {
//             ...prev.data,
//             results: [...prev.data.results, newResult],
//           },
//         };
//       });
//       handleCloseModal();
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };

//   const handleUpdateResult = async (index) => {
//     try {
//       const res = await ResultsService.updateResult(competition.data.results[index]._id, newResult);
//       console.log(res.data);
//       setCompetitions((prev) => {
//         const newResults = [...prev.data.results];
//         newResults[index] = newResult;
//         return {
//           ...prev,
//           data: {
//             ...prev.data,
//             results: newResults,
//           },
//         };
//       });
//       handleCloseModal();
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };

//   const handleEditResult = (index) => {
//     setNewResult(competition.data.results[index]);
//     handleShowModal();
//   };

//   return (
//     <div className="competition-list">
//       <h1>Lista de Resultados</h1>
//       <h2>{competition?.data?.name}</h2>
//       {competition?.data?.results.map((result, index) => (
//         <div key={result._id}>
//           <div>
//             <ol className="list-group">
//               <li className="list-group-item d-flex justify-content-between align-items-start">
//                 <div className="ms-2 me-auto">
//                   <div className="fw-bold">
//                     Peso: {result.weight} Posición: {result.position}
//                   </div>
//                   Nombre: {result.name} /Club: {result.club}
//                 </div>
//                 <span>
//                   <button onClick={() => handleEditResult(index)}>Editar</button>
//                 </span>
//               </li>
//             </ol>
//           </div>
//         </div>
//       ))}
//       <div className="admin-buttons">
//         <button onClick={handleShowModal} className="add-result">
//           Agregar Resultado
//         </button>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{newResult

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { ResultsService } from "../../_services/ResultsService";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function JudoDetail() {
  const [competition, setCompetitions] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [newResult, setNewResult] = useState({
    weight: "",
    position: "",
    name: "",
    club: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    console.log(token);
    if (!token) {
      navigate(`/login`);
    } else {
      getSingleCompe();
    }
  }, []);

  // const getSingleCompe = async () => {
  //   try {
  //     setLoading(true); // activar el indicador de carga
  //     const res = await ResultsService.getSingleCompe(id);
  //     console.log(res.data);
  //     setCompetitions(() => res.data);
  //     console.log(res);
  //     console.log(competition);
  //     setLoading(false); // desactivar el indicador de carga después de cargar los datos
  //   } catch (error) {
  //     console.log(error.message || error);
  //     setLoading(false); // asegurarse de que el indicador de carga se desactive en caso de error
  //   }
  // };
  const getSingleCompe = async () => {
    try {
      setLoading(true); // activar el indicador de carga
      const res = await ResultsService.getSingleCompe(id);
      console.log(res.data);
      const sortedResults = res.data.data.results.sort((a, b) => {
        const weightA = Math.abs(a.weight);
        const weightB = Math.abs(b.weight);
        if (weightA === weightB) {
          return a.position - b.position;
        }
        return weightA - weightB;
      });
      setCompetitions(() => ({ ...res.data, data: { ...res.data.data, results: sortedResults } }));
      console.log(res);
      console.log(competition);
      setLoading(false); // desactivar el indicador de carga después de cargar los datos
    } catch (error) {
      console.log(error.message || error);
      setLoading(false); // asegurarse de que el indicador de carga se desactive en caso de error
    }
  };
  
  

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleDeleteResult = async (index) => {
    try {
      const resultId = competition.data.results[index]._id;
      const res = await ResultsService.deleteCompe(resultId);
      console.log(res.data);
      getSingleCompe();
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleNewResult = async () => {
    try {
      const results = [...competition.data.results];
      if (deleteIndex !== null) {
        const resultId = results[deleteIndex]._id;
        await ResultsService.deleteCompe(resultId);
        results.splice(deleteIndex, 1);
      }
      if (selectedIndex !== null) {
        // Elimina el resultado existente y agrega uno nuevo en su lugar
        const resultId = results[selectedIndex]._id;
        await ResultsService.deleteCompe(resultId);
        results.splice(selectedIndex, 1, newResult);
      } else {
        // Agrega un nuevo resultado al final de la lista
        results.push(newResult);
      }
      const res = await ResultsService.updateCompetition(id, results);
      console.log(res.data);
      getSingleCompe();
      setDeleteIndex(null);
      setSelectedIndex(null);
      setNewResult({
        weight: "",
        position: "",
        name: "",
        club: "",
      });
      handleCloseModal();
    } catch (error) {
      console.log(error.message || error);
    }
  };
  function canEdit() {
    return userRole !== "user";
  }

  return (
    <div className="competition-list">
      <h1>Lista de Resultados</h1>
      <div className={user.role === "user" ? "visually-hidden" : ""}>
        <li className="visually-hidden">Tipo usuario: {user.role}</li>
      </div>
      <h2>{competition?.data?.name}</h2>
      {loading && <Spinner animation="border" />} {/* indicador de carga */}
      {!loading &&
        competition?.data?.results.map((result, index) => (
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
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="ml-auto d-flex align-items-center">
                        {user.role !== "user" && (
                          <div className="me-3">
                            <Button onClick={() => handleShowModal(index)}>
                              Editar
                            </Button>
                          </div>
                        )}
                        {user.role !== "user" && (
                          <div>
                            <Button
                              onClick={() => handleDeleteResult(index)}
                              className="delete-result btn btn-danger me-2"
                            >
                              Eliminar
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ml-auto">
                      {user.role !== "user" && (
                        <div>
                          <button
                            onClick={() => {
                              setSelectedIndex(null); // resetear selectedIndex a null
                              handleShowModal(null);
                            }}
                            className="update-user btn btn-primary ms-2"
                          >
                            Crear Nuevo
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      
                      <div className="ml-auto">
                        {user.role !== "user" && (
                          <div>
                            <Button onClick={() => handleShowModal(index)}>
                              Editar
                            </Button>
                          </div>
                        )}
                        {user.role !== "user" && (
                          <div>
                            <Button
                              onClick={() => handleDeleteResult(index)}
                              className="delete-result btn btn-danger"
                            >
                              Eliminar
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ml-auto">
                      {user.role !== "user" && (
                        <div>
                          <button
                            onClick={() => {
                              setSelectedIndex(null); // resetear selectedIndex a null
                              handleShowModal(null);
                            }}
                            className="update-user btn btn-primary"
                          >
                            Crear Nuevo
                          </button>
                        </div>
                      )}
                    </div>
                  </div> */}
                </li>
              </ol>
            </div>
          </div>
        ))}
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

            <Form.Group controlId="club">
              <Form.Label>Club</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el club"
                value={newResult.club}
                onChange={(e) =>
                  setNewResult({ ...newResult, club: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleNewResult}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default JudoDetail;

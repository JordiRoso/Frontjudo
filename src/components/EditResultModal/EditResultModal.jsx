import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

import { ResultsService } from "../../_services/ResultsService";

function EditResultModal(props) {
  const [weight, setWeight] = useState(props.result.weight);
  const [position, setPosition] = useState(props.result.position);
  const [name, setName] = useState(props.result.name);
  const [club, setClub] = useState(props.result.club);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      weight,
      position,
      name,
      club,
    };
    try {
      const res = await ResultsService.updateResult(props.result._id, result);
      console.log(res);
      props.onHide();
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar Resultado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              className="form-control"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Posición:</label>
            <input
              type="text"
              className="form-control"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="club">Club:</label>
            <input
              type="text"
              className="form-control"
              id="club"
              name="club"
              value={club}
              onChange={(e) => setClub(e.target.value)}
            />
          </div>
          <Button variant="primary" type="submit">
            Guardar cambios
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditResultModal;

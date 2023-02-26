import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../features/user/userActions";
import { Modal, Button, Form } from "react-bootstrap";
import UserService from "../../_services/UserService";

export default function UserPanel() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const [newUsername, setNewUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  // const handleUpdate = () => {
  //   dispatch(updateUser({ ...user, name: newUsername }));
  //   setShowModal(false);
  // }
  const handleUpdate = async () => {
    // console.log("user_id:", updatedUser._id);
    const updatedUser = { ...user, name: newUsername };
    updatedUser._id = user._id;
    console.log("Actualizando usuario con id:", updatedUser._id);
    try {
      await dispatch(updateUser(updatedUser)); // actualiza el estado de Redux
      await UserService.updateUser(updatedUser._id, updatedUser);
      console.log(updatedUser._id); // actualiza el usuario en el servidor
      setShowModal(false);
    } catch (error) {
      console.error(error);
      // manejar error
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="text-left">
        <h2>Usuario</h2>

        <div>
          <ol>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.role}</li>
          </ol>

          <div className="admin-buttons">
            <button
              onClick={() => setShowModal(true)}
              className="update-user btn btn-primary"
            >
              Actualizar
            </button>
          </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Actualizar nombre de usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nuevo nombre de usuario:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nuevo nombre de usuario"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

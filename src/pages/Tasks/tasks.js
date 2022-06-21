import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Button, Container, Modal, ModalBody } from "reactstrap";
import { TaskCreate } from "./taskCreateForm";
import { TaskUpdate } from "./taskUpdateForm";
import { TaskList } from "./taskList";

const Tasks = () => {
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    isCreate: false,
    isUpdate: false,
    selectedId: null,
  });

  const onRowClick = row => {
    setOpenModal(prevState => {
      return { ...prevState, isOpen: true, isUpdate: true, selectedId: row.id };
    });
  };

  const handleCreate = () => {
    setOpenModal(prevState => {
      return { ...prevState, isOpen: true, isCreate: true };
    });
  };

  const closeModal = () => {
    setOpenModal({
      isOpen: false,
      isCreate: false,
      isUpdate: false,
      selectedId: null,
    });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Tasks Overview</title>
        </MetaTags>
        <Container fluid>
          <Button
            color="primary"
            className="float-end"
            onClick={handleCreate}
            style={{ marginTop: -5 }}
          >
            <i className="fa fa-plus"></i> Add
          </Button>
          <h4 className="mb-3">Tasks Overview</h4>
        </Container>

        <TaskList onRowClick={onRowClick} />

        <Modal isOpen={openModal.isOpen} toggle={closeModal}>
          <ModalBody>
            <Button close onClick={closeModal} />
            {openModal.isCreate && <TaskCreate />}
            {openModal.isUpdate && <TaskUpdate id={openModal.selectedId} />}
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Tasks;

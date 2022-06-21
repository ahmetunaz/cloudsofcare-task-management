import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Button, Container, Modal, ModalBody } from "reactstrap";
import { CaseCreate } from "./caseCreateForm";
import { CaseUpdate } from "./caseUpdateForm";
import { CaseList } from "./caseList";

const Cases = () => {
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
          <title>Analysis Cases</title>
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
          <h4 className="mb-3">Analysis Cases</h4>
        </Container>

        <CaseList onRowClick={onRowClick} />

        <Modal isOpen={openModal.isOpen} toggle={closeModal}>
          <ModalBody>
            <Button close onClick={closeModal} />
            {openModal.isCreate && <CaseCreate />}
            {openModal.isUpdate && <CaseUpdate id={openModal.selectedId} />}
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Cases;

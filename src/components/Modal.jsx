import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useContactsFetch from "./useDataFetch";
import { useDataContext } from "../DataContext/DataContext";

export default function CustomModal({}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [onlyEven, setOnlyEven] = useState(false);

  const {
    handleShowModalA,
    handleShowModalB,
    handleCloseModal,
    showModalA,
    showModalB,
  } = useDataContext();

  const endpoint = showModalA
    ? `/contacts/?search=${searchTerm}&page=${page}`
    : `/country-contacts/United%20States/?search=${searchTerm}`;

  const contactDatas = useContactsFetch(searchTerm, page, endpoint);
  const contacts = onlyEven
    ? contactDatas.filter((contact) => contact.id % 2 === 0)
    : contactDatas;

  const handleToggleEven = () => {
    setOnlyEven((prevState) => !prevState);
  };

  const showModal = showModalA || showModalB;
  const modalTitle = showModalA ? "Modal A" : "Modal B";

  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton={false}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>{modalTitle}</div>
          <div className="d-flex justify-content-center mt-3">
            <Button
              style={{ background: " #46139f" }}
              className="m-2"
              variant="primary"
              onClick={handleShowModalA}
            >
              All Contacts
            </Button>
            <Button
              style={{ background: "#ff7f50" }}
              className="m-2"
              variant="warning"
              onClick={handleShowModalB}
            >
              US Contacts
            </Button>
            <Button
              className="m-2"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        {/* Modal Body Section */}
        {contacts?.map((contact) => (
          <div key={contact.id}>
            <p>
              {contact.id} - {contact.phone}
            </p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <div className="footer-checkbox">
          <input
            type="checkbox"
            id="onlyEven"
            checked={onlyEven}
            onChange={handleToggleEven}
          />
          <label htmlFor="onlyEven">Only even</label>
        </div>
        <button>Next</button>
      </Modal.Footer>
    </Modal>
  );
}

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CustomModal({
  show,
  onHide,
  title,
  children,
  onShowModalA,
  onShowModalB,
  onlyEven,
  handleToggleEven,
}) {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
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
          <div>{title}</div>
          <div className="d-flex justify-content-center mt-3">
            <Button style={{background:" #46139f"}} className="m-2" variant="primary" onClick={onShowModalA}>
              All Contacts
            </Button>
            <Button style={{background:"#ff7f50"}} className="m-2" variant="warning" onClick={onShowModalB}>
              US Contacts
            </Button>
            <Button className="m-2" variant="secondary" onClick={onHide}>
              Close
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
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
      </Modal.Footer>
    </Modal>
  );
}

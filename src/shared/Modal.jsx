import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useContactsFetch from "../hooks/useDataFetch";
import { useDataContext } from "../context/DataContext";
import "./style.css";

export default function CustomModal({}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [onlyEven, setOnlyEven] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
  const {
    handleShowModalA,
    handleShowModalB,
    handleCloseModal,
    showModalA,
    showModalB,
  } = useDataContext();

  //api endpoint
  const endpoint = showModalA
    ? `/contacts/?search=${searchTerm}&page=${page}`
    : `/country-contacts/United%20States/?search=${searchTerm}`;

  // even data show logic
  const contactDatas = useContactsFetch(searchTerm, endpoint);
  const contacts = onlyEven
    ? contactDatas.filter((contact) => contact.id % 2 === 0)
    : contactDatas;

    //even data click handler
  const handleToggleEven = () => {
    setOnlyEven((prevState) => !prevState);
  };

  // show modal c logic 
  const showModalC = contactDetails !== null;

  const showModal = showModalA || showModalB;

  //dynamic modal title show base on modal
  const modalTitle = showModalA
    ? "Modal A"
    : showModalC
    ? "Modal C"
    : "Modal B";

  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
      centered={true}
      scrollable={true}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header style={{ width: "100%", position: "relative" }}>
        <div>
          <div style={{ textAlign: "center" }}>{modalTitle}</div>

          {!showModalC && (
            <div
              className="contact-modal-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                className="all-contacts-button"
                variant="primary"
                onClick={handleShowModalA}
              >
                All Contacts
              </Button>
              <Button
                className=" us-contacts-button"
                variant="warning"
                onClick={handleShowModalB}
              >
                US Contacts
              </Button>

              <div className="input-group mb-3">
                <input
                  style={{ width: "10px", marginTop: "15px" }}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                  placeholder="Enter Number"
                  aria-label="Enter Number"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          )}

          <button
            style={{ position: "absolute", top: 10, right: 5 }}
            className="closed-button"
            onClick={() => {
              handleCloseModal();
              setContactDetails(null);
            }}
          >
            X
          </button>
        </div>
      </Modal.Header>

      <div style={{ height: "400px", overflow: "auto" }}>
        {/* modal body section */}
        <Modal.Body>
          {/* show Modal-A Modal-B if show Modal-c data null/inactive*/}
          {!showModalC ? (
            contacts?.map((contact) => (
              <div
                className="contact-list"
                onClick={() => setContactDetails(contact)}
                key={contact.id}
              >
                <p>
                  {contact.id}. {contact.phone}
                </p>
              </div>
            ))
          ) : (
            // modal-c details modal
            <div className="contact-details">
              <p>Country : {contactDetails?.country?.name}</p>
              <p>Phone : {contactDetails?.phone}</p>
            </div>
          )}
        </Modal.Body>
      </div>
      {/* show button or input when not modal-c show */}
      {!showModalC && (
        <Modal.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="footer-checkbox">
            <input
              style={{ marginRight: "5px" }}
              type="checkbox"
              id="onlyEven"
              checked={onlyEven}
              onChange={handleToggleEven}
            />
            <label htmlFor="onlyEven">Only even</label>
          </div>
          {/* next or previous button */}
          <div>
            {page > 1 && (
              <Button
                className="mr-3"
                onClick={() => setPage(page - 1)}
                variant="primary"
                size="sm"
              >
                Prev
              </Button>
            )}
            {page < 30 && (
              <Button
                style={{ marginRight: "5px", marginLeft: "10px" }}
                onClick={() => setPage(page + 1)}
                variant="primary"
                size="sm"
              >
                Next
              </Button>
            )}
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
}

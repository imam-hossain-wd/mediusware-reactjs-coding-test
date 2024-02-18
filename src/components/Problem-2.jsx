import CustomModal from "./Modal";
import { useDataContext } from "../DataContext/DataContext";

function Problem2() {
  const { handleShowModalA, handleShowModalB } = useDataContext();

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShowModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleShowModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

      <CustomModal />
    </div>
  );
}

export default Problem2;

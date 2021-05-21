import { Modal } from "react-bootstrap";
import reactDom from "react-dom";

const ModalOverlay = () => {
  return (
    <Modal.Dialog>
      <Modal.Body className="alert-danger text-center" closeButton>
        <div className="bg-white">
          <h1>OOPS!!</h1>
          <h3>Looks like you spent more than you have</h3>
        </div>
      </Modal.Body>
    </Modal.Dialog>
  );
};

const ModalItem = () => {
  return (
    <>
      {reactDom.createPortal(
        <ModalOverlay />,
        document.getElementById("modal")
      )}
    </>
  );
};
export default ModalItem;

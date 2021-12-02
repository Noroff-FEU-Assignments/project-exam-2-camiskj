import Modal from "react-bootstrap/Modal";
import { React } from "react";

export default function ConfirmationModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Thank you!</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your enquiry has been sent. We will get back to you shortly to confirm your stay.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
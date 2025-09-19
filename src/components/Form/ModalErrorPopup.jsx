import { Modal, Button } from "react-bootstrap";

const PopupModal = ({ show, handleClose, formName }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header style={{ justifyContent: "center" }}>
                <Modal.Title
                    className="text-danger"
                    style={{ textAlign: "center" }}
                >
                    {"Access Denied"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-danger" style={{ textAlign: "center" }}>
                <p>
                    {`You do not have the required permissions to view or access "${formName}" form.`}
                    <br />
                    {
                        "Please contact the administrator if you believe this is an error or if you need access"
                    }
                    <br />
                    {"stardesk@bankofindia.co.in"}
                    <br />
                    {"stardesk.support@bankofindia.co.in"}
                </p>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center" }}>
                <Button
                    variant="primary"
                    onClick={() => {
                        handleClose();
                    }}
                >
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopupModal;

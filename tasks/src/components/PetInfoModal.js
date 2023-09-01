import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PetInfoModal(props) {
  const [show, setShow] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(null);

  //HANDLES THE CLOSE EVENT
  const handleClose = () => {
    setShow(false);
    props.onPopupExit()
  };

  const handleShow = () => setShow(true);

  //HANDLES THE EVENT WHERE MODAL IS TRIGGERED AND DATA IS PASSED TO MODAL
  useEffect(() => {
    if (props.trigger === true) {
      handleShow();
      setDisplayInfo(props.petInfo)
    }

  }, [props.trigger, props.petInfo]);

  return (displayInfo) ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{displayInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <img src={displayInfo.image} alt={`${displayInfo.name}!`}/>
        Species: {displayInfo.species}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    ) : ""

}


export default PetInfoModal;
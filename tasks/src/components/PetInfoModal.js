import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';



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

        {/*Top Div*/}
        <div id = "infoModalTop">
          <div>
            <img src={displayInfo.image} alt={`${displayInfo.name}!`}/>
          </div>
          <div id = "infoModalTextContainer">
            <div className="modalText">Name: {displayInfo.name}</div>
            <div className="modalText">Tasks: {displayInfo.task}</div>
            <div className="modalText">Date Acquired: {displayInfo.dateAcquired}</div>
          </div>
        </div> 
        
        {/*Bottom Div*/}
        <div id="infoModalBottom">
          <div id = "infoModalProgressBars">
            <div className="modalText">Affection:</div>
            <ProgressBar now={displayInfo.affection} label={`${displayInfo.affection}%`} />
            <div className="modalText">Hunger:</div>
            <ProgressBar now={displayInfo.hunger} label={`${displayInfo.hunger}%`} />
            {/* PUT PROGRESS BAR HERE */}
          </div>
        </div> 

      </Modal.Body>
      <Modal.Footer>
        <div id="infoModalShowcase">
          <table>
            <tbody>
              <tr>
                <td>image</td>
                <td>image</td>
                <td>image</td>
                <td>image</td>
                <td>image</td>
                <td>image</td>
              </tr>
            </tbody>
          </table>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
        </div>
      </Modal.Footer>
    </Modal>
    ) : ""

}


export default PetInfoModal;
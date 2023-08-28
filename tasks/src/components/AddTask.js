import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

function AddTask() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Task Name:</InputGroup.Text>
                    <Form.Control
                        placeholder="Walk my dog"
                        aria-label="Task Name"
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text id="basic-addon1">Deadline:</InputGroup.Text>
                    <input type='text'></input>
                    <input type="date"></input>
                </InputGroup>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <input class="btn btn-primary" type="submit" value="Add Task" formMethod='POST' onClick={handleClose}></input>
            </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddTask;
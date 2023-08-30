import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row, Col } from 'react-bootstrap';

function AddTask() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
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

                <InputGroup className='mb-3'>
                    <InputGroup.Text id="basic-addon1">Type:</InputGroup.Text>
                    <Form.Select aria-label="Default select example">                      
                      <option value="2">Personal</option>
                      <option value="1">Work</option>
                      <option value="3">Errands</option>
                    </Form.Select>
                </InputGroup>

                <Row>
                  <Col xs="auto">
                    <InputGroup className='mb-3'>
                      <InputGroup.Text id="basic-addon1">Date:</InputGroup.Text>
                      <input type="date" className='border pe-3 ps-2'></input>
                    </InputGroup>
                  </Col>

                  <Col >
                    <InputGroup className='mb-3'>
                      <InputGroup.Text id="basic-addon1" className='ms-auto'>Time:</InputGroup.Text>
                      <input type="time" className='border pe-3 ps-2'></input>
                    </InputGroup>
                  </Col>
                </Row>

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
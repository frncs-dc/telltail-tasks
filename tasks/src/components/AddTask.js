import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row, Col } from 'react-bootstrap';
import { useTasksContext } from '../hooks/useTaskContext';

function AddTask() {

  const { dispatch } = useTasksContext()
  // [the variable to affect, the function that changes it]
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [duetime, setDuetime] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(null)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTask = async (e) => {
    e.preventDefault()

    const formattedDeadline = new Date(deadline + 'T00:00:00');
    const formattedDuetime = new Date('1970-01-01T' + duetime);

    const task = {title, deadline: formattedDeadline, duetime: formattedDuetime, type}

    const response = await fetch ('/api/tasks/Home', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      console.log('yay at least andito ka na finally')
    }

    if(response.ok) {
      setError(null)
      setTitle('')
      setDeadline('')
      setDuetime('')
      setType('')
      handleClose()
      console.log('new task added:', json)
      dispatch({type: 'CREATE_TASK', payload: json })
    }
  }
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddTask}>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Task Name:</InputGroup.Text>
                    <Form.Control
                        placeholder="Walk my dog"
                        aria-label="Task Name"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className='mb-3'>
                    <InputGroup.Text id="basic-addon1">Type:</InputGroup.Text>
                    <Form.Select aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
                      <option value="Default">Select a type</option>                      
                      <option value="Personal">Personal</option>
                      <option value="Work">Work</option>
                      <option value="Errands">Errands</option>
                    </Form.Select>
                </InputGroup>

                <Row>
                  <Col xs="auto">
                    <InputGroup className='mb-3'>
                      <InputGroup.Text id="basic-addon1">Date:</InputGroup.Text>
                      <input type="date" className='border pe-3 ps-2' onChange={(e) => setDeadline(e.target.value)}></input>
                    </InputGroup>
                  </Col>

                  <Col >
                    <InputGroup className='mb-3'>
                      <InputGroup.Text id="basic-addon1" className='ms-auto'>Time:</InputGroup.Text>
                      <input type="time" className='border pe-3 ps-2' onChange={(e) => setDuetime(e.target.value)}></input>
                    </InputGroup>
                  </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddTask}>
                  Add Task
                </Button>
            </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddTask;
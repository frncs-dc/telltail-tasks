import { Button, Card, Row, Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

import { toWords } from '../helpers/Date';
import DeletePrompt from './DeletePrompt';



function IndivTask({ task }){


    const [isChecked, setIsChecked] = useState(task.status === 'Done');

    const isComplete = isChecked ? 'form-check-label fw-bold ms-2 text-decoration-line-through' : 'form-check-label fw-bold ms-2';

    const [isOverDue, setIsOverDue] = useState(false);

    const handleCheckboxChange = async () => {
        const response = await fetch('/api/tasks/Home/' + task._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: isChecked ? 'In Progress' : 'Done',
            }),
        });

        if (!response.ok) {
            console.log('response not okay');
        }
    
        if (response.ok) {
            // if (task.status === 'Done'){
            //     setIsChecked("True");
            // }
            // if (task.status === 'In Progress'){
            //     setIsChecked("False");
            // }
            setIsChecked(!isChecked);
            
        }
    };
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Card className='secondary-bg mt-2'>
                <Container className='d-flex align-items-center'>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        />
                    <label className={isComplete} htmlFor="defaultCheck1"> {task.title}</label>

                    <Button onClick={handleShow} className='ms-auto secondary-bg text-dark border border-0'>...</Button>
                    <DeletePrompt task={ task }/>

                </Container>
                <Container >
                    <span className='border border-black w-auto me-auto rounded-pill px-3'>{task.type}</span>
                </Container>
                <Container className='ms-2'>
                    <p className='text-muted'> {toWords(task.deadline.toString())} </p>
                </Container>
                
            </Card>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{task.title}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <Container className='p-3'>
                        <Row>{toWords(task.deadline.toString())}</Row>
                        <Row>Type: {task.type}</Row>
                        <Row>Status: {task.status}</Row>
                        <Row>Notes: {task.notes}</Row>
                    </Container>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )

}

export default IndivTask
import Card from 'react-bootstrap/Card';
import AddTask from './AddTask';
import { useEffect, useState } from 'react';
import IndivTask from './IndivTask';
import { useTasksContext } from '../hooks/useTaskContext';
import Col from 'react-bootstrap/Col'
import { Button, Row, Form } from 'react-bootstrap';

function YourTasks(){

    const {tasks, dispatch} = useTasksContext()

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks/Home')
            const json = await response.json() // parses the json

            if(response.ok){
                dispatch({ type: 'SET_TASKS', payload: json})
            }

        }

        fetchTasks()
    }, [dispatch])

    const [filterType, setFilterType] = useState("None");
    const [filterStatus, setFilterStatus] = useState("None");

    const filterTasks = async () => {
        const response = await fetch(`/api/tasks/Home/${filterType}/${filterStatus}`);
        const json = await response.json();
    
        if (response.ok) {
            dispatch({ type: 'SET_TASKS', payload: json });
        }
    };

    const [show, setShow] = useState(true);

    const handleClose = () => {
        console.log("Minimize tasks")
        setShow(false)
    };
    const handleShow = () => {
        console.log("Maximize tasks")
        setShow(true)
    };

    return (
        <>  
            <Col md="auto">

                <Button className='background-bg border border-0 text' hidden={show} onClick={handleShow} size='small'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
                    </svg>
                </Button>

                <Card className='p-3 accent-bg inner-shadow' hidden={!show}>
                    
                    <Row>
                        <Col className='col-9'>
                            <h2 className="display-4 text-left background"> Your Tasks </h2>
                        </Col>
                        <Col className='col-3 d-flex'>
                            <Button className='ms-auto mb-auto accent-bg border border-0' size='small' onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"/>
                                </svg>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridState" md="auto">
                        <Form.Label className='background'>Type</Form.Label>
                        <Form.Select defaultValue="None"
                                    onChange={(e) => setFilterType(e.target.value)}>
                            <option value="None">All Types</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Errands">Errands</option>
                            <option value="Misc">Misc</option>

                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState" md="auto">
                        <Form.Label className='background'>Status</Form.Label>
                        <Form.Select defaultValue="None"
                                    onChange={(e) => setFilterStatus(e.target.value)}>
                            <option value="None">All Statuses</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </Form.Select>
                    </Form.Group>
                    <Col className='d-flex' md="auto">
                        <Button className='me-auto mt-auto secondary-bg text border border-0' variant="primary" onClick={filterTasks}>
                            Filter
                        </Button>
                    </Col>
                    </Row>
                    {tasks && tasks.map(task => (
                        <IndivTask task={ task } key = {task._id} />
                    ))}
                    
                    <AddTask />
                </Card>
            </Col>

        </>
        
    )
}

export default YourTasks
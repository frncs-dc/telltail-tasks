import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function YourTasks(){
    return (
        <>
           <Container fluid className='p-4 border'>
            <Row className="d-flex align-items-center justify-content-center">
                    <Col>
                    {/* PET AREA HERE */}
                    </Col>
                    <Col>
                        <Card className='p-3'>
                            <h2 className="display-4 text-center"> YOUR TASKS </h2>
                            <Form.Check label="option 1" />
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Task Name"
                                    aria-label="Task Name"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                Add Task
                                </Button>
                            </InputGroup>
                        </Card>
                    </Col>
                </Row>
           </Container>
        </>
        
    )
}

export default YourTasks
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import AddTask from './AddTask';

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
                            <AddTask />
                        </Card>
                    </Col>
                </Row>
           </Container>
        </>
        
    )
}

export default YourTasks
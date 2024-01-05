import YourTasks from "../components/YourTasks"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PetSystem from "../components/PetSystem";

function Home(){

    return(
        <>
            <Container fluid className='p-4 border'>
            <Row className="d-flex align-items-center justify-content-center">
                    <Col className='col-8'>
                        <PetSystem />
                    </Col>
                    <YourTasks />
                </Row>
           </Container>
        </>
    )
}

export default Home
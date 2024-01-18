import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    function goToSignUp() {
        navigate("/SignUp");
    }

    function goToHome() {
        if (userData && userData.username) {
            navigate(`/Home`);
        } else {
            console.error("User data or username is null");
        }
    }
    

    const fetchUser = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`/api/${email}/${password}`)
        const json = await response.json() // parses the json

        if(response.ok){
            setUserData(json)
            console.log("User Logged In: ", json)
            goToHome()
        }

        else{
            console.log(json.error)
        }

    }

    return (
        <Container>
            <Row className='mt-5 pt-4'>
                <Col>
                    {/* LOGO HERE */}
                </Col>
                <Col>
                    <Card className='p-3'>
                        <h3>Welcome to TellTail Tasks<br></br>
                        <small className="text-muted">Help pets achieve happiness by taking care of yourself</small>
                        </h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                            onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                            onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            {/* Remember Me: Cookies and Stuff */}
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <Button variant="primary" type="submit" className='w-100' onClick={fetchUser}>
                                Log In
                            </Button>
                            <Row>
                                <Col className='mt-4 mb-2 text-center'>
                                    Don't have an account?
                                </Col>
                            </Row>
                            <Button variant="primary" onClick={goToSignUp} className='w-100'>
                                Sign Up
                            </Button>
                        </Form>
                        
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Login
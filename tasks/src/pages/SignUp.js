import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



function SignUp(){

    const navigate = useNavigate();

    function goToLogin() {
        navigate("/");
    }

    function goToHome(){
        navigate("/Home")
    }

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [character, setCharacter] = useState("")
    const [imagePath, setImagePath] = useState("/Characters/Characters-01.png")
    
    const handleAvatarSelect = (e) => {
        const selectedCharacter = e.target.value;
        console.log('Selected Character:', selectedCharacter);
        setCharacter(selectedCharacter);
        handleCharacterPicture(selectedCharacter)
        console.log(imagePath)
    };

    const handleCharacterPicture = (value) => {

        if(value === "1"){
            setImagePath("/Characters/Characters-01.png")
        }
        if(value === "2"){
            setImagePath("/Characters/Characters-02.png")
        }
        if(value === "3"){
            setImagePath("/Characters/Characters-03.png")
        }
        if(value === "4"){
            setImagePath("/Characters/Characters-04.png")
        }
    }

    const handleAddUser = async (e) => {
        e.preventDefault()
        console.log(character)
        const user = {username, email, password, character}
        
        const response = await fetch ('/api/SignUp', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        const json = await response.json()
    
        if(!response.ok){
            console.log(json.error)
        }
    
        if(response.ok) {
            console.log('new user added:', json)
            goToHome()
        }
    }

    return (
        <Container>
            <Row className='mt-5 pt-4'>
                <Col>
                    <Card className='p-3'>
                    <Form>
                        <Row>
                            <Col>
                                <h3>Welcome to TellTail Tasks<br></br>
                                <small className="text-muted">Help pets achieve happiness by taking care of yourself</small>
                                </h3>
                                
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username" 
                                                        onChange={(e) => setUsername(e.target.value)}/>
                                    </Form.Group>
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
                                        <Form.Control type="text" placeholder="Password" 
                                            onChange={(e) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    {/* Remember Me: Cookies and Stuff */}
                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}
                                    
                            </Col>
                            <Col>
                                <Row>
                                    <Col>Choose your avatar:</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select aria-label="Default select example" onChange={handleAvatarSelect}>
                                            <option value="1">Character 1</option>
                                            <option value="2">Character 2</option>
                                            <option value="3">Character 3</option>
                                            <option value="4">Character 4</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <img src={imagePath}></img>
                                    </Col>
                                </Row>
                                <Button variant="primary" onClick={handleAddUser} className='w-100 mt-3'>
                                    Create Your Account
                                </Button>
                                <Row>
                                    <Col className='mt-4 mb-2 text-center'>
                                        Already have an account?
                                    </Col>
                                </Row>
                                <Button variant="primary" onClick={goToLogin} className='w-100'>
                                    Log In
                                </Button>
                            </Col>
                        </Row> 
                        </Form>                       
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp
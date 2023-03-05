import { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login({setCurrentUser}) {

    const navigate = useNavigate()


    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    console.log(username)
    console.log(password)

    function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password})
        };
        fetch('/login', requestOptions)
            .then( (response) => { 
            if(response.ok){
                response.json()
                .then((data)=>{
                    setCurrentUser(data)
                    navigate('/')
                })

            }
            else{
                alert('Account creation failed.  Please try again.')
            }
        });

    }


  return (
    <div className="form-container">
      <Container style={{ width: "700px" }}>
        <Card style={{ backgroundColor: '#f7f4ef' }}> 
          <Card.Body style={{ padding: "60px" }}>
            <h3 className="card-title mb-4">Login</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername" onChange={(e) => setUserName(e.target.value)}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e) => setPassword(e.target.value)}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>


                <a href="#">
                  <button
                    type="button"
                    className="btn btn-success mb-3"
                    id="edit-btn"
                  >
                    Login
                  </button>
                </a>

              <div className="mt-2">
                <a href="/signup" style={{ color: "black" }}>
                  Don't have an account? Sign Up
                </a>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;

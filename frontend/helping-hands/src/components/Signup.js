import { useState } from "react"
import { Button, Form, Container, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function SignUp({setCurrentUser}) {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [zipcode, setZipCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isAdvocate, setIsAdvocate] = useState(false)




    function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, password, zipcode, isAdvocate, phoneNumber})
        };
        fetch('http://localhost:5432/register', requestOptions)
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

    console.log( name, username, email, password, zipcode, isAdvocate, phoneNumber)


  return (
    <div className="form-container">
      <Container style={{ width: "700px" }}>
        <Card style={{ backgroundColor: '#f7f4ef' }}>
          <Card.Body style={{ padding: "60px" }}>
            <h3 className="card-title mb-4">Sign up</h3>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name" onChange={(e) => setName(e.target.value)}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="username" onChange={(e) => setUserName(e.target.value)}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="number" onChange={(e) => setPhoneNumber(e.target.value)}>
                <Form.Label>Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Email" onChange={(e) => setEmail(e.target.value)}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

  

                            <Form.Group className="mb-3" controlId="password" onChange={(e) => setPassword(e.target.value)}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="zipcode" onChange={(e) => setZipCode(e.target.value)}>
                                <Form.Label>Zipcode</Form.Label>
                                <Form.Control type="zipcode" placeholder="Zipcode" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="admin" onChange={(e) => setIsAdvocate(!isAdvocate)}>
                                <Form.Check type="checkbox" label="Admin" />
                            </Form.Group>

                <a href="#">
                  <button
                    type="button"
                    className="btn btn-success mb-3"
                    id="edit-btn"
                  >
                    Sign up
                  </button>
                </a>

              <div className="mt-2">
                <a href="/login" style={{ color: "black" }}>Already have an account? Login</a>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SignUp;

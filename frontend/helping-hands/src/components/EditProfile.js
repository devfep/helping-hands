import { Button, Form, Container, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Profile({currentUser, setCurrentUser}) {

  const [name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [zipcode, setZipCode] = useState("")
  const [number, setNumber] = useState("")
  const [food, setFood] = useState(true)

  const navigate = useNavigate()

  function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, zipcode, number, food})
        };
        fetch('/', requestOptions)
            .then( (response) => {
            if(response.ok){
                response.json()
                .then((data)=>{
                    setCurrentUser(data)
                    navigate('/profile')
                })

            }
            else{
                alert('Account creation failed.  Please try again.')
            }
        });
    }

    console.log(name, username, email, zipcode, number, food)

  return (
    <div className="profile-container">
    <div className="row">
      <div className="col-md-8 mx-auto" style={{ width: '600px', maxWidth: '100%' }}>
        <div className="card" style={{ backgroundColor: '#f7f4ef' }}>
          <div className="card-body">
            <h3 className="mb-4 mt-4">Edit Profile Information</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="username" className="left-align">Username</label>
                <input type="text" className="form-control mb-3" id="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="name" className="left-align">Name</label>
                <input type="text" className="form-control mb-3" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="email" className="left-align">Email Address</label>
                <input type="email" className="form-control mb-3" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="zipcode" className="left-align">Zipcode</label>
                <input type="text" className="form-control mb-3" id="zipcode" placeholder="Zipcode" onChange={(e) => setZipCode(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="phone" className="left-align">Phone Number</label>
                <input type="tel" className="form-control mb-3" id="phone" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)}/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input mb-3" id="food" onChange={(e) => setFood(!food)}/>
                <label className="left-align" for="food">Food</label>
              </div>
              <a href="#">
              <button type="button" className="btn btn-success" id="edit-btn">Save</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Profile

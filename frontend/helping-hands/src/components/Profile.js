import { Button, Form, Container, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Profile() {
  return (
    <div className="profile-container">
    <div className="row">
      <div className="col-md-8 mx-auto" style={{ width: '600px', maxWidth: '100%' }}>
        <div className="card" style={{ backgroundColor: '#f7f4ef' }}>
          <div className="card-body">
            <h3 className="mb-4 mt-4">Profile Information</h3>

            <form>
              <div className="form-group">
                <label for="username" className="left-align">Username</label>
                <input type="text" className="form-control mb-3" id="username" placeholder="Username" disabled />
              </div>
              <div className="form-group">
                <label for="name" className="left-align">Name</label>
                <input type="text" className="form-control mb-3" id="name" placeholder="Name" disabled />
              </div>
              <div className="form-group">
                <label for="email" className="left-align">Email Address</label>
                <input type="email" className="form-control mb-3" id="email" placeholder="Email" disabled />
              </div>
              <div className="form-group">
                <label for="zipcode" className="left-align">Zipcode</label>
                <input type="text" className="form-control mb-3" id="zipcode" placeholder="Zipcode" disabled />
              </div>
              <div className="form-group">
                <label for="phone" className="left-align">Phone Number</label>
                <input type="tel" className="form-control mb-3" id="phone" placeholder="Phone Number" disabled />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input mb-3" id="advocate" checked disabled />
                <label for="advocate" className="left-align">Advocate</label>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input mb-3" id="food" checked disabled />
                <label for="food" className="left-align">Food</label>
              </div>
              <a href="/profile/edit">
              <button type="button" className="btn btn-warning" id="edit-btn">Edit</button>
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

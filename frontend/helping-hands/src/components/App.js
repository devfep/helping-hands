import { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Help from './Help';
import Navbar from './Navbar';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import Connunities from './Communities'
// import { useNavigate } from "react-router-dom"

//App function

function App() {


  const [currentUser, setCurrentUser] = useState({})
  // const navigate = useNavigate()

  useEffect(()=> {
      fetch("/auth").then(res => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      }).then(data => setCurrentUser(data))
  },[])
  
  // .then(data => setCurrentUser(data)).catch((e)=>{navigate("/login")})

  return (
    <div className="App">
      {
  	    window.location.pathname !== "/login" && window.location.pathname !== "/signup" &&
   	    <Navbar />
	    }
      <Routes>
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/profile/edit' element={<EditProfile />}/>
        <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser}/>}/>
        <Route path='/' element={<Help />}/>
        <Route path='/communities' element={<Connunities />}/>
      </Routes>
    </div>
  );
}

export default App;

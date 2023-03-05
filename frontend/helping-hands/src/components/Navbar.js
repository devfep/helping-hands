import React, { useState } from 'react';
import './navbar.css';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


/*



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  

  return (
    <div className="helping_navbar">
      <div className="helping_navbar_links">
        <div className="helping_navbar_links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#userProfile">User Profile</a></p>
          <p><a href="#logout">Logout</a></p>
        </div>
        <div className="helping_navbar_links_logo">
          <img src={logo} />
        </div>
      </div>
      <div className="helping_navbar_menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="helping_navbar_menu_container scale-up_center">
          <div className="helping_navbar_menu_container_links">
          <p><a href="#home">Home</a></p>
          <p><a href="#userProfile">User Profile</a></p>
          <p><a href="#logout">Logout</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; */

function Brand() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-[#FFA500]" style={{ backgroundColor: `#fdba74`}}>
  <a id='nav' class="navbar-brand nav-link" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      </li>
      <li class="nav-item">
        <a id='nav' class="nav-link" href="/profile"> User Profile</a>
      </li>
      <li class="nav-item">
        <a id='nav' class="nav-link" href="/communities">Communities</a>
      </li>
      <li class="nav-item">
        <a id='nav' class="nav-link" href="/login">Logout</a>
      </li>
    </ul>
    <img src={logo} />
  </div>
</nav>


)}


export default Brand;

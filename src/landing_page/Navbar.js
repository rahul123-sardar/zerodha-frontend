import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#fff"}}>
  <div class="container">
    <Link class="navbar-brand" to="/">
        <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/product">Product</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/pricing">Pricing</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/support">Support</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link>
        </li>
      </ul>
      
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
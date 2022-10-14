//---------------IMPORTS---------------//
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../dataBase/it_world.png';
import Search from '../Search/Search';  
import Order from "../Order/Order"

// import Search from "../Search/Search";
import "./Styles.css";

//----------------------------//
export default function Nav() {
  return (
    <nav class="navbar navbar-expand-sm bg-light fixed-top">
      <div class="container-fluid container-nav">
        <a class="navbar-brand " href="#">
          <img src={logo} alt="" width="200"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toogle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/home">
                  <a class="nav-link active text-dark" aria-current="page" href="/home">HOME</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/hotels">
                  <a class="nav-link text-dark" href="#">HOTELS</a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">EVENTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="/home/dashboard">CREATE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">ABOUT US</a>
              </li>
              <button type="button" class="btn btn-outline-primary" disabled>LOG IN</button>
              <li class="nav-item">
                <Search/>
              </li>
              <li class="nav-item">
                <Order/>
              </li>
            </ul>
          </div>
          <div>     
        </div>
        </div>
        
    </nav>
  )
}

    

import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../dataBase/it_world.png';
import logo from "./world-developers.png";
import Search from "../Search/Search";
import Order from "../Order/Order";
// import Search from "../Search/Search";
import "./Styles.css";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-sm bg-light fixed-top">
      <div class="container-fluid container-nav">
        <Link class="navbar-brand" to="/">
          <img className="navbar-logo" src={logo} alt="" />
        </Link>
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/home">
                HOTELS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark" to="#">
                EVENTS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/home/dashboard">
                CREATE
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-dark" to="#">
                ABOUT US
              </Link>
            </li>
            <button type="button" class="btn btn-outline-primary" disabled>
              LOG IN
            </button>
            <li class="nav-item">
              <Search />
            </li>
            <li class="nav-item">
              <Order />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

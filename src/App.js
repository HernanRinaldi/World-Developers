import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home.jsx";
import Create from "./Components/Create/Create";
import Loging from "../src/Components/Loging/Loging";
import Nav from "./Components/Nav/Nav"
import HotelDetail from './Components/HotelDetail/HotelDetail.jsx'
import Footer from './Components/Footer/Footer'
// import RoomDetail from "./Components/RoomDetail/RoomDetail";

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/home/dashboard" component={ Create }></Route>
        <Route exact path="/home/loging" component={ Loging }></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/home" component={Home} />
        <Route path='/hotel/:id' component={HotelDetail} />
        {/* <Route path='/hotel/room/:id' component={RoomDetail}/> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


// import "./App.css";
// import { Route, Switch } from "react-router-dom";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import Home from "./Components/Home/Home.jsx";

// function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={LandingPage}></Route>
//       <Route path="/home" component={Home} />
//     </Switch>
//   );
// }

// export default App;
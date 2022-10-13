import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home.jsx";
// import HotelDetail from './Components/HotelDetail/HotelDetail.jsx'
// import RoomDetail from "./Components/RoomDetail/RoomDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/home" component={Home} />
      {/* <Route path='/hotel/:id' component={HotelDetail} />
      <Route path='/hotel/room/:id' component={RoomDetail}/> */}
    </Switch>
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
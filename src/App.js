import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;

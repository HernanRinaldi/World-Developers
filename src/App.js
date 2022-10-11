//import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'

function App() {
  return (
    <div className="">
      <Switch>
        {/* <Route path='/' component={LandingPage} ></Route> */}
        <Route path='/home' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

import './style.css';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Switch>
        <Route exact path = '/' component ={Home}/>
        <Route path = '/about' component ={About}/>
        <Route path = '/sign-up' component ={SignUp}/>
        <Route path = '/sign-in' component ={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


import './style.css';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Switch>
        <Route exact path = '/' component ={Home}/>
        <Route path = '/about' component ={About}/>
        <Route path = '/contact' component ={Contact}/>
        <Route path = '/sign-up' component ={SignUp}/>
        <Route path = '/sign-in' component ={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

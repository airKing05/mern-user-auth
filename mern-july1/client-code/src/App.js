
import './App.css';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <About/>
     <SignUp/>
     <Signin/>
    </div>
  );
}

export default App;

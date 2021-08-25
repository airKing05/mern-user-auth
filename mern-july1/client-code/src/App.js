
import './App.css';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <SignUp/>
     <Signin/>
    </div>
  );
}

export default App;

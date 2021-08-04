import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import BienVenido from './components/BienVenido';

function App() {
  return (
    <div className="App">
     {/* <Greet />
     <Welcome /> */}
     <Hello /> <BienVenido/>
    </div>
  );
}

export default App;

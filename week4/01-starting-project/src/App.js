import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Async from './components/Async';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <LifecycleA />
        <h1 className='error' >Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline />
        <UserGreeting />
        <ParentComponent />
        <NameList />
        <Stylesheet primary={true} />  
        {/* <Greeting />
        <Async /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;

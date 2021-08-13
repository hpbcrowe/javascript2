import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import BienVenido from './components/BienVenido';
import Message from './components/Message';
import Counter from './components/Counter';
import React from 'react';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import DynamicProp from './components/DynamicProp';
import CodeUpdate from './components/CodeUpdate';

function App() {
  return (
   <header className="App-header">
     <Counter />
     <Message />
     <FunctionClick />
     <ClassClick />
     <EventBind/>
     <DynamicProp name="Ben"/>
     <CodeUpdate />
     {/* <p>Vishwas Took the Logo out, I put it back.</p> */}
     <img src={logo} className="App-logo" alt="logo"/>
     {/* <p>I think it looks better with the logo.</p> */}
     <p>I was able to complete the stretch challenges.</p>
     <Welcome name="Bruce"  heroName="Batman" />
     <Welcome name="Clark" heroName="Superman" />
     <Welcome name="Diana" heroName="Wonderwoman" />
    <div className="App">
     <Greet name="Bruce" heroName="Batman">
      <p>This is children props</p>
       </Greet> 
     <Greet name="Clark" heroName="Superman">
       <button>Action</button>
     </Greet>
     <Greet name="Diana" heroName="Wonderwoman" />


     {/* <Hello />  <BienVenido />  */}
     
    </div>
    </header>

    
 

    
  );
}

export default App;

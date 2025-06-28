import './App.css';
import About from "./About"
import React from 'react';
import A, { Amarjeet, Amarjeet1} from "./Amarjeet"
// import A -- > Default Export, { Amarjeet, Amarjeet1}-- > Name Export from "./Amarjeet" 


function App() {

  return (
    <div className="App">
      <About></About>  
      <Amarjeet></Amarjeet>
      <A></A>
      <Amarjeet1></Amarjeet1>
    </div>
  );
}

export default App;

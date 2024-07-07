import './App.css';
import React, { useState } from 'react';

function App() {

  let textInput = React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState('useState'); //useState

  function f1(arg) {
    console.log('f1 works ' + arg);
  }

  function showInput(event) {
    console.log('input');
    // console.log(event.target.value);
    console.log(textInput.current.value);
    textOut.current.innerHTML = textInput.current.value; //выводит на экран то,что написано в консоли инпута(ввода)
    setOutput(textInput.current.value); //useState
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Button</h2>
        <button onClick={()=>f1(1)}>Push</button>
      </section>
      <section>
        <h2>Double click+mouse move</h2>
        <div className='test' onDoubleClick={()=>f1(2)}></div>
      </section>
      <section>
        <h2>Input</h2>
        <input type="text" onInput={showInput} ref={textInput}/>
        <p ref={textOut}></p>
        <h3>{output}</h3>
      </section> 
    </> //h3 output - useState
  );

};

export default App;
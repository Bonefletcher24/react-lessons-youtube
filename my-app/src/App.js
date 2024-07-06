import './App.css';
import React from 'react';

function App() {

  let textInput = React.createRef();
  let textOut = React.createRef();


  function f1(arg) {
    console.log('f1 works ' + arg);
  }

  function showInput(event) {
    console.log('input');
    // console.log(event.target.value);
    console.log(textInput.current.value);
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
      </section>
    </>
  );

};

export default App;
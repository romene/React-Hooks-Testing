import React, {useState} from 'react';
import './App.css';

function Hooks(props) {

  //call useState [value, function to set the value] = the initial value  
  const [count, setCount] = useState(props.initialValue)
  const [text, setText] = useState("")

  
  console.log(text)
  return (
    <div className="App">
      <h1>The Current {text || "number"} is {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(props.initialValue)}>Reset Counter</button>
      <button onClick={() => setCount(count - 1)}>Sub 1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

Hooks.defaultProps = {
  initialValue: 0
}


export default Hooks;

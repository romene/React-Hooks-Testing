import React, {useState} from 'react';
import './App.css';

function Hooks(props) {

  //call useState [value, function to set the value] = the initial value  
  const [count, setCount] = useState(props.initialValue)


  console.log(props)
  console.log(count)
  return (
    <div className="App">
      <h1>The Current count is {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(props.initialValue)}>Reset Counter</button>
      <button onClick={() => setCount(count - 1)}>Sub 1</button>
    </div>
  );
}

Hooks.defaultProps = {
  initialValue: 0
}


export default Hooks;

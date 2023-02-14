
import './Test.css';
import React from 'react';

function Test(props) {
  return (<div>
    <h1>Test Component is loading</h1>
    <h2>Add Result</h2>
    <p>a={props.a}</p>
    <p>b={props.b}</p>
    <p>add={props.a+props.b}</p>
    
    </div>
  );
    
} 

export default Test;

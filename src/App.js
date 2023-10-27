import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
import Check from './check';
import LabeledCheck from './LabeledCheck';

function App() {
  const allNames = ["Jēkabs", "Markus", "Klucis"];
  const results = [7, 43, 101];
  const checkValues = [true, true, false];

  const helloJSX = allNames.map((name, index) => (
    <Hello key={index} name={name} />
  ));

  const counterJSX = results.map((result, index) => (
    <Counter key={index} result={result} />
  ));

  const checkJSX = checkValues.map((value, index) => (
    <Check key={index} value={value} />
  ));

  
  const labeledChecks = [
    {label:'Label 1', check:true},
    {label:'Label 2', check:true},
    {label:'Label 3', check:false},
  ];

  const labeledCheckJSX = labeledChecks.map((item, index) => (
    <LabeledCheck key={index} label={item.label} check={item.check} />
  ));


  return(
    <div>
      <h2>Hello:</h2>
      <ul>{helloJSX}</ul>
      <h2>Counter:</h2>
      {counterJSX}
      <h2>Check:</h2>
      {checkJSX}
      <h2>LabeledCheck:</h2>
      {labeledCheckJSX}
    </div>
  );
}
export default App;
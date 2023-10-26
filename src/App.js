import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
import Check from './check';
import LabeledCheck from './labeledCheck';

function App() {
  const allNames = ["Jēkabs", "Markus", "Klucis"];
  const results = [10, 35, 100];
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

  const labeledCheckJSX = labeledChecks.map((item, index) => (
    <LabeledCheck key={index} label={item.label} check={item.check} />
  ));

  return (
    <div>
      <h2>Hello Component:</h2>
      <ul>{helloJSX}</ul>
      <h2>Counter Component:</h2>
      {counterJSX}
      <h2>Check Component:</h2>
      {checkJSX}
      <h2>LabeledCheck Component:</h2>
      {labeledCheckJSX}
    </div>
  );
}
export default App;
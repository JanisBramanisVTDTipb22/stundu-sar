import React, { useState } from 'react';

function LabeledCheck(props) {
  const [isChecked, setIsChecked] = useState(props.check);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    {props,label}
  );
  }
export default LabeledCheck;
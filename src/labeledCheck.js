
import React, { useState } from 'react';

function LabeledCheck({ label, check }) {
  const [isChecked, setIsChecked] = useState(check);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {label}
      </label>
    </div>
  );
}

export default LabeledCheck;
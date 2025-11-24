import React, { useId } from 'react';
import { useState } from 'react';
import '@styles/sign_up.css';

const FloatingInput = ({ labelText, type = 'text' }) => {
  // 1. Manage the input's current value state
  const [value, setValue] = useState('');
  const id=useId()
  // 2. Determine if the label should be "floated" (shrunken and moved up)
  const isFloated = value.length > 0;
  
  return (
    <div className="input-group">
      <input
        id={id}
        type={type}
        className="form-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // The placeholder text is intentionally omitted since the label handles it.
      />
      
      {/* 3. The label is the "placeholder" that moves */}
      <label 
        htmlFor={id} 
        className={isFloated ? 'label-floated' : ''}
      >
        {labelText}
      </label>
    </div>
  );
};

// Usage Example: <FloatingInput id="email-phone" labelText="Email or phone" />
export default FloatingInput;
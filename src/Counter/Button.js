import React, { useState } from 'react';

const Button = () => {
  const [isTrue, setIsTrue] = useState(true);

  const handleButtonClick = () => {
    setIsTrue(!isTrue);
  };

  const buttonStyle = {
    backgroundColor: isTrue ? 'red' : 'blue',
    padding:'15px',
    borderRadius:'5px',
    margin:'30px',
    border:'none'

    // Add other styling properties as needed
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>
        Button
      </button>
    </div>
  );
};

export default Button;

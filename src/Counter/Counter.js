import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [circleColor, setCircleColor] = useState('#fad643');
  const buttonColor = '#07beb8';
  const squareColor = '#f2f4f3';

  const handleClick = () => {
    setCount(count + 1);
    console.log(count)
    setCircleColor(buttonColor);
  };
  const handleClick1 = () => {
    setCount(count + 1);
  };

  return (
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div style={{ backgroundColor: squareColor, width: '300px', height: '300px' }}>
        <div
          style={{
            backgroundColor: circleColor,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <span>{count}</span>
            <span onClick={handleClick1} style={{fontSize:'15px',textDecoration:'underline',cursor:'pointer'}}>Click to increase counter</span>

            </div>
         
        </div>
       
      </div>
      <div>
      <button style={{ backgroundColor: buttonColor,margin:'5px',border:'none',padding:'5px',borderRadius:'5px',cursor:'pointer'}} onClick={handleClick}>
        Change color
      </button>

      </div>
      

    </div>
     
     
    </>
  );
};

export default Counter;

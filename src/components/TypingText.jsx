import React, { useEffect } from 'react';
import Typed from 'typed.js';

function TypingText() {
    useEffect(() =>{
        const targetElement = document.querySelector('.auto-type');
    
        const options = {
          strings: [' DESIGNER', ' DEVELOPER'],
          typeSpeed: 150,
          backSpeed: 150,
          loop: true,
        };
    
        const typed = new Typed(targetElement, options);
    
        return () => {
          typed.destroy();
        };
      }, []);

  return (
    <>
        <span className="text-heading auto-type"></span>
    </>
  )
}

export default TypingText
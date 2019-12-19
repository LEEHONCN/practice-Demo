import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownMenuBox,
  DropdownMenuBoxItem,
  Title
} from './style';



const DropdownMenu = (props) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.addEventListener('mouseenter', () => setShow(true));
    ref.current.addEventListener('mouseleave', () => setShow(false));
    return () => {
      ref.current.removeEventListener('mouseenter', () => setShow(true)); 
      ref.current.removeEventListener('mouseleave', () => setShow(false));
    }
  })

  return (
    <>
      <a ref={ref}>这是一个button</a>
      <DropdownMenuBox style={ show ? { display: 'block' } : { display: 'none' }}>
        {
          props.menu.map((item) => 
            <DropdownMenuBoxItem>
              <Title>{item.menuName}</Title>
            </DropdownMenuBoxItem>    
          )
        }  
      </DropdownMenuBox>
  </>
  );
}


export default DropdownMenu;


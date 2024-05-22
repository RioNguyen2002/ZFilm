import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ScrollOnTop(props) {
     const location = useLocation();
     useEffect(() => {
          window.scrollTo(0, 0);

     }, [location])
     return (

          <div className=" full scrollbar scrollbar-thin scrollbar-thumb-red">
               {props.children}
          </div>


     )
}

export default ScrollOnTop

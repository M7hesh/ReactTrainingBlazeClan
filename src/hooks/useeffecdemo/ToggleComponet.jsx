import React, {useState} from 'react';

import MouseMoveComponent from './MouseMoveComponent';

const ToggleComponent=()=>{
    const [show, updateShow]= useState(true);

    return (
        <div>
            <h1>The Demo for UseEffect</h1>
          <button onClick={()=> updateShow(!show)}>Toggle</button>
          {
             show && <MouseMoveComponent></MouseMoveComponent>
          }
          <hr/>
          <div>
            <strong>The Toggle Component</strong>
          </div>
        </div>
    );
    
};

export default ToggleComponent;
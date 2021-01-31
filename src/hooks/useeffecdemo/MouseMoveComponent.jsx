import React, {useState, useEffect} from 'react';

const MouseMoveComponent=()=>{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);


    const getMousePostion=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
        console.log(`x = ${x} && y = ${y}`);
    };

    useEffect(()=>{
        // componentDidMount
        console.log('Mouse Move Called');
        window.addEventListener('mousemove', getMousePostion);
        return ()=>{
            // componentWillUnMount
            console.log('Unmounted the component');
            window.removeEventListener('mousemove', getMousePostion);
        };
    },[]);

    return (
        <div>
                USe Effect x = {x} && y = {y}
        </div>
    );

}

export default MouseMoveComponent;
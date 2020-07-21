import React, { useState, ChangeEvent, useEffect } from 'react';

export default function ColorPicker(props: {color?: string}) {
    const [color, setColor] = useState('');
    const style = {
        width: '100px',
        height: '100px'
    }

    // This was not part of the task, but since you covered the case
    // of prop change here it's important to note that the standard
    // way to do it is to use getDerivedStateFromProps:
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // 
    // (but personally I wouldn't do it here because if a user picks a color,
    //  and later the initial color from the property changes, we don't expect
    //  the color to change to the new property value)
    useEffect(() => {
        props.color && setColor(props.color);
    }, []);

    function colorChangedHandler(event: ChangeEvent<HTMLInputElement>) {
        const color = event.target.value;
        setColor(color);
    }

    return(
        <>
            <input type="color" value={color} onChange={colorChangedHandler}/>
            <div style={{...style, backgroundColor: color}}></div>
        </>
    )
}

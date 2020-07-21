import React, { useState, ChangeEvent, useEffect } from 'react';

export default function ColorPicker(props: {color?: string}) {
    const [color, setColor] = useState(props.color || '');
    const style = {
        width: '100px',
        height: '100px'
    }

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
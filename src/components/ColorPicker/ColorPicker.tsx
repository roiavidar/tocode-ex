import React, { useState, ChangeEvent, useEffect } from 'react';

export default function ColorPicker(props: {color?: string}) {
    const [color, setColor] = useState('');
    const style = {
        width: '100px',
        height: '100px'
    }

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
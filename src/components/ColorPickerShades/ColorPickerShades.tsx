import React, { useState, ChangeEvent } from 'react';
import ColorShades from './ColorShades';

export default function ColorPickerShades() {
    const [color, setColor] = useState('');

    function colorChangedHandler(event: ChangeEvent<HTMLInputElement>) {
        const color = event.target.value;
        setColor(color);
    }

    return (
        <>
            <input type="color" onChange={colorChangedHandler} />
            <div>
                <ColorShades color={color}/>
            </div>
        </>
    )
};
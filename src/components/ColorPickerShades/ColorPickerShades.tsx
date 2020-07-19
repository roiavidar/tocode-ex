import React, { useState, ChangeEvent } from 'react';
import ColorShades from './ColorShades';

export default function ColorPickerShades() {
    const [color, setColor] = useState('');

    function onColorChanged(event: ChangeEvent<HTMLInputElement>) {
        const color = event.target.value;
        setColor(color);
    }

    return (
        <>
            <input type="color" onChange={onColorChanged} />
            <div>
                <ColorShades color={color}/>
            </div>
        </>
    )
};
import React, { useState, ChangeEvent, useEffect } from 'react';

export default function ColorPicker(props: {color?: string}) {
    const {color} = props;
    const [selectedColor, setSelectedColor] = useState(color || '');
    const style = {
        width: '100px',
        height: '100px'
    }

    function colorChangedHandler(event: ChangeEvent<HTMLInputElement>) {
        const color = event.target.value;
        setSelectedColor(color);
    }

    return(
        <div>
            <input type="color" value={selectedColor} onChange={colorChangedHandler}/>
            <div style={{...style, backgroundColor: selectedColor}}></div>
        </div>
    )
}

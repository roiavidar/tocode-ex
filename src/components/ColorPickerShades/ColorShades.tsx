import React from 'react';
import tinycolor from 'tinycolor2';

export default function ColorShades(props: {color: string, numberOfShades: number}) {
    const {color, numberOfShades} = props;
    const shades: number[] = [...Array(numberOfShades)];
    const style = {
        display: 'inline-block',
        width: '100px',
        height: '100px'
    }
    const selectedColor = tinycolor(color);

    return (
        <>
            {
                shades.map((item: number, index: number) => {
                    selectedColor.setAlpha((index + 1) / numberOfShades);
                    return (
                        <div
                            style={{...style, backgroundColor: selectedColor.toRgbString()}}> 
                        </div>
                )})
            }
        </>
    )
}
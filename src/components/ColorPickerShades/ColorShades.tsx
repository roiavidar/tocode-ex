import React from 'react';
import { ColorShadesPropsModel } from './ColorShadesPropsModel';
var tinycolor = require("tinycolor2");

export default function ColorShades(props: ColorShadesPropsModel) {
    const shades: number[] = [...Array(10)];
    const style = {
        display: 'inline-block',
        width: '100px',
        height: '100px'
    }

    const color = tinycolor(props.color);

    return (
        <>
            {
                shades.map((item: number, index: number) => {
                    color.setAlpha((index + 1) / 10);
                    return (
                        <div
                            style={{...style, backgroundColor: color.toRgbString()}}> 
                        </div>
                )})
            }
        </>
    )
}
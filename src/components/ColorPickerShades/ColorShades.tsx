import React from 'react';
import { ColorShadesPropsModel } from './ColorShadesPropsModel';
// It's nicer to stay with one import syntax:
// import tinycolor from 'tinycolor2';
var tinycolor = require("tinycolor2");

export default function ColorShades(props: {color: string}) {
    const numberOfShades = 10;
    const shades: number[] = [...Array(numberOfShades)];
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
                    color.setAlpha((index + 1) / numberOfShades);
                    return (
                        <div
                            style={{...style, backgroundColor: color.toRgbString()}}> 
                        </div>
                )})
            }
        </>
    )
}

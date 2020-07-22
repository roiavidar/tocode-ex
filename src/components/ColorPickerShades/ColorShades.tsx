import React from 'react';
import ColorShadesGenerator from './ColorShadesGenerator';

const colorShadesGenerator = new ColorShadesGenerator();

export default function ColorShades(props: {color: string, numberOfShades: number}) {
    const {color, numberOfShades} = props;
    const style = {
        display: 'inline-block',
        width: '100px',
        height: '100px'
    }

    const shades = colorShadesGenerator.getShades(color, numberOfShades);

    return (
        <div>
            {
                shades.map((shadeColor: string, index: number) => {
                    return (
                        <div
                            style={{...style, backgroundColor: shadeColor}}> 
                        </div>
                )})
            }
        </div>
    )
}
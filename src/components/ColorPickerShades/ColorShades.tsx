import React from 'react';
import tinycolor from 'tinycolor2';
import _ from 'lodash';

export default function ColorShades(props: {color: string, numberOfShades: number}) {
    const {color, numberOfShades} = props;
    const style = {
        display: 'inline-block',
        width: '100px',
        height: '100px'
    }
    const selectedColor = tinycolor(color);

    return (
        <div>
            {
                _.range(numberOfShades).map((item: number, index: number) => {
                    selectedColor.setAlpha((index + 1) / numberOfShades);
                    return (
                        <div
                            style={{...style, backgroundColor: selectedColor.toRgbString()}}> 
                        </div>
                )})
            }
        </div>
    )
}
import React from 'react';

export function GameBoard(props: {
    tryToHit: (box: number) => void,
    boxes: number,
    target: number
}) {
    const { tryToHit, boxes, target} = props;
    const inputBoxes: number[] =  [...Array(boxes)];
    const targetStyle = { backgroundColor: 'red'};
    const regularBoxStyle = { backgroundColor: 'grey '};

    return (
        <div>
            {
                inputBoxes.map((box: number, index: number) => <input 
                                                    type="text"
                                                    onClick={() => { tryToHit(index) }}
                                                    style={index === target ? targetStyle: regularBoxStyle} />)
            }
        </div>
    )
}
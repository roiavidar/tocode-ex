import React from 'react';

export function GameBoard(props: {
    hit: () => void,
    miss: () => void,
    boxes: number,
    target: number
}) {
    const inputBoxes: number[] =  [...Array(props.boxes)];
    const targetStyle = { backgroundColor: 'red'};
    const regularBoxStyle = { backgroundColor: 'grey '};

    return (
        <>
            {
                inputBoxes.map((box: number, index: number) => <input 
                                                    type="text"
                                                    onClick={index === props.target ? props.hit : props.miss}
                                                    style={index === props.target ? targetStyle: regularBoxStyle} />)
            }
        </>
    )
}
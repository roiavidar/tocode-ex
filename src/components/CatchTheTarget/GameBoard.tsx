import React from 'react';
import _ from 'lodash';

export function GameBoard(props: {
    tryToHit: (box: number) => void,
    boxes: number,
    target: number
}) {
    const { tryToHit, boxes, target} = props;
    const targetStyle = { backgroundColor: 'red'};
    const regularBoxStyle = { backgroundColor: 'grey '};

    return (
        <div>
            {
                _.range(boxes).map((box: number, index: number) => <input 
                                                    type="text"
                                                    onClick={() => tryToHit(index) }
                                                    style={index === target ? targetStyle: regularBoxStyle} />)
            }
        </div>
    )
}
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

    // Very hard to read
    // some tips:
    // 1. Destructure props on entry, so you'll never have props.hit inside the function
    //    use const { hits, miss } = props;
    
    // 2. Create the <input /> in another helper function
    //    that would have given you:
    //    inputBoxes.map(renderInputBox);
    return (
        <div>
            {
                _.range(boxes).map((box: number, index: number) => <input 
                                                    type="text"
                                                    onClick={() => { tryToHit(index) }}
                                                    style={index === target ? targetStyle: regularBoxStyle} />)
            }
        </div>
    )
}

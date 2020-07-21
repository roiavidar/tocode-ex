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

    // Very hard to read
    // some tips:
    // 1. Destructure props on entry, so you'll never have props.hit inside the function
    //    use const { hits, miss } = props;
    
    // 2. Create the <input /> in another helper function
    //    that would have given you:
    //    inputBoxes.map(renderInputBox);
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

import React, { useState, ChangeEvent } from 'react';
import { MultiInputComponent, MultiInputChildren} from './MultiInput.model';

const multiInputComponent: MultiInputComponent =  function MultiInput(props: {inputsNumber: number, children: MultiInputChildren}) {
    const [text, setText] = useState('');

    const inputsNumber: number[] = [...Array(props.inputsNumber)];

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
       setText(event.target.value);
    }
    
    return (
        <>
            {
                inputsNumber.map(() => props.children({text, onChange: onChangeHandler}))
            }
        </>   
    )
}

export default multiInputComponent;
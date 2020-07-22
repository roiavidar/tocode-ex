import React, { useState, ChangeEvent } from 'react';
import {MultiInputChildren} from './MultiInput.model';

export default function MultiInput(props: {inputsNumber: number, children: MultiInputChildren}) {
    const {inputsNumber, children} = props;
    const [text, setText] = useState('');

    const selectedInputsNumber: number[] = [...Array(inputsNumber)];

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
       setText(event.target.value);
    }
    
    return (
        <>
            {
                selectedInputsNumber.map(() => children({text, onChange: onChangeHandler}))
            }
        </>   
    )
}
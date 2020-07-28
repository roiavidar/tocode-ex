import React, { useState, ChangeEvent } from 'react';
import {MultiInputChildren} from './MultiInput.model';
import _ from 'lodash';

export default function MultiInput(props: {inputsNumber: number, children: MultiInputChildren}) {
    const {inputsNumber, children} = props;
    const [text, setText] = useState('');

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
       setText(event.target.value);
    }
    
    return (
        <div>
            {
                _.range(inputsNumber).map(() => children({text, onChange: onChangeHandler}))
            }
        </div>   
    )
}


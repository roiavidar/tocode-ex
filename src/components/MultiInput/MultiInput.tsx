import React, { useState, ChangeEvent } from 'react';
import {MultiInputChildren} from './MultiInput.model';

// This is too long. What's wrong with the simple:
// function MultiInput(props: { inputsNumber: number }) {
// }

const multiInputComponent: MultiInputComponent =  function MultiInput(props: MultiInputPropsModel) {
    const [text, setText] = useState('');

    const inputsNumber: number[] = [...Array(props.inputsNumber)];

    // Hi - I think this will work better using render props
    const inputWithProps = React.cloneElement(props.children, {...props.children.props, value: text, onChange: onChangeHandler});

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

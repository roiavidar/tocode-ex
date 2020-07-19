import React, { useState, ChangeEvent } from 'react';
import { MultiInputPropsModel, MultiInputComponent} from './MultiInput.model';

const multiInputComponent: MultiInputComponent =  function MultiInput(props: MultiInputPropsModel) {
    const [text, setText] = useState('');

    const inputsNumber: number[] = [...Array(props.inputsNumber)];
    const inputWithProps = React.cloneElement(props.children, {...props.children.props, value: text, onChange: onChangeHandler});

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
       setText(event.target.value);
    }
    
    return (
        <>
            {
                inputsNumber.map(() => inputWithProps)
            }
        </>   
    )
}

export default multiInputComponent;
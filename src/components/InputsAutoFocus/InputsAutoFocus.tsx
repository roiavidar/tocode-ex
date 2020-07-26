import React, { useState } from 'react';
import InputAutoFocus from './InputAutoFocus';

export default function InputsAutoFocus(props: {
    inputsNumber: number
}) {
    const {inputsNumber} = props;
    const initialInputs = Array(inputsNumber).fill('');
    const [characters, setCharacters] = useState<string[]>(initialInputs);
    const [currentFocus, setCurrentFocus] = useState<number>(0);

    function updateState(newValue: string, index: number) {
        const newFocus = getNextIndex(index);
        setCurrentFocus(newFocus);
        setCharacters([...characters.slice(0,index), newValue, ...characters.slice(index + 1, characters.length)]);   
    }

    function getNextIndex(index: number) {
        if (index + 1 === characters.length) {
            return 0;
        } else {
            return index + 1;
        }
    }

    return (
        <div>
        {
            characters.map((char: string, index: number) => (
                <InputAutoFocus
                    key={index}
                    value={char}
                    updateValue={(value: string) => {updateState(value, index)}}
                    focus={currentFocus === index} />
            ))
        }
        </div>
    )
}
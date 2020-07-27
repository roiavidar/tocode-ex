import React, { useState, ChangeEvent, RefObject } from 'react';
import Focusable from './Focusable';

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
                <Focusable 
                    key={index}
                    focus={currentFocus === index}
                    renderItem={(refElemToFocus: RefObject<any>) => (
                        <input 
                            ref={refElemToFocus}
                            key={index}
                            type="text"
                            value={char}
                            tabIndex={1}
                            onClick={() => { setCurrentFocus(index) }}
                            onKeyPress={() => { setCurrentFocus(index) }}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => { updateState(event.target.value, index) }} />
                    )} />
            ))
        }
        </div>
    )
}
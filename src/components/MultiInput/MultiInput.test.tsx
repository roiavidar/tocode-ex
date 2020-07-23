import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MultiInput from './MultiInput';
import { InputProps } from './MultiInput.model';

test('should convert time', async () => {
    const text = "hello";
    const { findAllByDisplayValue, findByDisplayValue } = render(
        <MultiInput inputsNumber={5}>
            {
                ({text, onChange}: InputProps) =>
                                    <input
                                        type='text'
                                        value={text}
                                        onChange={onChange}
                                        placeholder='type something...'>
                                    </input>
            }
        </MultiInput>
    );
    const inputElems = await findAllByDisplayValue('');
    fireEvent.change(inputElems[0], { target: { value:  text }});

    inputElems.forEach(() => {
        findByDisplayValue(text);
    });
})
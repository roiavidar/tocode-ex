import React from 'react';
import { render } from '@testing-library/react';
import InputsAutoFocus from './InputsAutoFocus';

test('should move to next input when typing', () => {
    const inputsAutoFocus = render(<InputsAutoFocus inputsNumber={6} />);
    const inputs = document.querySelectorAll('input');
    inputs[0].value = '1';
    expect(document.activeElement === inputs[1]);
});


test('should move to first input when reaching last input', () => {
    const inputsAutoFocus = render(<InputsAutoFocus inputsNumber={6} />);
    const inputs = document.querySelectorAll('input');
    inputs[5].value = '1';
    expect(document.activeElement === inputs[0]);
});


test('should continue to fourth input when clicking on third', () => {
    const inputsAutoFocus = render(<InputsAutoFocus inputsNumber={6} />);
    const inputs = document.querySelectorAll('input');
    inputs[2].click();
    inputs[2].value = '1';
    expect(document.activeElement === inputs[3]);
});
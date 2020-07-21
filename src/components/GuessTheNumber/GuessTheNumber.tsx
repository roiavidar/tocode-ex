import React, { useState, ChangeEvent } from 'react';
import { SecretNumber } from './SecretNumber';

export default function GuessTheNumber(props:{
    secretNumber: SecretNumber
}) {
    const [guessedNumber, setGussedNumber] = useState(0);
    const [message, setMessage] = useState('');
    const tooHigh = 'Too high';
    const tooLow = 'Too low';
    const successMessage = 'You found the number!';

    function numberGuessedHandler(event: ChangeEvent<HTMLInputElement>) {
        const number = Number(event.target.value);
        
        const result = props.secretNumber.guess(number);
        if (result === 0) {
            setMessage(successMessage);
        } else if (result < 0) {
            setMessage(tooHigh);
        } else if (result > 0) {
            setMessage(tooLow);
        }
        setGussedNumber(number);
    }

    return (
        <>
            <h3>Guess the number !</h3>
            <input type="number" value={guessedNumber} onChange={numberGuessedHandler}/>
            <div>{message}</div>
        </>
    );
}
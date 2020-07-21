import React, { useState, ChangeEvent } from 'react';
import { SecretNumber } from './SecretNumber';

export default function GuessTheNumber(props:{
    secretNumber: SecretNumber
}) {
    const { secretNumber } = props;
    const [guessedNumber, setGussedNumber] = useState(0);
    const [message, setMessage] = useState('');
    const tooHigh = 'Too high';
    const tooLow = 'Too low';
    const successMessage = 'You found the number!';
    const SECRET_NUMBER = 0;

    function numberGuessedHandler(event: ChangeEvent<HTMLInputElement>) {
        const number = Number(event.target.value);
        
        const result = secretNumber.guess(number);
        if (result === SECRET_NUMBER) {
            setMessage(successMessage);
        } else if (result < SECRET_NUMBER) {
            setMessage(tooLow);
        } else if (result > SECRET_NUMBER) {
            setMessage(tooHigh);
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
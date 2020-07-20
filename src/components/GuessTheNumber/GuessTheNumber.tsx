import React, { useState, useEffect, ChangeEvent } from 'react';

export default function GuessTheNumber() {
    const maxGuessedNumber = 1000;
    const [guessedNumber, setGussedNumber] = useState(0);
    const [randomNumber] = useState(Math.floor(Math.random() * maxGuessedNumber) + 1);
    const [trick, setTrick] = useState(false);
    const [message, setMessage] = useState('');
    const tooHigh = 'Too high';
    const tooLow = 'Too low';
    const truthPercentage = 0.8;
    const successMessage = 'You found the number!';

    function trickTheUser() {
        if (Math.random() >= truthPercentage) {
            setTrick(true);
        } else {
            setTrick(false);
        }
    }

    function numberGuessedHandler(event: ChangeEvent<HTMLInputElement>) {
        console.log(randomNumber);
        const number = Number(event.target.value);

        trickTheUser();

        if (number > randomNumber) {
            const message = trick ? tooLow : tooHigh;
            setMessage(message);
        } else if (number < randomNumber) {
            const message = trick ? tooHigh : tooLow;
            setMessage(message);
        } else if (number === randomNumber) {
            setMessage(successMessage);
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
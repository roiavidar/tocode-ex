import React, { useState, useEffect, ChangeEvent } from 'react';

export default function GuessTheNumber() {
    const [guessedNumber, setGussedNumber] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [message, setMessage] = useState('');
    const tooHigh = 'Too high';
    const tooLow = 'Too low';
    const truthPercentage = 0.8;
    const successMessage = 'You found the number!';

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 1000) + 1);
    }, []);

    function trickTheUser() {
        return Math.random() >= truthPercentage;
    }

    function onNumberGuessed(event: ChangeEvent<HTMLInputElement>) {
        console.log(randomNumber);
        const number = Number(event.target.value);
    
        if (number > randomNumber) {
            const message = trickTheUser() ? tooLow : tooHigh;
            setMessage(message);
        } else if (number < randomNumber) {
            const message = trickTheUser() ? tooHigh : tooLow;
            setMessage(message);
        } else if (number === randomNumber) {
            setMessage(successMessage);
        }
        setGussedNumber(number);
    }

    return (
        <>
            <h3>Guess the number !</h3>
            <input type="number" value={guessedNumber} onChange={onNumberGuessed}/>
            <div>{message}</div>
        </>
    );
}
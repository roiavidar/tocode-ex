import React, { useState, useEffect, ChangeEvent } from 'react';

export default function GuessTheNumber() {
    const [guessedNumber, setGussedNumber] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [message, setMessage] = useState('');
    const tooHigh = 'Too high';
    const tooLow = 'Too low';
    const truthPercentage = 0.8;
    const successMessage = 'You found the number!';

    // Why do you need the useEffect here?
    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 1000) + 1);
    }, []);

    function trickTheUser() {
        return Math.random() >= truthPercentage;
    }

    function onNumberGuessed(event: ChangeEvent<HTMLInputElement>) {
        console.log(randomNumber);
        const number = Number(event.target.value);
        // Note that trickTheUser() will return a different result each time you call 
        // it.
        // While as we prefer to have "render" returning the same result every time.
        // (assuming state/props did not change)

        // Can you think of another way to trick the user, keeping render consistent?
    
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
            <input type="text" value={guessedNumber} onChange={onNumberGuessed}/>
            <div>{message}</div>
        </>
    );
}

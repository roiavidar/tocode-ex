import React, { useState, ChangeEvent } from 'react';

const timeConverter = function TimeConverter() {
    const [time, setTime] = useState(0);
    const timeRatios = [1, 60, 3600];

    function convertToSeconds(ratio: number, event: ChangeEvent<HTMLInputElement>) {
        setTime(Number(event.target.value) * ratio);
    }

    return (
        <>
            {
                timeRatios.map((ratio: number) => <input type="number" value={time / ratio} onChange={convertToSeconds.bind(null, ratio)} />)
            }
        </>
    )
}

export default timeConverter;
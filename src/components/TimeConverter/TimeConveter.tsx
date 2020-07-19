import React, { useState, ChangeEvent } from 'react';

const timeConverter = function TimeConverter() {
    const [time, setTime] = useState(0);
    const timeRatios = [1, 60, 3600];

    function convertToSeconds(ratio: number, event: ChangeEvent<HTMLInputElement>) {
        setTime(Number(event.target.value) * ratio);
    }

    // Woudldn't it be nicer to skip the Fragment and the inner curlies?
    // i.e. return timeRatios.map(...)
    return (
        <>
            {
            // I love bind, but I must say I'm in the minority here
            // most React devs these days will use arrow functions
            // so better to use:
            // onChange={(e) => convertToSeconds(ratio, e)}
                timeRatios.map((ratio: number) => <input
                    type="text"
                    value={time / ratio}                    
                    onChange={convertToSeconds.bind(null, ratio)} />)
            }
        </>
    )
}

export default timeConverter;

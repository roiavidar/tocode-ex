import React, { useState, ChangeEvent } from 'react';
import ITimeConverterLogic from './ITimeConverterLogic';

export default function TimeConverter(props: {
    timeConverterLogic: ITimeConverterLogic
}) {
    const {timeConverterLogic} = props;
    const [times, setTimes] = useState(timeConverterLogic.timeRatios);

    function convertToSecondsHandler(event: ChangeEvent<HTMLInputElement>) {
        timeConverterLogic.time = Number(event.target.value);
        setTimes(timeConverterLogic.timeRatios);
    }

    return (
        <div>
            {times.map((time: number) => <input 
                                                type="number"
                                                value={time}
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => { convertToSecondsHandler(event)}} />)}
        </div> 
    )
}
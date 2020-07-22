import React, { useState, ChangeEvent } from 'react';
import ITimeConverterLogic from './ITimeConverterLogic';

export default function TimeConverter(props: {
    timeConverterLogic: ITimeConverterLogic
}) {
    const {timeConverterLogic} = props;
    const [times, setTimes] = useState(timeConverterLogic.times);

    function convertToSecondsHandler(event: ChangeEvent<HTMLInputElement>, index: number) {
        const ratio = timeConverterLogic.ratios[index];
        timeConverterLogic.setTimeInSeconds(Number(event.target.value), ratio);
        setTimes(timeConverterLogic.times);
    }

    return (
        <div>
            {times.map((time: number, index: number) => <input 
                                                type="number"
                                                value={time}
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => { convertToSecondsHandler(event, index)}} />)}
        </div> 
    )
}
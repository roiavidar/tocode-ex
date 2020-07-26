import React, { useRef, ChangeEvent, useEffect } from 'react';

export default function InputAutoFocus(props: {
    updateValue: (newValue: string) => void
    value: string,
    focus: boolean,
}) {
    const {updateValue, value, focus} = props;
    const refToInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(focus && refToInput.current) {
            refToInput.current.focus();
        }
    }, [focus]);


    return (
        <input 
            type="text"
            ref={refToInput}
            value={value}
            tabIndex={1}
            onChange={(event: ChangeEvent<HTMLInputElement>) => { updateValue(event.target.value) }} />
    )
}
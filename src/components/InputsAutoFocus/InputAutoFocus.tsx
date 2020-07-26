import React, { useRef, useEffect } from 'react';

export default function Focusable(props: {
    focus: boolean,
    children: JSX.Element
}) {
    const {children, focus} = props;
    const refToInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(focus && refToInput.current) {
            refToInput.current.focus();
        }
    }, [focus]);


    return (
       React.cloneElement(children, {ref: refToInput})
    )
}
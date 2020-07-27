import { useRef, useEffect, RefObject } from 'react';

export default function Focusable(props: {
    focus: boolean,
    renderItem: (refToElem: RefObject<any>) => JSX.Element
}) {
    const {focus, renderItem} = props;
    const refToElem = useRef<any>(null);

    useEffect(() => {
        if(focus && refToElem.current) {
            refToElem.current.focus();
        }
    }, [focus]);

    return (
       renderItem(refToElem)
    )
}
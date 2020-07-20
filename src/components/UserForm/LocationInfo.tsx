import React, { ChangeEvent } from 'react';

export default function LocationInfo(props: {
    country: string,
    setCountry: (country: string) => void,
    city: string,
    setCity: (city: string) => void
}) {
    const selectCountry = "Please type your country";
    const selectCity = "Please type your city"

    function handleCountry(event: ChangeEvent<HTMLInputElement>) {
        props.setCountry(event.target.value);
    }


    function handleCity(event: ChangeEvent<HTMLInputElement>) {
        props.setCity(event.target.value);
    }

    return (
        <div>
            <input type="text" value={props.country} onChange={handleCountry} placeholder={selectCountry}/>
            <input type="text" value={props.city} onChange={handleCity} placeholder={selectCity} />
        </div>
    )
}
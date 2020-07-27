import React, { ChangeEvent } from 'react';

export default function LocationInfo(props: {
    country?: string,
    setCountry?: (country: string) => void,
    city?: string,
    setCity?: (city: string) => void
}) {
    const {country, setCountry, city, setCity} = props;
    const selectCountry = "Please type your country";
    const selectCity = "Please type your city"

    function handleCountry(event: ChangeEvent<HTMLInputElement>) {
        setCountry && setCountry(event.target.value);
    }


    function handleCity(event: ChangeEvent<HTMLInputElement>) {
        setCity && setCity(event.target.value);
    }

    return (
        <div>
            <input type="text" value={country} onChange={handleCountry} placeholder={selectCountry}/>
            <input type="text" value={city} onChange={handleCity} placeholder={selectCity} />
        </div>
    )
}
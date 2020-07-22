import React from 'react';

export default function Summery(props: {
    userName: string,
    password: string,
    country: string,
    city: string
}) {
    const {userName, password, country, city} = props;
    return (
        <ul>
            <li>User name: {userName}</li>
            <li>Password: {password}</li>
            <li>Country: {country}</li>
            <li>City: {city}</li>
        </ul>
    )
}
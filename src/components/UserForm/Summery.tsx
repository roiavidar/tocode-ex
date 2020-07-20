import React from 'react';

export default function Summery(props: {
    userName: string,
    password: string,
    country: string,
    city: string
}) {
    return (
        <ul>
            <li>User name: {props.userName}</li>
            <li>Password: {props.password}</li>
            <li>Country: {props.country}</li>
            <li>City: {props.city}</li>
        </ul>
    )
}
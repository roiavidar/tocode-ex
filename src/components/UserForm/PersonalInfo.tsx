import React, { ChangeEvent } from 'react';

export default function PersonalInfo(props: {
    userName: string,
    setUserName: (userName: string) => void,
    password: string,
    setPassword: (password: string) => void
}) {
    const selectUserName = "Please type your user name";
    const selectPassword = "Please type your password"

    function handleUserName(event: ChangeEvent<HTMLInputElement>) {
        props.setUserName(event.target.value);
    }


    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        props.setPassword(event.target.value);
    }

    return (
        <div>
            <input type="text" value={props.userName} onChange={handleUserName} placeholder={selectUserName}/>
            <input type="password" value={props.password} onChange={handlePassword} placeholder={selectPassword} />
        </div>
    )
}
import React, { useState, ChangeEvent, FormEvent } from 'react'; 

export default function StateForm() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string>('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrorMsg("Password does not match");
        } else{
            setErrorMsg('');
        }
    }

    return (
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <label>
                User Name:
                <input type="text" value={userName} onChange={(event: ChangeEvent<HTMLInputElement>) => { setUserName(event.target.value) }}/>
            </label>
            <label>
                Password:
                <input type="text" value={password} onChange={(event: ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) }}/>
            </label>
            <label>
                Confirm Password:
                <input type="text" value={confirmPassword} onChange={(event: ChangeEvent<HTMLInputElement>) => { setConfirmPassword(event.target.value) }}/>
            </label>
            <div> { errorMsg }</div>
            <input type="submit" value="Submit" />
        </form>
    )
}
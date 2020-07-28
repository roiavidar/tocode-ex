import React, { useState, ChangeEvent, FormEvent } from 'react'; 
import useFormField from './useFormField';

export default function StateForm() {
    const [errorMsg, setErrorMsg] = useState<string>('');
    const userName = useFormField('userName');
    const password = useFormField('password');
    const confirmPassword = useFormField('confirmPassword');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (password.value !== confirmPassword.value) {
            setErrorMsg("Password does not match");
        } else{
            setErrorMsg('');
        }
    }

    return (
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <label>
                User Name:
                <input type="text" {...userName}/>
            </label>
            <label>
                Password:
                <input type="text" {...password}/>
            </label>
            <label>
                Confirm Password:
                <input type="text" {...confirmPassword}/>
            </label>
            <div> { errorMsg }</div>
            <input type="submit" value="Submit" />
        </form>
    )
}
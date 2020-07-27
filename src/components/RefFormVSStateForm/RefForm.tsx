import React, { ChangeEvent, FormEvent, useRef } from 'react'; 

// Usually we'll use a single ref on the form element
// and use querySelector to find the specific input items

export default function RefForm() {
    const userName = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    const errorMessage = useRef<HTMLDivElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (errorMessage.current) {
            if (password.current?.value !== confirmPassword.current?.value) {
                errorMessage.current.textContent = "Password does not match";
            } else{
                errorMessage.current.textContent = '';
            }
        }
    }

    function setUserName(event: ChangeEvent<HTMLInputElement>) {
        if (userName.current) {
            userName.current.value = event.target.value;
        }
    }


    function setPassword(event: ChangeEvent<HTMLInputElement>) {
        if (password.current) {
            password.current.value = event.target.value;
        }
    }

    function setConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
        if (confirmPassword.current) {
            confirmPassword.current.value = event.target.value;
        }
    }

    return (
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <label>
                User Name:
                <input ref={userName} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => { setUserName(event) }}/>
            </label>
            <label>
                Password:
                <input ref={password} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => { setPassword(event) }}/>
            </label>
            <label>
                Confirm Password:
                <input ref={confirmPassword} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => { setConfirmPassword(event) }}/>
            </label>
            <div ref={errorMessage}> { errorMessage.current?.textContent }</div>
            <input type="submit" value="Submit" />
        </form>
    )
}

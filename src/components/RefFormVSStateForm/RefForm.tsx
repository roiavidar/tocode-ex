import React, { ChangeEvent, FormEvent, useRef } from 'react'; 

export default function RefForm() {
    const form = useRef<HTMLFormElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const {password, confirmPassword, errorMessage} = getFormElements();

        if (password && confirmPassword && errorMessage) {
            if (password.value !== confirmPassword.value) {
                errorMessage.textContent = "Password does not match";
            } else{
                errorMessage.textContent = '';
            }
        }
    }

    function setUserName(event: ChangeEvent<HTMLInputElement>) {
        const {userName} = getFormElements();

        if (userName) {
            userName.value = event.target.value;
        }
    }


    function setPassword(event: ChangeEvent<HTMLInputElement>) {
        const {password} = getFormElements();

        if (password) {
            password.value = event.target.value;
        }
    }

    function setConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
        const {confirmPassword} = getFormElements();

        if (confirmPassword) {
            confirmPassword.value = event.target.value;
        }
    }

    function getFormElements(): { userName: HTMLInputElement | undefined | null, password: HTMLInputElement | undefined | null, confirmPassword: HTMLInputElement | undefined | null, errorMessage: HTMLDivElement | undefined | null} {
        let userName: HTMLInputElement | undefined | null;
        let password;
        let confirmPassword;
        let errorMessage;

        if (form.current) {
            userName = form.current.querySelector('.userName') as HTMLInputElement;
            password = form.current.querySelector('.password') as HTMLInputElement;
            confirmPassword = form.current.querySelector('.confirmPassword') as HTMLInputElement;
            errorMessage = form.current.querySelector('.errorMessage') as HTMLDivElement;
        }

        return {
            userName,
            password,
            confirmPassword,
            errorMessage
        }
    }

    return (
        <form ref={form} onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <label>
                User Name:
                <input className="userName" type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => { setUserName(event) }}/>
            </label>
            <label>
                Password:
                <input className="password" type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => { setPassword(event) }}/>
            </label>
            <label>
                Confirm Password:
                <input className="confirmPassword" type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => { setConfirmPassword(event) }}/>
            </label>
            <div className="errorMessage"></div>
            <input type="submit" value="Submit" />
        </form>
    )
}
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserForm } from './UserForm';
import StepsForm from './StepsForm';

const userNamePlaceHolder = "Please type your user name";
const passwordPlaceHolder = "Please type your password";
const countryPlaceHolder = "Please type your country";
const cityPlaceHolder = "Please type your city";
const backText = "Back";
const nextText = "Next";
const formTitle = "User Form:";
const stepsForm = new StepsForm();

test('renders user form elements', () => {
  const { getByText } = render(<UserForm stepsForm={stepsForm}/>);
  getByText(formTitle);
  getByText(backText);
  getByText(nextText);
});

test('move to next page', () => {
    const {findAllByPlaceholderText, getByText} = render(<UserForm stepsForm={stepsForm}/>);
    findAllByPlaceholderText(userNamePlaceHolder);
    const nextButton = getByText(nextText);
    nextButton.click();
    findAllByPlaceholderText(countryPlaceHolder);
})

test('go to previous page', () => {
    const {findAllByPlaceholderText, getByText} = render(<UserForm stepsForm={stepsForm}/>);
    const nextButton = getByText(nextText);
    nextButton.click();
    findAllByPlaceholderText(countryPlaceHolder);
    const backButton = getByText(backText);
    backButton.click();
    findAllByPlaceholderText(userNamePlaceHolder);;
})

test('print summery', async () => {
    const userName = 'Roi Avidar';
    const password = '123123';
    const country = 'Israel';
    const city = 'Tel Aviv';

    const {findAllByPlaceholderText, getByText} = render(<UserForm stepsForm={stepsForm}/>);
    const userNameEle = await findAllByPlaceholderText(userNamePlaceHolder);
    fireEvent.change(userNameEle[0], { target: { value:  userName }});

    const passwordEle = await findAllByPlaceholderText(passwordPlaceHolder);
    fireEvent.change(passwordEle[0], { target: { value: password}});

    let nextButton = getByText(nextText);
    nextButton.click();

    const countryEle = await findAllByPlaceholderText(countryPlaceHolder);
    fireEvent.change(countryEle[0], { target: { value: country}});

    const cityEle = await findAllByPlaceholderText(cityPlaceHolder);
    fireEvent.change(cityEle[0], { target: { value: city}});
    nextButton = getByText(nextText);
    nextButton.click();

    getByText(`${userName}`, { exact: false });
    getByText(`${password}`, { exact: false });
    getByText(`${country}`, { exact: false });
    getByText(`${city}`, { exact: false });
});
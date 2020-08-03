import React, { useState } from 'react';
import IStepsForm from './IStepsForm';

export function UserForm(props: {
    stepsForm: IStepsForm,
    children: JSX.Element[]
}) {
    const {stepsForm, children} = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const steps = children;
    const childProps = {userName, setUserName, password, setPassword, country, setCountry, city, setCity};
    const [currentStep, setCurrentStep] = useState(steps[0].type.name);
    
    stepsForm.setup({steps, currentStep});

    const userFormTitle = "User Form:";
    const prevText = "Back";
    const nextText = "Next";

    function onNextStepHandler() {
        const currentStep = stepsForm.next();
        setCurrentStep(currentStep.type.name);
    }


    function onPrevStepHandler() {
        const currentStep = stepsForm.back();
        setCurrentStep(currentStep.type.name);
    }

    return (
        <div>
            <h3>{userFormTitle}</h3>
            {
                props.children.map((child: JSX.Element) => {
                    return React.cloneElement(child, childProps)
                })
            }
            <div>
                <button
                    onClick={onPrevStepHandler}
                    disabled={stepsForm.firstStep}>
                        {prevText}
                </button>
                <button 
                    onClick={onNextStepHandler}
                    disabled={stepsForm.lastStep} >
                        {nextText}
                </button>
            </div>
        </div>
    )
}
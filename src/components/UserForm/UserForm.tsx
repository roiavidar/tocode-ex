import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import LocationInfo from './LocationInfo';
import Summery from './Summery';
import IStepsForm from './IStepsForm';

export function UserForm(props: {
    stepsForm: IStepsForm
}) {
    const {stepsForm} = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const steps = [
        <PersonalInfo 
            userName={userName}
            setUserName={setUserName}
            password={password}
            setPassword={setPassword} />,
        <LocationInfo 
            country={country}
            setCountry={setCountry} 
            city={city} 
            setCity={setCity} />,
        <Summery 
            userName={userName} 
            password={password} 
            country={country} 
            city={city}/>
      ];
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
                 React.cloneElement(stepsForm.currentStepElem)
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
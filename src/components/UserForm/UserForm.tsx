import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import LocationInfo from './LocationInfo';
import Summery from './Summery';

export function UserForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const userFormTitle = "User Form:";
    const prevText = "Back";
    const nextText = "Next";

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

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }

    function prevStep() {
        setCurrentStep(currentStep - 1);
    }

    return (
        <div>
            <h3>{userFormTitle}</h3>
            {
                steps.map((step: JSX.Element, index: number) => 
                    currentStep === index && React.cloneElement(step)
                )
            }
            <div>
                <button
                    onClick={prevStep}
                    disabled={0 === currentStep}>
                        {prevText}
                </button>
                <button 
                    onClick={nextStep}
                    disabled={steps.length - 1 === currentStep} >
                        {nextText}
                </button>
            </div>
        </div>
    )
}
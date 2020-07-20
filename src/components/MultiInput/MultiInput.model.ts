import { ChangeEvent } from "react";

export interface MultiInputPropsModel {
    inputsNumber: number;
    children: MultiInputChildren;
}

export interface InputProps {
    text: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type MultiInputChildren = (props: InputProps) => JSX.Element;
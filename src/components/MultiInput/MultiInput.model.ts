export interface MultiInputPropsModel {
    inputsNumber: number;
    children: JSX.Element;
}

export type MultiInputComponent = {
    (props: MultiInputPropsModel): JSX.Element;
};
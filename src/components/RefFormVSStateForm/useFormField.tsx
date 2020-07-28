import { useState, ChangeEvent } from "react";

export default function useFormField(name: string) {
    const [data, setter] = useState('');
  
    return {name, value: data, onChange(e: ChangeEvent<HTMLInputElement>) { return setter(e.target.value) } };
}
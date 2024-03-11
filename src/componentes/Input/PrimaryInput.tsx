import { ChangeEventHandler } from "react";
import { Input } from "@chakra-ui/react";

import "./primary-input.css";

interface PrimaryInput {
    name: string,
    value: string,
    onChance: ChangeEventHandler<HTMLInputElement>,
    label: string,
    placeholder: string

}

export default function PrimaryInput({ name, value, onChance, label, placeholder }: PrimaryInput) {
    return(
        <div className="input-container">
            <label className="label">{label}</label>
            <Input 
                variant='filled' 
                placeholder={placeholder}
                name={name} 
                value={value} 
                onChange={onChance} 
            />
        </div>
    )
    
}
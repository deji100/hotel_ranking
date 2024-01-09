import React from "react"

interface InputProps {
    type: string;
    css?: string;
    name: string;
    value?: string,
    placeholder?: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({type, css, name, value, placeholder, handleChange}) => {
    return (
       <div className="input">
            <label htmlFor={name} className={css}>{name}</label>
            <input type={type} id={name} className={css} placeholder={placeholder} name={name} value={value} onChange={handleChange} />
       </div>
    )
}

export default InputField
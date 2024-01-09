import React from "react"

interface InputProps {
    type: string;
    css: string;
    name: string;
    value?: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({type, css, name, value, handleChange}) => {
    return (
       <div className="input">
            <label htmlFor={name}>{name}</label>
            <input type={type} id={name} className={css} name={name} value={value} onChange={handleChange} />
       </div>
    )
}

export default InputField
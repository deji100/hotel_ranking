import React from "react";
import InputField from "../atoms/input-field"


interface FormProps {
    type: string;
    value: object;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Info {
    name: string;
    city: string;
    country: string;
    address: string;
    imgUrl: string
}

const Form: React.FC<FormProps> = ({type, handleSubmit, value, handleChange}) => {
    const obj: Info = value

    return (
        <>
            <h2>{type}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <InputField type="text" name="name" value={obj.name} css={""} handleChange={handleChange} />

                <InputField type="text" name="city" value={obj.city} css={""} handleChange={handleChange} />

                <InputField type="text" name="country" value={obj.country} css={""} handleChange={handleChange} />

                <InputField type="text" name="address" value={obj.address} css={""} handleChange={handleChange} />

                <InputField type="file" name="image" css={"img"} handleChange={handleChange} />
                
                <button>Submit</button>
        </form>
        </>
    )
}

export default Form;
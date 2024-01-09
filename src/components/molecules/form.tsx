import React from "react";
import InputField from "../atoms/input-field";
import SelectField from "../atoms/select-field"

interface FormProps {
    type: string;
    value: object;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

type HotelState = {
    id: string,
    name: string,
    city: string,
    country: string,
    address: string,
    imgUrl: string,
    chain?: HotelChain;
}

type HotelChain = {
    id: string;
    hotels: HotelState[];
  };

const Form: React.FC<FormProps> = ({type, handleSubmit, handleSelectChange, value, handleChange}) => {
    // @ts-expect-error last resort after trying some options
    const obj: HotelState = value


    return (
        <>
            <h2>{type}</h2>
            
            <form className="form" onSubmit={handleSubmit}>
                <InputField type="text" name="name" value={obj.name} css={""} handleChange={handleChange} />

                <InputField type="text" name="city" value={obj.city} css={""} handleChange={handleChange} />

                <InputField type="text" name="country" value={obj.country} css={""} handleChange={handleChange} />

                <InputField type="text" name="address" value={obj.address} css={""} handleChange={handleChange} />

                <SelectField value={value} handleSelectChange={handleSelectChange} />

                <InputField type="file" name="image" css={"img"} handleChange={handleChange} />
                
                <button>Submit</button>
        </form>
        </>
    )
}

export default Form;
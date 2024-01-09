import React from "react";
import Form from "../molecules/form"

interface CreateEditHotelProps {
    type: string;
    value: object;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateEditHotel: React.FC<CreateEditHotelProps> = ({type, handleChange, value, handleSelectChange, handleSubmit}) => {
    return (
        <div className="create-edit-form">
            <Form type={type} handleChange={handleChange} value={value} handleSelectChange={handleSelectChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default CreateEditHotel
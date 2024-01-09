import React from "react";
import { useSelector } from "react-redux";

interface SelectProps {
    value: object;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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

type RootState = {
    index: number;
    hotelSearch: string;
    hotels: HotelState[];
    filteredHotels: HotelState[];
}

const SelectField: React.FC<SelectProps> = ({handleSelectChange, value}) => {
    // @ts-expect-error last resort after trying some options
    const { hotels } = useSelector((state: RootState) => state.hotel)

    return (
        <div className="select-field">
            <h4 className="chain-title">Hotel Chain</h4>
                <br />

                {
                    hotels.length < 1 && (
                        <p>No available hotels</p>
                    )
                }
                {
                    hotels.length > 0 && (
                        // @ts-expect-error last resort after trying some options
                        <select multiple name="hotels" aria-label="Select a hotel" disabled={value?.chain?.hotels?.length < 1 ? false : true} onChange={handleSelectChange}>
                            {
                                // @ts-expect-error last resort after trying some options
                                hotels?.map(hotel => (
                                // @ts-expect-error last resort after trying some options
                                    value?.id !== hotel?.id && (
                                        <option key={hotel.id} value={JSON.stringify(hotel)}>{hotel.name}</option>

                                    )
                                ))
                            }
                        </select>
                    )
                }

        </div>
    )
}

export default SelectField;
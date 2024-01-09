import Hotel from "../molecules/hotel"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

interface HotelState {
    id: number,
    city: string,
    country: string,
    address: string,
    imUrl: string
}

interface RootState {
    index: number,
    hotelSearch: string,
    hotels: HotelState[],
    filteredHotels: HotelState[],
}

const Hotels = () => {
    const {hotels, filteredHotels} = useSelector((state: RootState) => state.hotel)
    const [allHotels, setAllHotels] = useState([])

    useEffect(() => {
        if (filteredHotels.length != 0) {
            setAllHotels(filteredHotels)
        }else {
            setAllHotels(hotels)
        }
    }, [filteredHotels, hotels])

    if (allHotels === null || allHotels === undefined || allHotels.length < 1) {
        return (
            <div style={{color: "#000", fontSize: "26px", paddingLeft: "20px"}}>There are no available hotels.</div>
        )
    }

    console.log(allHotels)
    return (
        <div className="hotels">
            <div className="inner">
                {
                   allHotels?.map(hotel => (
                        <Hotel key={hotel.id} hotel={ hotel } />
                    ))
                }
            </div>
        </div>
    )
}

export default Hotels;
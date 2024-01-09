import Hotel from "../molecules/hotel"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

type HotelState = {
    id: number,
    city: string,
    country: string,
    address: string,
    imUrl: string
}

type RootState = {
    index: number,
    hotelSearch: string,
    hotels: HotelState[],
    filteredHotels: HotelState[],
}

const Hotels = () => {
    // @ts-expect-error hetol slice can't be detected
    const {hotels, filteredHotels, hotelSearch} = useSelector((state: RootState) => state.hotel)
    const [allHotels, setAllHotels] = useState([])

    useEffect(() => {
        if (filteredHotels.length != 0 && hotelSearch) {
            setAllHotels(filteredHotels)
        }else {
            setAllHotels(hotels)
        }
    }, [filteredHotels, hotels, hotelSearch])

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
                        // @ts-expect-error id does not exist on type never
                        <Hotel key={hotel.id} hotel={ hotel } />
                    ))
                }
            </div>
        </div>
    )
}

export default Hotels;
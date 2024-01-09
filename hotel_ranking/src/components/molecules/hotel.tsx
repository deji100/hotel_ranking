import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delete_hotel } from "../../state-manager/hotels"


interface HotelProps {
    hotel: object
}

interface Info {
    id: string;
    name: string;
    city: string;
    country: string;
    address: string;
    imgUrl: string
}

const Hotel: React.FC<HotelProps> = ({hotel}) => {
    const dispatch = useDispatch()
    const obj : Info = hotel

    const handleDelete = (id: string) => {
        dispatch(delete_hotel({id}))
    }

    return (
        <div className="hotel" key={obj?.id}>
            <div className="img-container">
                <img className="hotel-image" src={obj?.imgUrl} alt="Hotel" />
            </div>
            <div className="content">
                <p className="name">Name: <span>{obj.name}</span></p>
                <div className="city-country">
                    <p>City: <span>{obj?.city}</span></p>
                    <p>Country: <span>{obj?.country}</span></p>
                </div>
                <p className="address">Address: <span>{obj?.address}</span></p>
                <p className="view-map">
                    <span className="material-symbols-outlined">location_on</span>
                    view map
                </p>
                <div className="edit-delete">
                    <Link className="link" to={`/edit-hotel/${obj.id}`}>
                        <span className="edit">Edit</span>
                    </Link>
                    <span className="delete" onClick={() => handleDelete(obj.id)}>Delete</span>
                </div>
                
            </div>
        </div>
    )
}

export default Hotel;
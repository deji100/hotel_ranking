import CreateEditHotel from "../components/organisms/create-edit-delete-hotels";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { update_hotel } from "../state-manager/hotels"

interface HotelState {
    id: string;
    city: string;
    country: string;
    address: string;
    imgUrl: string;
}

interface RootState {
    index: number;
    hotelSearch: string;
    hotels: HotelState[];
    filteredHotels: HotelState[];
}

const EditPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams()
    // @ts-expect-error last resort after trying some options
    const { hotels } = useSelector((state: RootState) => state.hotel);
    
    const hotelData = hotels?.filter((hotel: HotelState) => hotel.id === id)
    const [data, setData] = useState<HotelState>({
        ...hotelData[0]
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "file") {
            const fileInput = e.target as HTMLInputElement;
            if (fileInput.files !== null && fileInput.files.length > 0) {
              const file: File = fileInput.files[0];
          
              const imgUrl = URL.createObjectURL(file); // Create a URL for the selected file
          
              const img = new Image();
              img.crossOrigin = "Anonymous";
              img.src = imgUrl;
          
              img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
          
                const ctx = canvas.getContext('2d');
                if (ctx) {
                  ctx.drawImage(img, 0, 0);
          
                  canvas.toBlob((blob) => {
                    if (blob) {
                      setData({ ...data, ["imgUrl"]: URL.createObjectURL(blob) });
                    }
                  }, 'image/png');
                }
              };
            } else {
              console.log("No file selected");
            }
        }else {
            setData({...data, [e.target.name]: e.target.value})
        }
    }

    const handleSelectChange = () => {
      console.log("Not applicable")
      }

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(update_hotel(data));
        navigate("/");
    }

    useEffect(() => {

    }, [])

    return (
        <div className="create-edit">
            <CreateEditHotel type="Edit Hotel" handleChange={handleChange} value={data} handleSelectChange={handleSelectChange} handleSubmit={handleSubmit}  />
        </div>
    )
}

export default EditPage;
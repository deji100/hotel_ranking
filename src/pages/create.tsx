import CreateEditHotel from "../components/organisms/create-edit-delete-hotels"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { add_new_hotel } from "../state-manager/hotels"

interface Data {
    id: string;
    name: string;
    city: string;
    country: string;
    address: string;
    imgUrl: string
}

const CreatePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState<Data>({
        id: "",
        name: "",
        city: "",
        country: "",
        address: "",
        imgUrl: ""
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = uuidv4().toString();
        dispatch(add_new_hotel({data, id}))
        navigate("/")
    }

    return (
        <div className="create-edit">
            <CreateEditHotel type="Create Hotel" handleChange={handleChange} value={data} handleSubmit={handleSubmit} />
        </div>
    )
}

export default CreatePage;
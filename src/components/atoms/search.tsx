import InputField from "./input-field"
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update_hotel_search, filter_hotels, clear_hotel_search } from "../../state-manager/hotels";

interface SearchProps {
    collapse: boolean;
}

const Search: React.FC<SearchProps> = ({collapse}) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        
    }

    useEffect(() => {
        console.log(search)
        if (search) {
            dispatch(update_hotel_search(search))
            dispatch(filter_hotels())
        }else {
            dispatch(clear_hotel_search())
        }
    }, [dispatch, search])

    return (
        <div className="search">
            <span className="material-symbols-outlined icon">search</span>
            {
                collapse && (
                    <InputField type="text" name="search" value={search} css="search" placeholder="Search" handleChange={handleChange} />
                )
            }
        </div>
    )
}

export default Search
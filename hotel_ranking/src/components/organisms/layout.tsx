import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetch_hotels_from_local } from "../../state-manager/hotels";
import Navbar from "../molecules/navbar"
import Sidebar from "../molecules/sidebar"

const Layout: React.FC = () => {
    const dispatch = useDispatch();
    const [collapse, setCollapse] = useState<boolean>(false);

    const handleCollapse = () => {
        setCollapse((prev: boolean) => !prev)
    }

    useEffect(() => {
        dispatch(fetch_hotels_from_local())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <div className="side-main">
                <Sidebar collapse={collapse} handleCollapse={handleCollapse} />
                <div className={collapse ? "main active" : "main"}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;
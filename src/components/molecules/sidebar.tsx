import React from "react";
import SearchFilterBoard from "./search_and_filter_board"

interface SidebarProps {
    collapse: boolean;
    handleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({collapse, handleCollapse}) => {
    return (
        <div className={collapse ? "sidebar active" : "sidebar"}>
            <span className={collapse ?"material-symbols-outlined panel active" : "material-symbols-outlined panel"} onClick={handleCollapse}>left_panel_open</span>
            <SearchFilterBoard collapse={collapse} />
        </div>
    )
}

export default Sidebar
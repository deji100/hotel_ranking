import React from "react";

interface SidebarProps {
    collapse: boolean;
    handleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({collapse, handleCollapse}) => {
    return (
        <div className={collapse ? "sidebar active" : "sidebar"}>
            <span className={collapse ?"material-symbols-outlined panel active" : "material-symbols-outlined panel"} onClick={handleCollapse}>left_panel_open</span>


        </div>
    )
}

export default Sidebar
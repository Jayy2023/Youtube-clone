import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import "./SidebarRow.css";
export default function SidebarRow( {selected, Icon, title}) {
  return (
   <div className={`sidebarRow ${selected && 'selected'}`}>
    <Icon className="sidebarRow__icon" />
    <h2 className='sidebarRow__title'>{title}</h2>
   </div>
  )
}

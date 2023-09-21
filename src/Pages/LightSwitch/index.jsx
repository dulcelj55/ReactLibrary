import "./index.css"
import  LightModeIcon  from '@mui/icons-material/LightMode';
import { useState } from "react";


const LightSwitch = ({lightIsOn, setLightIsOn}) => {
    
  return (
    <div className="page-container">
    {/* // 
    // Text
    // button to change the Icon */}
    <LightModeIcon className={`light-icon ${lightIsOn ? "color-yellow" : ""}`}/>
    <button onClick={()=>setLightIsOn(!lightIsOn)}>Change the light!</button>
    </div>
  )
}

export default LightSwitch
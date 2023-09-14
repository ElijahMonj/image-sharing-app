'use client'

import { useEffect, useState } from "react";
import {MdOutlineDarkMode,MdOutlineWbSunny} from 'react-icons/md'
const ThemeSwitch = () => {
    // @ts-ignore
    const [theme,setTheme] = useState<any>(localStorage.getItem("theme") ? localStorage.getItem("theme"): "corporate");
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // @ts-ignore
            localStorage.setItem("theme",theme);
            const localTheme = localStorage.getItem("theme")
            // @ts-ignore
            document.querySelector("html")?.setAttribute("data-theme", localTheme)
          }
    
    console.log("Theme switched.")
    }, [theme])
    function themeIcon(){
        if(theme==="business"){
            return (
                <MdOutlineDarkMode className="h-7 w-7" stroke="currentColor"/>
            )
        }
        if(theme==="corporate"){
            return(
                <MdOutlineWbSunny className="h-7 w-7" stroke="currentColor"/>
            )
        }
    }
    function swapTheme(){
        if(theme==="business"){
            setTheme("corporate")
        }
        if(theme==="corporate"){
            setTheme("business")
        }
    }
    return ( 
        <button className="btn btn-square rounded" onClick={()=>swapTheme()} >
            {themeIcon()}
        </button>
     );
}
 
export default ThemeSwitch;
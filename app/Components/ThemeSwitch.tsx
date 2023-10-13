'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import {MdOutlineDarkMode,MdOutlineWbSunny} from 'react-icons/md'
interface ThemeSwitchProps{
    theme:string
    id:string
}
const ThemeSwitch:React.FC<ThemeSwitchProps> = ({theme,id}) => {
    // @ts-ignore
    const [currentTheme,setCurrentTheme]=useState(theme)
    useEffect(() => { 
        const data ={
            id:id,
            theme:currentTheme
        }  
        axios.post('/api/theme',data)
        console.log("Theme set to: "+currentTheme)
        document.querySelector("html")?.setAttribute("data-theme", currentTheme)
    }, [currentTheme, id])
    function themeIcon(){
        if(currentTheme==="business"){
            return (
                <MdOutlineDarkMode className="h-7 w-7" stroke="currentColor"/>
            )
        }
        if(currentTheme==="corporate"){
            return(
                <MdOutlineWbSunny className="h-7 w-7" stroke="currentColor"/>
            )
        }
    }
    function swapTheme(){
        if(currentTheme==="business"){
            setCurrentTheme("corporate")
        }
        if(currentTheme==="corporate"){
            setCurrentTheme("business")
        }
    }
    return ( 
        <button className="btn btn-square rounded" onClick={()=>swapTheme()} >
            {themeIcon()}
        </button>
     );
}
 
export default ThemeSwitch;
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
        
        document.querySelector("html")?.setAttribute("data-theme", currentTheme)
    }, [currentTheme, id])
    function themeIcon(){
        if(currentTheme==="business"){
            return (
                <MdOutlineDarkMode className="h-5 w-5" stroke="currentColor"/>
            )
        }
        if(currentTheme==="corporate"){
            return(
                <MdOutlineWbSunny className="h-5 w-5" stroke="currentColor"/>
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
        <button className="btn btn-square rounded btn-sm me-2" onClick={()=>swapTheme()} >
            {themeIcon()}
        </button>
     );
}
 
export default ThemeSwitch;
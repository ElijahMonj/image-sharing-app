'use client'

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
interface NavigationBarProps{
  data:any
}

const NavigationBar:React.FC<NavigationBarProps> = ({data}) => {
  const router = useRouter()
 
  const [search,setSearch] = useState('');
  function handleSubmit(e: FormEvent){
    e.preventDefault()
    router.push('/search/'+search)
  }
    return (
      <>
      
       <div className="navbar fixed z-30 bg-base-100">
        <div className="navbar-start">   
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button lg:hidden md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
        </div>
        <div className="navbar-center">
        
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>  
          </form>
        
        </div>
        <div className="navbar-end">
        <ThemeSwitch theme={data.theme} id={data.id}/>
        </div>
      </div>
    
      </>
  
    );
  }

export default NavigationBar
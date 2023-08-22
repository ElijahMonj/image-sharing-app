
import Image from "next/image";
import Newsfeed from "./Newsfeed/Newsfeed";
import ThemeSwitch from "./ThemeSwitch";

export default function NavigationBar() {
    return (
      <>
       <div className="navbar bg-base-100 fixed">
        <div className="navbar-start">   
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button lg:hidden md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
        </div>
        <div className="navbar-center">
        
          <form method="GET">
            <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" />  
          </form>
        
        </div>
        <div className="navbar-end">
        <ThemeSwitch/>
        </div>
      </div>
    
      </>
  
    );
  }
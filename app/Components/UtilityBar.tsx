import {MdOutlineHome,MdOutlineSearch,MdOutlineExplore,MdOutlineNotifications,MdOutlineMessage,MdOutlineAddBox,MdOutlineAccountCircle,MdOutlineSettings,MdOutlineLogout} from 'react-icons/md'
const UtilityBar = () => {
    return ( 
        <>
        {/*lg*/}
        <ul className="w-1/5 xl:w-auto hidden lg:block menu p-2 bg-base-100 text-base-content menu-lg h-auto min-h-screen">
            <a className="btn btn-ghost normal-case text-xl ms-auto me-auto">daisyUI</a>
            {/* Sidebar content here */}
                <li>
                    <a>
                    <MdOutlineHome className="h-6 w-6" stroke="currentColor"/>
                    Home
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineExplore className="h-6 w-6" stroke="currentColor"/>    Explore
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineNotifications className="h-6 w-6" stroke="currentColor"/>  Notifications
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineMessage className="h-6 w-6" stroke="currentColor"/> Messages
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineAddBox className="h-6 w-6" stroke="currentColor"/> Create
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineAccountCircle className="h-6 w-6" stroke="currentColor"/> Profile
                    </a>
                </li>

                <div className="divider"></div> 
                <li>
                    <a>
                    <MdOutlineSettings className="h-6 w-6" stroke="currentColor"/> Settings
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineLogout className="h-6 w-6" stroke="currentColor"/> Logout
                    </a>
                </li>
        </ul>
        {/*md*/}
        <ul className="w-1/5 w-auto lg:hidden md:block hidden menu p-2 bg-base-100 text-base-content menu-lg h-auto min-h-screen">
            <a className="btn btn-ghost normal-case text-xl ms-auto me-auto">XD</a>
            {/* Sidebar content here */}
            <li>
                    <a>
                    <MdOutlineHome className="h-6 w-6" stroke="currentColor"/>
                    
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineExplore className="h-6 w-6" stroke="currentColor"/>    
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineNotifications className="h-6 w-6" stroke="currentColor"/>  
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineMessage className="h-6 w-6" stroke="currentColor"/> 
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineAddBox className="h-6 w-6" stroke="currentColor"/> 
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineAccountCircle className="h-6 w-6" stroke="currentColor"/> 
                    </a>
                </li>

                <div className="divider"></div> 
                <li>
                    <a>
                    <MdOutlineSettings className="h-6 w-6" stroke="currentColor"/> 
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineLogout className="h-6 w-6" stroke="currentColor"/> 
                    </a>
                </li>
        </ul>
        {/*mobile*/}
        <div className="drawer md:hidden absolute z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-auto h-auto min-h-screen menu bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
                    <a>
                    <MdOutlineHome className="h-6 w-6" stroke="currentColor"/>
                    Home
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineExplore className="h-6 w-6" stroke="currentColor"/>    Explore
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineNotifications className="h-6 w-6" stroke="currentColor"/>  Notifications
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineMessage className="h-6 w-6" stroke="currentColor"/> Messages
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineAddBox className="h-6 w-6" stroke="currentColor"/> Create
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineAccountCircle className="h-6 w-6" stroke="currentColor"/> Profile
                    </a>
                </li>

                <div className="divider"></div> 
                <li>
                    <a>
                    <MdOutlineSettings className="h-6 w-6" stroke="currentColor"/> Settings
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineLogout className="h-6 w-6" stroke="currentColor"/> Logout
                    </a>
                </li>
            
            </ul>
        </div>
        </div>
        </>
     );
}
 
export default UtilityBar;
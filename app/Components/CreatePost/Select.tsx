import {MdPersonSearch} from 'react-icons/md'
const Select = () => {
    return ( 
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-sm btn-ghost">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                       <MdPersonSearch className="h-5 w-5"/>
                       Tag someone...
                </div>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
     );
}
 
export default Select;
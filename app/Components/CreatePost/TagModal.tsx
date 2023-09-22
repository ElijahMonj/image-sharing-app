import { Dispatch, SetStateAction, FunctionComponent, useState } from 'react';
import {MdPersonSearch} from 'react-icons/md'
import Select from './Select';

interface TagModalProps{
    setOpenTag:Dispatch<SetStateAction<boolean>>;
}

const TagModal:React.FC<TagModalProps> = ({setOpenTag}) => {
    const [searchInput,setSearchInput]=useState('')
   
    const mockUsers=[
        {
            id:"10x10mjsdk",
            name:"Juswa"
        },
        {
            id:"20x10mjsdk",
            name:"Jerik"
        },
        {
            id:"33x10mjsdk",
            name:"Jesun"
        }
    ]
    return ( 
        <div className='flex flex-col'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                       <MdPersonSearch className="h-5 w-5"/>
                    </div>
                    <input 
                    value={searchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
                    type="search" id="default-search" className="block w-full p-4 pl-10 input input-bordered input-sm" placeholder="Search people..."/>          
                    
                </div>
                <div className='h-32 overflow-auto'>
                    <ul className="menu menu-sm bg-base-200 w-full rounded-box ">
                        <li><a onClick={()=>setSearchInput("Item 1")}>Item 1</a></li> 
                        <li><a>Item 1</a></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 1</a></li>
                                            
                    </ul>
                </div>
                
               
      
            <div className='w-full flex justify-between'>
                <button className='btn btn-sm mt-1 w-24' onClick={()=>setOpenTag(false)}>Cancel</button>
                <button className='btn btn-sm mt-1 w-24' onClick={()=>setOpenTag(false)}>Done</button>
            </div>
           
        </div>
        
     );
}
 
export default TagModal;
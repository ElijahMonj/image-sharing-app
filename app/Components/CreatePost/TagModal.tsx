import { Dispatch, SetStateAction, FunctionComponent, useState, useEffect } from 'react';
import {MdPersonSearch} from 'react-icons/md'

import axios from 'axios';
import Avatar from '../Avatar';


interface TagModalProps{
    setOpenTag:Dispatch<SetStateAction<boolean>>;
    setTaggedUser:Dispatch<SetStateAction<any>>;
    currentUser:any
}

const TagModal:React.FC<TagModalProps> = ({setOpenTag,currentUser,setTaggedUser}) => {
    const [searchInput,setSearchInput]=useState('')
    const [users,setUsers]=useState<any[]>([])
    
    useEffect(() => {
        axios.get("/api/getuser").then((data) => {
          
          setUsers(data?.data);
          
        });
      }, []);
     
      useEffect(() => {
        console.log(searchInput)
       
      }, [searchInput]);
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
                    <ul className="menu bg-base-200 w-full rounded-box ">
                    {users?.filter((uList) =>
                            uList.name?.toLowerCase().includes(searchInput)
                        )
                        ?.map((u) => 
                        <li key={u.id} onClick={()=>{
                            setTaggedUser(u)
                            setOpenTag(false)
                        }}>
                            <a>
                            <Avatar width={24} height={24} src={u?.image}/>
                            {u.name}
                            </a>
                        </li>
                        )
                    }                                 
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
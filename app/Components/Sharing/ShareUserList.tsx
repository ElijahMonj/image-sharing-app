'use client'
import { Dispatch, SetStateAction, FunctionComponent, useState, useEffect } from 'react';
import {MdPersonSearch} from 'react-icons/md'
import { FaLink } from "react-icons/fa6";
import ShareButton from './ShareButton';
import toast from 'react-hot-toast';

interface ShareUserList{
    currentUser:any
    post:any
    users:any[]
}

const ShareUserList:React.FC<ShareUserList> = ({currentUser,post,users}) => {
    const [searchInput,setSearchInput]=useState('')

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
                {users.length == 0 ? 
                    <div className='h-full flex justify-center flex-col text-center text-sm font-thin'>No available users.</div>
                :
                    <ul className="menu w-full rounded-box divide-y">
                    {users?.filter((uList) =>
                            uList.name?.toLowerCase().includes(searchInput)
                        )
                        ?.map((u) => 
                            <ShareButton key={u.id} user={u} post={post} currentUser={currentUser}/>              
                        )
                    }                                 
                    </ul>
                }   
                </div>
                
               
      
            <div className='w-full flex justify-between'>
                <button className='btn btn-sm mt-1' onClick={()=>{
                    navigator.clipboard.writeText(window.location.origin+`/post/${post.id}`);
                    toast.success('Link copied!')
                }}><FaLink />Share as link</button>
                
            </div>
           
        </div>
        
     );
}
 
export default ShareUserList;
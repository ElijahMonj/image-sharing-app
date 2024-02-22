import { Dispatch, SetStateAction, useState } from 'react';
import { MdPersonSearch } from 'react-icons/md';

import Avatar from '../Avatar';


interface TagModalProps{
    setOpenTag:Dispatch<SetStateAction<boolean>>;
    setTaggedUser:Dispatch<SetStateAction<any>>;
    currentUser:any
    taggableUsers:any
}

const TagModal:React.FC<TagModalProps> = ({setOpenTag,currentUser,setTaggedUser,taggableUsers}) => {
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
                    {taggableUsers == null ? 
                    <div className='h-full flex justify-center flex-col text-center text-sm font-thin'>Loading...</div>
                    :
                    <>
                        {taggableUsers.length == 0 ? 
                        <div className='h-full flex justify-center flex-col text-center text-sm font-thin'>No available users.</div>
                        :
                        <ul className="menu bg-base-200 w-full rounded-box ">
                        {taggableUsers?.filter((uList: { name: string; }) =>
                                uList.name?.toLowerCase().includes(searchInput)
                            )
                            ?.map((u:any) => 
                            <li key={u.id} onClick={()=>{
                                setTaggedUser(u)
                                setOpenTag(false)
                            }}>
                                <div className='w-full p-0 h-8'>
                                    <div className='h-full flex gap-2 items-center'>
                                        <div className='avatar w-8 '>
                                            <Avatar width={256} height={256} src={u?.image}/>
                                        </div> 
                                        
                                        {u.name}                             
                                       
                                    </div>
                                </div>
                            </li>
                            )
                        }                                 
                        </ul>
                        }  
                    </>
                    }
                                                    
                    
                </div>
                
               
      
            <div className='w-full flex justify-between'>
                <button className='btn btn-sm mt-1 w-24' onClick={()=>setOpenTag(false)}>Cancel</button>
                <button className='btn btn-sm mt-1 w-24' onClick={()=>setOpenTag(false)}>Done</button>
            </div>
           
        </div>
        
     );
}
 
export default TagModal;
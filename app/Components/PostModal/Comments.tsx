
import { useEffect } from 'react'
import {SlOptions} from 'react-icons/sl'
import Avatar from '../Avatar';
interface CommentsProps{
    data:any
}
const Comments:React.FC<CommentsProps> = ({data}) => {
    
    return ( 
        <div className='h-full flex flex-col justify-between divide-y'>
            <div className="flex justify-between grow-0 p-4">
                <div className='grid place-content-center'>
                    <Avatar size={30} src={data?.author?.image}/>
                </div>    
                <div className='grid place-content-center'>
                    <SlOptions className="h-4 w-4 hover:cursor-pointer hover:fill-secondary"/>
                </div>
            </div>
            
            <div className='grow-0 p-4'>{data.caption}</div>
            <div className='grow p-4'>
                <div className='relative w-full h-full'>
                <div className='absolute overflow-y-auto left-0 right-0 top-0 bottom-0'>
                <div className='mb-2'>
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                                <Avatar size={4} src={data?.author?.image}/>
                                Michael Gough</p>
                            <p className="text-sm"><div>Feb. 8, 2022</div></p>
                        </div>
                        <p>XD XD XDXDXDXD  XDXDX X XDDX</p>
                    </div>
                    <div className='mb-2'>
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                                <Avatar size={4} src={data?.author?.image}/>
                                Michael Gough</p>
                            <p className="text-sm"><div>Feb. 8, 2022</div></p>
                        </div>
                        <p>XD XD XDXDXDXD  XDXDX X XDDX</p>
                    </div>
                    <div className='mb-2'>
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                                <Avatar size={4} src={data?.author?.image}/>
                                Michael Gough</p>
                            <p className="text-sm"><div>Feb. 8, 2022</div></p>
                        </div>
                        <p>XD XD XDXDXDXD  XDXDX X XDDX</p>
                    </div>
                    <div className='mb-2'>
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                                <Avatar size={4} src={data?.author?.image}/>
                                Michael Gough</p>
                            <p className="text-sm"><div>Feb. 8, 2022</div></p>
                        </div>
                        <p>XD XD XDXDXDXD  XDXDX X XDDX</p>
                    </div>
                </div>
                </div>
                
           
            </div>
             
             <div className='grow-0 px-4 py-2'>
                <div>Actions</div>
                <div>Actions</div>
             </div>
            
           
            <div className='flex w-full grow-0 p-4'>
                <div>Emoji</div>
                <div>input</div>
                <button>Post</button>
            </div>
        </div>
     );
}
 
export default Comments;
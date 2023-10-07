
import { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Avatar from '../Avatar'
interface CommentDataProps{
    postData:any
    currentUser:any
}
const CommentData:React.FC<CommentDataProps> = ({postData,currentUser}) => {
    useEffect(() => {
        console.log(postData)
      }, [postData]);
    return ( 
        <div className='mb-2'>
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                    <Avatar size={4} src={postData?.author?.image}/>
                    Michael Gough</p>
                <p className="text-sm"><div>Feb. 8, 2022</div></p>
            </div>
            <p>XD XD XDXDXDXD  XDXDX X XDDX XD XDDX DX DXDX DX XD DXDXDX</p>
        </div>
     );
}
 
export default CommentData;
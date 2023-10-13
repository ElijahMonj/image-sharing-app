
import { useState, useEffect, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Avatar from '../Avatar'
interface CommentDataProps{
    postData:any
    currentUser:any
    isLoading:Boolean
}
const CommentData:React.FC<CommentDataProps> = ({postData,currentUser,isLoading}) => {
    const [comments,setComments]=useState<any>("loading")
   
    useEffect(() => {
        setComments("loading")
        axios.get(`/api/postcomments/${postData.id}`)
        .then(res => {
            const data = res.data;
            console.log(data)
            setComments(data)
        })
      }, [postData]);
      useEffect(() => {
        axios.get(`/api/postcomments/${postData.id}`)
        .then(res => {
            const data = res.data;
            console.log(data)
            setComments(data)
        })
      }, [isLoading,postData]);
      if(comments=="loading"){
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
      }else if(comments.length==0){
        return (
            <div className='w-full h-full flex items-center justify-center'>
            <div className='text-center text-gray-500'>No comments yet</div>
            </div>
        )
      }
      
    return ( 
        <div>
            {comments.map((comment:any) => (
            <div className='mb-2' key={comment.id}>
            <div className="flex items-center">
                <span className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                    <Avatar width={24} height={24} src={comment?.author?.image}/>
                    {comment?.author?.name}</span>
                <span className="text-sm"><div>Feb. 8, 2022</div></span>
            </div>
            <span>{comment.commentText}</span>
            </div>
        ))} 
        </div>
         
     );
}
 
export default CommentData;

import Image from 'next/image';
import PostModal from '../../Components/PostModal/PostModal';
import { useState } from 'react';
interface PostsProps{
    posts:any
    currentUser:any
}
const Posts:React.FC<PostsProps> = ({posts,currentUser}) => {
    const [currentPost,setCurrentPost]=useState(0);
    const [commentInput,setCommentInput]=useState('');
    function handlePostsModal(post:any){
        setCurrentPost(post)
        setCommentInput('')
         // @ts-ignore
        document?.getElementById(`post_modal`)?.showModal()
    }
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
             {/*@ts-ignore*/}
            {posts.map(post => {
                return (
                   
                 <div className="overflow-hidden cursor-pointer relative group" key={post.id} 
                 onClick={()=>{
                    handlePostsModal(post)
                 }}>
                    <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer 
                    absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                     <div>
                         <div
                             className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0
                              translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                             <div className="opacity-60 text-sm">
                                 {post.caption}            
                             </div>
                         </div>
                     </div>
                 </div>
                 <Image
                     alt=""
                     className="object-cover aspect-square transition duration-300 ease-in-out"
                     src={post.image}
                     width={999}
                     height={999}
                     
                 />
                   
                </div>
                
                );
                
            })} 
             <PostModal post={currentPost} commentInput={commentInput} setCommentInput={setCommentInput} currentUser={currentUser}/>
            
        </div>
     );
}
 
export default Posts;
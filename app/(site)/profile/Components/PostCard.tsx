'use client'
import Image from 'next/image';
interface PostCardProps{
    post:any
    currentPost:any
    setCurrentPost:any
}
const PostCard:React.FC<PostCardProps> = ({post,currentPost,setCurrentPost}) => {
    return ( 
        <div className="overflow-hidden cursor-pointer relative group" key={post.id} 
                 onClick={()=>{
                     
                     setCurrentPost(post)
                     // @ts-ignore
                     document?.getElementById(`postmodal`)?.showModal()
                 }}>
                    <div className="z-39 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer 
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
}
 
export default PostCard;
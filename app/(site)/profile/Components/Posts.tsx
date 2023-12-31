
import PostModal from '@/app/Components/PostModal/PostModal';
import { BiImageAdd } from "react-icons/bi";
import PostCard from './PostCard';
import React from 'react';
interface PostsProps{
    posts:any
    currentUser:any
}
const Posts:React.FC<PostsProps> = ({posts,currentUser}) => {
    
    return ( 
        <>        
             {posts.length==0 ?
                <div className="flex flex-col w-96 h-96 justify-center">
                    <div className="grid card rounded-box place-items-center ">
                        <BiImageAdd size={80} className="text-secondary"/>
                    </div>                       
                    <div className="grid card rounded-box place-items-center text-center text-secondary">Your saved posts is empty.</div>
                </div> 
                :
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                 {/*@ts-ignore*/}
                {posts.reverse().map(post => {
                    return (
                    <React.Fragment key={post.id}>
                        <PostCard post={post}/>
                        <PostModal currentUser={currentUser} postId={post.id}/> 
                    </React.Fragment> 
                    );
                })} 
                </div>
             } 
        </>
        
     );
}
 
export default Posts;
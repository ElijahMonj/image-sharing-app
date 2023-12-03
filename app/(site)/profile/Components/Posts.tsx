
import PostModal from '@/app/Components/PostModal/PostModal';

import PostCard from './PostCard';
import React from 'react';
interface PostsProps{
    posts:any
    currentUser:any
}
const Posts:React.FC<PostsProps> = ({posts,currentUser}) => {
    
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
             {/*@ts-ignore*/}
            {posts.map(post => {
                return (
                <React.Fragment key={post.id}>
                    <PostCard post={post}/>
                    <PostModal currentUser={currentUser} postId={post.id}/> 
                </React.Fragment> 
                );
                
            })} 
        </div>
     );
}
 
export default Posts;
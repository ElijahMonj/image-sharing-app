

import PostModal from '@/app/Components/PostModal/PostModal';
import PostCard from './PostCard';
import React from 'react';
interface SavedProps{
    posts:any
    currentUser:any
    savedPosts:any
}
const Saved:React.FC<SavedProps> = ({posts,currentUser,savedPosts}) => {
    
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
             {/*@ts-ignore*/}
            {savedPosts.map(post => {
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
 
export default Saved;
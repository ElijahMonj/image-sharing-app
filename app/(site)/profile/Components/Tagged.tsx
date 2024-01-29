

import PostModal from '@/app/Components/PostModal/PostModal';
import { BsPersonBadge } from "react-icons/bs";
import PostCard from './PostCard';
import React from 'react';
interface TaggedProps{
    currentUser:any
    taggedPosts:any
}

const Tagged:React.FC<TaggedProps> = ({currentUser,taggedPosts}) => {
    return ( 
        <>        
             {taggedPosts.length==0 ?
                <div className="flex flex-col w-96 h-96 justify-center">
                    <div className="grid card rounded-box place-items-center ">
                        <BsPersonBadge size={70} className="text-secondary"/>
                    </div>                       
                    <div className="grid card rounded-box place-items-center text-center text-secondary mt-1">This user wasn&apos;t tagged on any posts yet.</div>
                </div> 
                :
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                 {/*@ts-ignore*/}
                {taggedPosts.reverse().map(post => {
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
 
export default Tagged;
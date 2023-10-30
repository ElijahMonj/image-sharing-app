'use client'

import NewsfeedCard from "./NewsfeedCard";

import { useEffect, useState } from 'react';

import PostModal from '../PostModal/PostModal';
import { getNewsfeedPosts } from '@/app/actions/getNewsfeedPosts'
import LoadingSkeleton from "../LoadingSkeleton";
interface NewsfeedProps{
    currentUser:any
}
const Newsfeed:React.FC<NewsfeedProps> = ({currentUser}) => {
    
    const [currentPost,setCurrentPost]=useState(0);
    const [commentInput,setCommentInput]=useState('');
    const [posts,setPosts]=useState<any>('loading');

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNewsfeedPosts();
            console.log(response)
            setPosts(response)
          };
          fetchData()
          
      },[]);
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20"> 
               
                {posts=='loading' ? <LoadingSkeleton/>
                :<>
                    {posts.length==0 ? <div>no posts</div> : 
                    <>
                    {/*@ts-ignore*/}
                        {posts.map(post => (
                            <NewsfeedCard
                            setCurrentPost={setCurrentPost}
                            setCommentInput={setCommentInput} 
                            key={post.id}
                            data={post}
                            />
                        ))} 
                    </>
                    }
                 
                </>}
                
                <PostModal post={currentPost} commentInput={commentInput} setCommentInput={setCommentInput} currentUser={currentUser}/>
                
                            
        </div>
     );
}
 
export default Newsfeed;
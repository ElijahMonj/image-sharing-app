'use client'
import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'
import NewsfeedCard from "./NewsfeedCard";
import Long from "@/public/test/long.jpg";
import { useEffect } from 'react';

interface NewsfeedProps{
    posts:any
}
const Newsfeed:React.FC<NewsfeedProps> = ({posts}) => {
    useEffect(() => {
        console.log(posts)
      });
      
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20"> 
                {/*@ts-ignore*/}
                {posts.map(post => (
                    <NewsfeedCard 
                    key={post.id}
                    likes={post.likes.length}
                    email={post.author.email}
                    caption={post.caption}
                    tagged={"beta"}
                    image={post.image}
                    authorName={post.author.name}
                    authorImage={post.author.image}
                    id={post.id}
                    />
                ))} 

                
                            
        </div>
     );
}
 
export default Newsfeed;
'use client'
import React, { useState } from "react";
import PostCard from "../../profile/Components/PostCard";
import PostModal from "@/app/Components/PostModal/PostModal";
import Empty from "./Empty";
import Link from "next/link";
import Avatar from "@/app/Components/Avatar";

interface ResultsProps{
    currentUser:any
    posts:any
    users:any
}
const Results:React.FC<ResultsProps> = ({currentUser,users,posts}) => {
    const [currentPost,setCurrentPost]=useState(0);
    return ( 
        <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    
                    <>
                    {(posts.length==0 && users.length==0) ? 
                        <Empty/>
                        :
                        <>
                        {users.length==0 ? <></>:
                        <>
                            <div className="w-full text-xs mb-1">People</div>
                            {users.map((user: { id: React.Key | null | undefined; image: string; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
                                return (
                                    <div key={user.id} className="w-full bg-base-200 flex my-1 p-3 gap-2 rounded-lg">
                                        <div className="flex-shrink-0 w-12">
                                            <Link href={'/profile/'+user.id}>
                                            <Avatar 
                                            width={256}
                                            height={32}
                                            src={user?.image as string}
                                            />
                                            </Link>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold truncate">
                                            {user.name}
                                            </p>
                                            <p className="text-sm">
                                            {user.email}
                                            </p>
                                        </div>
                                        <Link className="btn btn-xs btn-neutral m-auto" href={'/profile/'+user.id}>View</Link>
                                    </div>
                                );
                            })} 
                            <div className="divider"></div>
                        </>
                        }
                        {posts.length==0 ? <></>:
                        <>
                        <PostModal currentPost={currentPost} 
                        setCurrentPost={setCurrentPost} 
                        currentUser={currentUser} posts={posts}/>
                        <div className="w-full text-xs mb-1">Posts</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                           {/*@ts-ignore*/}
                           {posts.map(post => {
                            return (
                                <PostCard post={post} key={post.id}
                                setCurrentPost={setCurrentPost} currentPost={currentPost}/>
                                );
                            })}
                        </div>
                        <div className="divider"></div>
                        </>
                        }
                        
                        </>
                        
                    }
                </>
                </div>    
     );
}
 
export default Results;
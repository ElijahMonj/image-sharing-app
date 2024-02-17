'use client'
import React, { useState } from "react";
import PostCard from "../../profile/Components/PostCard";
import PostModal from "@/app/Components/PostModal/PostModal";
import Empty from "./Empty";
import Link from "next/link";
import Avatar from "@/app/Components/Avatar";
import ShareModal from "@/app/Components/Sharing/ShareModal";

interface ResultsProps{
    currentUser:any
    searchedPosts:any
    searchedUsers:any
    users:any
}
const Results:React.FC<ResultsProps> = ({currentUser,searchedPosts,searchedUsers,users}) => {
    const [currentPost,setCurrentPost]=useState(0);
    return ( 
        <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto min-h-screen">
                    
                    <>
                    {(searchedPosts.length==0 && searchedUsers.length==0) ? 
                        <Empty/>
                        :
                        <>
                        {searchedUsers.length==0 ? <></>:
                        <>
                            <div className="w-full text-xs mb-1 mt-16 px-2">People</div>
                            {searchedUsers.map((user: { id: React.Key | null | undefined; image: string; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
                                return (
                                    <div key={user.id} className="w-full bg-base-200 flex my-1 p-3 gap-2 rounded-lg">
                                        <div className="flex-shrink-0 w-12">
                                            <Link href={'/profile/'+user.id} className="avatar">
                                            <Avatar 
                                            width={256}
                                            height={256}
                                            src={user?.image as string}
                                            />
                                            </Link>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold truncate">
                                            {user.name}
                                            </p>
                                            <p className="text-sm truncate">
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
                        {searchedPosts.length==0 ? <></>:
                        <>
                        <PostModal currentPost={currentPost} 
                        setCurrentPost={setCurrentPost} 
                        currentUser={currentUser} posts={searchedPosts}/>
                        <div className="w-full text-xs mb-1 px-2">Posts</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                           {/*@ts-ignore*/}
                           {searchedPosts.map(post => {
                            return (
                                <PostCard post={post} key={post.id}
                                setCurrentPost={setCurrentPost} currentPost={currentPost}/>
                                );
                            })}
                        </div>
                        <div className="divider"></div>
                        <ShareModal currentUser={currentUser} post={currentPost} users={users}/>
                        </>
                        }
                        
                        </>
                        
                    }
                </>
                </div>    
     );
}
 
export default Results;
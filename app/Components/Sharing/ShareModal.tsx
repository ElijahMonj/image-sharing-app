'use client'
import { useEffect, useState } from "react";
import ShareUserList from "./ShareUserList";
interface ShareModalProps{
    currentPost:any
    currentUser:any
    users:any
}

const ShareModal:React.FC<ShareModalProps> = ({currentUser,currentPost,users}) => {
    const [shareableUsers,setShareableUsers] = useState(users);
    console.log(currentPost)
    useEffect(()=>{
        setShareableUsers(users.filter((user: { id: number; }) => {
            return user.id !== currentPost?.authorId;
        }))
        console.log(shareableUsers)
    }, [currentPost,users]);

    return ( 
    //NOTIFICATION 
        <dialog id={`sharemodal`} className="modal modal-bottom sm:modal-middle">
            {currentPost==0 ? <div>no post</div> :
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Share Post</h3>
                
                <ShareUserList currentUser={currentUser} currentPost={currentPost} users={shareableUsers}/>
            </div>
            }
        </dialog>
    
    );
}
 
export default ShareModal;
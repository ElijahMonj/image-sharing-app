'use client'
import ShareUserList from "./ShareUserList";
interface ShareModalProps{
    post:any
    currentUser:any
    users:any
}

const ShareModal:React.FC<ShareModalProps> = ({currentUser,post,users}) => {

    const shareableUsers = users.filter((user: { id: number; }) => {
        return user.id !== post?.authorId;
    });

    return ( 
    //NOTIFICATION 
        <dialog id={`sharemodal`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Share Post</h3>
               
                <ShareUserList currentUser={currentUser} post={post} users={shareableUsers}/>
            </div>
        </dialog>
    
    );
}
 
export default ShareModal;
import ShareUserList from "./ShareUserList";
import prisma from "@/app/libs/prismadb";
interface ShareModalProps{
    postId:string
    currentUser:any
}

const ShareModal:React.FC<ShareModalProps> = async ({currentUser,postId}) => {
    const post = await prisma.post.findUnique({
        where:{
            id:postId
        }
    })
    const followingUsers = currentUser.following;
    const index = followingUsers.indexOf(post?.authorId);
    if (index > -1) { // only splice array when item is found
        followingUsers.splice(index, 1); // 2nd parameter means remove one item only
    }

    const users = await prisma.user.findMany({
        where:{
            id: { in: followingUsers },
        }
    })

    return ( 
    //NOTIFICATION 
        <dialog id={`share_${postId}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Share Post</h3>
                <ShareUserList currentUser={currentUser} postId={postId} users={users}/>
            </div>
        </dialog>
    
    );
}
 
export default ShareModal;

interface ShareModalProps{
    postId:string
    currentUser:any
}

const ShareModal:React.FC<ShareModalProps> = async ({currentUser,postId}) => {
    return ( 
    
        <dialog id={`share_${postId}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Sorry, sharing is currently on beta.</p>
            </div>
        </dialog>
    
    );
}
 
export default ShareModal;
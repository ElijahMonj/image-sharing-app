const ModalFollowing = () => {
    return ( 
        <dialog id="modalfollowing" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Following</h3>
                <ul className="menu bg-base-200 rounded-box">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
     );
}
 
export default ModalFollowing;
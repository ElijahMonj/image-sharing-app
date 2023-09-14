import {FaUserTag,FaImage} from 'react-icons/fa'

const CreatePostModal = () => {
    return ( 
    <dialog id="create_post_modal" className="modal">
      <div className="modal-box">
        <h4 className="font-bold text-lg">Create a new post</h4>
        
        <div className="modal-action flex flex-col">
          <form>
            <div className="w-full mb-4">
                <div className="px-4 py-2 rounded-t-lg ">
                    <label htmlFor="createPost" className="sr-only">Your comment</label>
                    <textarea id="createPost" rows={3} className="w-full px-0 text-sm bg-base-100" placeholder="Add a caption..."/>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t">
                    <button type="submit" className="btn btn-sm">
                        Post comment
                    </button>
                    <div className="flex pl-0 space-x-1 sm:pl-2">
                        <button type="button" className="btn btn-sm btn-ghost inline-flex justify-center items-center p-2 rounded cursor-pointer">
                              <FaUserTag className="h-4 w-4" />
                            <span className="sr-only">Tag a user</span>
                        </button>
                        <button type="button" className="btn btn-sm btn-ghost inline-flex justify-center items-center p-2 rounded cursor-pointer">
                              <FaImage className="h-4 w-4" />
                            <span className="sr-only">Upload Image</span>
                        </button>
                    </div>
                </div>
            </div>
          </form>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </div>
    </dialog>
     );
}
 
export default CreatePostModal;
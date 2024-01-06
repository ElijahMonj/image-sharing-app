import { FormEvent, useState } from 'react';
import {FaUserTag,FaImage} from 'react-icons/fa'
import TagModal from './TagModal';
import {toast} from 'react-hot-toast'
import axios from 'axios';

interface CreatePostModalProps{
  user:any,
  image:string
}
const CreatePostModal:React.FC<CreatePostModalProps> = ({user,image}) => {
    
    
    const [imageUpload,setImageUpload] =useState('');
    const [postButtonDisabled,setPostButtonDisabled]=useState(false);
    const [caption,setCaption]=useState('')
    const [openTag,setOpenTag]=useState(false);
    function handleSubmit(e:FormEvent){
      
      e.preventDefault();
      setPostButtonDisabled(true)
      const data = {
        author: user.id,
        caption:caption,
        tagged:[],
        image:image,
        
      }
      axios.post('/api/post',data)
        .catch(()=>toast.error('Something went wrong!'))
        .finally(()=> {
            setPostButtonDisabled(false);
            document.getElementById('closePostModalBtn')?.click()
            toast.success('Post created!');
        })
    }
    
    return ( 
    <dialog id="create_post_modal" className="modal">
      <div className="modal-box">
        <h4 className="font-bold text-lg">Create a new post</h4>
        {openTag &&(
          <TagModal setOpenTag={setOpenTag} currentUser={user}/>
          //<div onClick={()=>setOpenTag(false)}>open tag</div>
        )}
        {!openTag &&(
            <div className="modal-action flex flex-col">
            <form>
              <div className="w-full mb-4">
                  <div className="px-4 py-2 rounded-t-lg ">
                      <label htmlFor="createPost" className="sr-only">Caption</label>
                      <textarea id="createPost" maxLength={80} onChange={(e)=>setCaption(e.target.value)} value={caption} rows={3} className="w-full px-0 text-sm bg-base-100" placeholder="Add a caption..."/>
                  </div>
                  <div className="flex items-center justify-end px-3 py-2 border-t">
                      
                          <button type="button" onClick={()=>setOpenTag(true)} className="btn btn-sm btn-ghost inline-flex justify-center items-center p-2 rounded cursor-pointer">
                                <FaUserTag className="h-4 w-4" />
                              <span className="sr-only">Tag a user</span>
                          </button>         
                      
                  </div>
                   <button type="submit" className="btn btn-sm w-full" disabled={postButtonDisabled} onClick={handleSubmit}>
                          Post
                    </button>
              </div>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id='closePostModalBtn'>✕</button>
            </form>
          </div>
        )}


      </div>
    </dialog>
     );
}
 
export default CreatePostModal;
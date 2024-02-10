import { FormEvent, useState } from 'react';
import {FaUserTag,FaUserSlash } from 'react-icons/fa'
import TagModal from './TagModal';
import {toast} from 'react-hot-toast'
import axios from 'axios';
import Avatar from '../Avatar';

interface CreatePostModalProps{
  user:any,
  image:string
}
const CreatePostModal:React.FC<CreatePostModalProps> = ({user,image}) => {
    const [taggedUser, setTaggedUser] = useState<any>("")
    const [postButtonDisabled,setPostButtonDisabled]=useState(false);
    const [caption,setCaption]=useState('')
    const [openTag,setOpenTag]=useState(false);
    function handleSubmit(e:FormEvent){
      
      e.preventDefault();
      setPostButtonDisabled(true)
      const data = {
        author:user.id,
        caption:caption,
        tagged:taggedUser.id,
        image:image,  
      }
      axios.post('/api/post',data).then(()=>toast.success('Post created!'))
        .catch(()=>toast.error('Something went wrong!'))
        .finally(()=> {
            setPostButtonDisabled(false);
            setCaption('')
            document.getElementById('closePostModalBtn')?.click()
        })
    }
    
    return ( 
    <dialog id="create_post_modal" className="modal" onClose={()=>{
      setTaggedUser("")
    }}>
      <div className="modal-box">
        <h4 className="font-bold text-lg">Create a new post</h4>
        {openTag &&(
          <TagModal setOpenTag={setOpenTag} currentUser={user} setTaggedUser={setTaggedUser}/>
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
                  {taggedUser=="" ? 
                  <div className="flex items-center justify-between px-3 py-2 border-t">
                    <div className='text-xs'>
                      Tag someone...                           
                    </div>
                      <button type="button" onClick={()=>setOpenTag(true)} className="btn btn-sm btn-ghost inline-flex justify-center items-center p-2 rounded cursor-pointer">
                            <FaUserTag className="h-4 w-4" />
                          <span className="sr-only">Tag a user</span>
                      </button>                        
                  </div>       
                  : 
                  <div className="flex items-center justify-between px-3 py-2 border-t">
                    <div className='flex gap-1 text-sm'>
                        Posting with <strong>{taggedUser?.name}</strong> 
                      <div className='avatar w-6'>
                      <Avatar width={256} height={256} src={taggedUser?.image}/> 
                      </div>                                            
                    </div>
                      <button type="button" onClick={()=>setTaggedUser("")} className="btn btn-sm btn-ghost inline-flex justify-center items-center p-2 rounded cursor-pointer">
                            <FaUserSlash className="h-4 w-4" />
                          <span className="sr-only">Remove tagged user</span>
                      </button>         
                  
                  </div> 
                  }
                  
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
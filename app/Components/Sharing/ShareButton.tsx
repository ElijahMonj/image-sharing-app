import Avatar from '../Avatar';
import { PiPaperPlaneTilt } from 'react-icons/pi';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
interface ShareButtonProps{
    user:any
    post:any
    currentUser:any
}
const ShareButton:React.FC<ShareButtonProps> = ({user,post,currentUser}) => {

    const [isShared, setIsShared] = useState(false);

    return ( 

        <div key={user.id} className='flex flex-row justify-between py-1'>
            <div className='flex'>
                    <Link href={`/profile/${user?.id}`} className='avatar w-8'>
                    <Avatar 
                    width={256}
                    height={256}
                    src={user?.image as string}
                    />
                    </Link>
            <div className='font-semibold my-auto ms-2'>
                {user.name}
            </div>
            
            </div>
            {!isShared ? 
                <button className='btn btn-xs mt-1 btn-primary w-22' onClick={()=>{
                    setIsShared(true)
                    const data = {
                        ownerId:user.id,
                        userName:currentUser.name,
                        userImage:currentUser.image,
                        link:"/post/"+post.id,
                    }
                    axios.post('/api/share',data)
                        .catch(()=>{
                            toast.error('Something went wrong!')
                            setIsShared(false)
                        })
                        .finally(()=> {                   
                            toast.success('Post shared with '+user.name);
                        })
                }}><PiPaperPlaneTilt/>Share</button> :
                <button className='btn btn-xs mt-1 btn-primary btn-disabled w-22'><PiPaperPlaneTilt/>Shared</button>
            }
            
                            
        </div>

     );
}
 
export default ShareButton;